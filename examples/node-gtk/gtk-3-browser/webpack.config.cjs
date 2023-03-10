const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); // TypeScript type checker
const path = require('path');

exports.default = {
    mode: 'development',
    entry: ['./main.ts'],
    externalsPresets: { node: true },
    externals: [
        nodeExternals(),
        nodeExternals({
            // necessary so that it also works with npm workspaces
            modulesDir: path.resolve(__dirname, '../../../node_modules')
        }),
    ],
    output: {
        filename: 'main.js',
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: [/node_modules/],
                options: {
                    // disable type checker - we will use it in fork plugin
                    transpileOnly: true
                }
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.jsx', '.ts', '.js'],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin()
    ]
};
