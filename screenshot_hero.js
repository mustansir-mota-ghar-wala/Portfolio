// screenshot_hero.js — captures the live hero section via Edge CDP
// Run: node screenshot_hero.js     (after: npm run build)
import { spawn, execSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import http from 'node:http';
import { WebSocket } from './ws_cdp.js';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const PORT = 9222;
const SRC = 'http://127.0.0.1:5174/'; // vite preview of dist/
const OUT = join('C:\\Users\\musta', 'AppData', 'Local', 'Temp', 'portfolio-shots', 'hero-profile-purple-frame.png');

const tmp = 'C:\\Users\\musta\\AppData\\Local\\Temp\\portfolio-shots';
mkdirSync(tmp, { recursive: true });

// Start a static server for dist/
const srv = spawn('cmd', ['/c', 'cd /d a:\\portfolio\\frontend && npx vite preview --port 5174 --host 0.0.0.0'], {
  stdio: 'pipe',
  shell: true,
  detached: false,
});

function waitFor(url, timeoutMs = 20000) {
  return new Promise((resolve, reject) => {
    const t0 = Date.now();
    const iv = setInterval(() => {
      http.get(url, r => {
        if (r.statusCode === 200) { clearInterval(iv); resolve(); }
      }).on('error', () => {
        if (Date.now() - t0 > timeoutMs) { clearInterval(iv); reject(new Error('timeout')); }
      });
    }, 400);
  });
}

async function main() {
  try {
    await waitFor(SRC);
    console.log('server up');

    // Launch Edge CDP
    const edge = spawn(EDGE_PATH, [
      '--headless=new',
      '--remote-debugging-port=' + PORT,
      '--no-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      'about:blank',
    ], { stdio: 'pipe' });

    await new Promise(r => setTimeout(r, 2500));

    const wsUrl = await getPageWs();
    const ws = new WebSocket(wsUrl);
    const msgs = [];
    ws.onMessage = (m) => msgs.push(m);

    ws.send({ id: 1, method: 'Page.enable' });
    ws.send({ id: 2, method: 'Page.navigate', params: { url: SRC } });

    // Wait for load + paint
    await new Promise(r => setTimeout(r, 3500));

    ws.send({ id: 3, method: 'Page.captureSnapshot', params: { format: 'png', fromSurface: true } });

    await new Promise(r => setTimeout(r, 1500));
    ws.close();
    edge.kill();

    const snap = msgs.find(m => m.method === 'Page.captureSnapshot' && m.params?.data);
    if (!snap) throw new Error('no screenshot');
    writeFileSync(OUT, Buffer.from(snap.params.data, 'base64'));
    console.log('saved:', OUT);
  } catch (err) {
    console.error(err.message);
    srv.kill();
    process.exit(1);
  }
  srv.kill();
}

function getPageWs() {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('no CDP page')), 15000);
    http.get('http://127.0.0.1:' + PORT + '/json', res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        clearTimeout(t);
        try {
          const pages = JSON.parse(d);
          const p = pages.find(p => p.type === 'page' && p.webSocketDebuggerUrl);
          if (!p) return reject(new Error('no page'));
          resolve(p.webSocketDebuggerUrl);
        } catch (e) { reject(e); }
      });
    }).on('error', err => { clearTimeout(t); reject(err); });
  });
}

main();
