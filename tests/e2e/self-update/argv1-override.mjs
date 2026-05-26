/**
 * --import preload: argv[1] override for self-update path-detection tests.
 *
 * When TS_FOR_GIR_ARGV1_OVERRIDE is set, replace process.argv[1] with the
 * supplied value BEFORE the CLI module loads. This lets tests drive the
 * three path-detection branches in getCurrentBinaryPath() (accepted gjsify-
 * global path, rejected plain node_modules path, rejected .ts dev path)
 * without modifying production code or touching frozen ESM module namespaces.
 *
 * process.argv is a plain mutable JS array — mutating it here is safe.
 */
if (process.env.TS_FOR_GIR_ARGV1_OVERRIDE) {
  process.argv[1] = process.env.TS_FOR_GIR_ARGV1_OVERRIDE;
}
