const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: ['./main.ts'],
    target: 'node',
    externals: [nodeExternals()],
    output: {
        filename: 'editor.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: [/node_modules/],
            },
        ],
    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}
