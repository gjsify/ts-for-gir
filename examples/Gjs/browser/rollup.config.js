import typescript from 'rollup-plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'main.ts',
  output: {
    file: 'dist/browser.js',
    format: 'iife'
  },

  plugins: [
    typescript(),
    // resolve({
    //   extensions: ['.js', '.ts']
    // }),
    // sucrase({
    //   exclude: ['node_modules/**'],
    //   transforms: ['typescript']
    // })
  ]
};
