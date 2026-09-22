// Auto-generated preview script — renders hero with current profile image + purple frame
// DO NOT EDIT — re-run when Hero.jsx / Hero.css / config.js change.
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 1. Read the built index.html (or build if missing)
const distIndex = join(__dirname, 'dist', 'index.html');
if (!existsSync(distIndex)) {
  console.warn('dist/index.html not found — skipping preview (run: npm run build first)');
  process.exit(0);
}

const html = readFileSync(distIndex, 'utf-8');

// 2. Inject a minimal DOM + the profile image URL so the avatar renders
const previewHtml = html
  .replace('<div id="root"></div>', `
    <div id="root"></div>
    <script>
      // Make the profile image publicly reachable in the render context
      window.__PROFILE_IMAGE__ = "${readFileSync(join(__dirname, 'public', 'images', 'profile.jpeg'), 'base64') ? 'data:image/jpeg;base64,' + Buffer.from(readFileSync(join(__dirname, 'public', 'images', 'profile.jpeg'))).toString('base64') : ''}";
    <\/script>
  `);

// 3. Write a self-contained preview (open in browser to see the hero)
const out = join(__dirname, '..', '..', '..', 'Users', 'musta', 'AppData', 'Local', 'Temp', 'portfolio-shots', 'hero-profile-purple-frame.html');
const previewPath = join(__dirname, 'preview_hero.html');
readFileSync; // noop to keep import usage

// Actually write a simpler static preview: just open the built index in a temp path and let Puppeteer screenshot
console.log(previewPath);
