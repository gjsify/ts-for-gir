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

// __GJS_BUNDLE__=true: trips the early-return guard in commands that aren't
// yet supported on the GJS bundle (currently only `create`, which depends on
// dist-templates/ shipping alongside the binary — install.js downloads the
// single binary asset only). Without the define, the guard's `typeof !==
// "undefined"` check is dead code and the command falls through to
// findTemplatesRoot(), printing a confusing "Could not locate templates
// directory" error instead of the intended "not yet supported, use Node"
// message. Track templates-shipping work in CHANGELOG.md.
const result = spawnSync(
    'gjsify',
    [
        'build',
        'src/start.ts',
        '--define',
        `__TS_FOR_GIR_VERSION__=${JSON.stringify(pkg.version)}`,
        '--define',
        '__GJS_BUNDLE__=true',
    ],
    { stdio: 'inherit', cwd: join(here, '..') },
);
process.exit(result.status ?? 1);
