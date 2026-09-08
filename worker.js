// The Cloudflare entry. `workerFrom` builds the app on the first request, which
// is when `env` exists.
//
// The imports are literal paths on purpose: a bundler cannot follow a computed
// one, and everything the worker serves has to be in the bundle because workerd
// has no disk to read from.

import { workerFrom } from '@transclude/core/worker';
import * as bundle from './dist/server/assets.js';
import * as entry from './dist/server/entry.js';
import manifest from './dist/routes.json';
import config from './transclude.config.js';

export default workerFrom({ config, manifest, entry, bundle });
