#!/usr/bin/env node
// Thin wrapper around `gjsify build src/start.ts` that injects the package.json
// version as the build-time `__TS_FOR_GIR_VERSION__` define. Without it the
// runtime fallback (reading `<source-dir>/../../package.json` via dev-mode
// path math) would fire and try to read the wrong file inside the bundle's
// rewritten `import.meta.url`. Keeping the define in sync with package.json
// avoids hardcoding the version anywhere else.

import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(join(here, '..', 'package.json'), 'utf-8'));

const result = spawnSync(
    'gjsify',
    [
        'build',
        'src/start.ts',
        '--define',
        `__TS_FOR_GIR_VERSION__=${JSON.stringify(pkg.version)}`,
    ],
    { stdio: 'inherit', cwd: join(here, '..') },
);
process.exit(result.status ?? 1);
