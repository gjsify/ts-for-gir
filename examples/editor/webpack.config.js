const path = require('path')
const webpack = require('webpack')
const MinifyPlugin = require('babel-minify-webpack-plugin')

module.exports = env => ({
  entry: ['./main.ts' ],
  output: {
    filename: 'editor.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: env === 'production'
    ? [ new MinifyPlugin({}, { comments: false }) ]
    : [],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
})
