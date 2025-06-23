import { build } from 'esbuild'
import { nodeExternalsPlugin } from 'esbuild-node-externals'

await build({
    entryPoints: ['src/start.ts'],
    outdir: 'lib',
    bundle: true,
    target: 'node18',
    format: 'esm',
    platform: 'node',
    plugins: [
        nodeExternalsPlugin({
            allowList: [/^@ts-for-gir/, /^@gi\.ts/],
        }),
    ],
})
