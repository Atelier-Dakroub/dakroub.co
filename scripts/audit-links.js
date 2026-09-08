// Every internal link on every page, followed.
//
// The type check does not catch this. A link to `/log/something` is a string,
// and it is only wrong once the entry it points at turns out to have no body
// and therefore no page. That has happened more than once, and it reaches the
// site silently, because nothing fails at build time.
//
// It crawls the running server rather than reading `dist/`, so the dynamic
// route and the generated feed and sitemap are checked the same as a file.
// External links are left alone: they break for reasons that are not ours and
// would make this fail on somebody else's outage.

import { spawn } from 'node:child_process';

const PORT = process.env.AUDIT_PORT ?? '8788';
const base = `http://127.0.0.1:${PORT}`;

const server = spawn('node', ['node_modules/.bin/transclude-serve'], {
  env: { ...process.env, PORT },
  stdio: 'ignore',
});

const stop = () => server.kill('SIGTERM');
process.on('exit', stop);
process.on('SIGINT', () => process.exit(130));

/** Wait for the server, rather than sleeping a guess. */
async function ready(attempts = 60) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      await fetch(base + '/');
      return true;
    } catch {
      await new Promise((r) => setTimeout(r, 250));
    }
  }
  return false;
}

if (!(await ready())) {
  console.error(`[audit] the server never came up on ${base}`);
  process.exit(1);
}

const seen = new Set(['/']);
const queue = ['/'];
const broken = [];
let checked = 0;

while (queue.length) {
  const path = queue.shift();
  let response;
  try {
    response = await fetch(base + path);
  } catch (error) {
    broken.push([path, String(error)]);
    continue;
  }
  checked += 1;
  if (response.status >= 400) {
    broken.push([path, response.status]);
    continue;
  }
  if (!response.headers.get('content-type')?.includes('text/html')) continue;

  const html = await response.text();
  for (const match of html.matchAll(/(?:href|src)="([^"#][^"]*)"/g)) {
    const raw = match[1];
    if (/^(https?:|mailto:|tel:|data:|\/\/)/.test(raw)) continue;
    const next = new URL(raw, base + path).pathname + (new URL(raw, base + path).search || '');
    if (seen.has(next)) continue;
    seen.add(next);
    queue.push(next);
  }
}

console.log(`[audit] ${checked} URLs reached, ${broken.length} broken`);
for (const [path, why] of broken) console.error(`  ${path} -> ${why}`);
process.exit(broken.length ? 1 : 0);
