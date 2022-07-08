const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

module.exports = {
    entry: ['./main.ts'],
    target: 'node',
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
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
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
            {
                test: /\.(txt|glade)$/i,
                use: 'raw-loader',
            },
        ],
    },
    mode: "production",
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [new ForkTsCheckerWebpackPlugin()]
};
