#!/usr/bin/env node

/**
 * CLI Wrapper for TypeScript Execution
 * 
 * This wrapper is required to execute our CLI tool with the necessary Node.js parameters.
 * Due to "type": "module" specified in package.json, Node.js only accepts .js files 
 * and rejects .ts or .sh files directly. This wrapper bridges that gap by:
 * 
 * 1. Providing a .js entry point that Node.js can execute
 * 2. Spawning the actual TypeScript file with experimental Node.js flags
 * 3. Enabling TypeScript execution without compilation step
 * 
 * The experimental flags used:
 * - --experimental-specifier-resolution=node: Enables Node.js-style module resolution
 * - --experimental-strip-types: Strips TypeScript types during execution
 * - --experimental-transform-types: Transforms TypeScript syntax to JavaScript
 * - --no-warnings: Suppresses experimental feature warnings
 */

import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

// Get the current file's directory in ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Resolve the path to the actual TypeScript CLI entry point
const tsPath = resolve(__dirname, './start.ts');

// Configure Node.js arguments for TypeScript execution
const nodeArgs = [
  '--experimental-specifier-resolution=node',
  '--experimental-strip-types',
  '--experimental-transform-types',
  '--no-warnings',
  tsPath,
  ...process.argv.slice(2), // Forward all CLI arguments to the TypeScript file
];

// Spawn the Node.js process with TypeScript support and inherit stdio
spawn('node', nodeArgs, { stdio: 'inherit' });