#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const tsPath = resolve(__dirname, './start.ts');

const nodeArgs = [
  '--experimental-specifier-resolution=node',
  '--experimental-strip-types',
  '--experimental-transform-types',
  '--no-warnings',
  tsPath,
  ...process.argv.slice(2),
];

spawn('node', nodeArgs, { stdio: 'inherit' });