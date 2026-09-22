// Minimal WebSocket client for CDP (text frames only)
import net from 'node:net';

export class WebSocket {
  constructor(url) {
    const u = new URL(url);
    this._host = u.hostname;
    this._port = u.port;
    this._path = u.pathname + u.search;
    this._buffer = Buffer.alloc(0);
    this._handlers = {};
    this._socket = require('net').createConnection(this._port, this._host, () => {
      this._ready = true;
      this._flush();
    });
    this._socket.on('data', (buf) => {
      this._buffer = Buffer.concat([this._buffer, buf]);
      while (this._buffer.length >= 2) {
        const opcode = this._buffer[0] & 0x0f;
        const masked = (this._buffer[1] & 0x80) !== 0;
        let len = this._buffer[1] & 0x7f;
        let hdr = 2;
        if (len === 126) { len = (this._buffer[2] << 8) | this._buffer[3]; hdr = 4; }
        else if (len === 127) {
          len = 0;
          for (let i = 0; i < 8; i++) len = (len << 8) | this._buffer[2 + i];
          hdr = 10;
        }
        if (this._buffer.length < hdr + len) break;
        const ext = this._buffer.slice(0, hdr);
        let payload = this._buffer.slice(hdr, hdr + len);
        if (masked) {
          const mask = ext.slice(hdr - 4, hdr);
          for (let i = 0; i < payload.length; i++) payload[i] ^= mask[i % 4];
        }
        this._buffer = this._buffer.slice(hdr + len);
        if (opcode === 1) {
          try { const m = JSON.parse(payload.toString()); this._handlers['message']?.(m); } catch {}
        } else if (opcode === 8) { this._ready = false; this._handlers['close']?.(); break; }
      }
    });
    this._socket.on('error', (e) => this._handlers['error']?.(e));
  }

  send(obj) {
    const msg = JSON.stringify(obj);
    const bytes = Buffer.from(msg, 'utf-8');
    const len = bytes.length;
    let hdr;
    if (len < 126) hdr = Buffer.from([0x81, len]);
    else if (len < 65536) hdr = Buffer.concat([Buffer.from([0x81, 126]), Buffer.from([len >> 8, len & 0xff])]);
    else {
      hdr = Buffer.alloc(10);
      hdr[0] = 0x81; hdr[1] = 127;
      for (let i = 0; i < 8; i++) hdr[2 + i] = (len >> (56 - i * 8)) & 0xff;
    }
    this._socket.write(Buffer.concat([hdr, bytes]));
  }

  close() { this._socket.end(); }

  onMessage(fn) { this._handlers['message'] = fn; }
  onClose(fn) { this._handlers['close'] = fn; }
  onError(fn) { this._handlers['error'] = fn; }

  _flush() {
    // nothing queued currently
  }
}
