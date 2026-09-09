// Renders the social images from the HTML in assets/social.
//
// They are published to LinkedIn and to whatever unfurls a link, so the file
// that matters is a PNG somewhere else. Keeping the source here means the next
// version is an edit rather than an archaeology exercise.

import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const CHROMES = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];

const chrome = process.env.CHROME ?? CHROMES.find((p) => existsSync(p));
if (!chrome) {
  console.error('[social] no Chrome found. Set CHROME to the binary and run again.');
  process.exit(1);
}

/** @type {Array<[string, number, number, string]>} */
const cards = [
  ['assets/social/og-card.html', 1200, 630, 'app/public/og.png'],
  ['assets/social/linkedin-banner.html', 1584, 396, 'assets/social/linkedin-banner.png'],
];

for (const [source, width, height, out] of cards) {
  const result = spawnSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--force-color-profile=srgb',
    '--virtual-time-budget=3000',
    `--window-size=${width},${height}`,
    `--screenshot=${out}`,
    `file://${resolve(source)}`,
  ], { stdio: 'ignore' });

  if (result.status !== 0 || !existsSync(out)) {
    console.error(`[social] ${source} did not render`);
    process.exit(1);
  }
  console.log(`[social] ${out}  ${width}x${height}`);
}
