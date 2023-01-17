import { defineConfig } from 'vite'
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  build: {
    assetsDir: '.',
    rollupOptions: {
      input: 'main.ts',
      output: {
        entryFileNames: 'main.js',
      },
      external: [
        new RegExp('^gi:\/\/*', 'i')
      ],
      plugins: [
        babel({
          babelHelpers: 'bundled',
          targets: {
            firefox: 91
            // firefox: 60, // Since GJS 1.53.90
            // firefox: 68, // Since GJS 1.63.90
            // firefox: 78, // Since GJS 1.65.90
            // firefox: 91, // Since GJS 1.71.1
          }
        })
      ]
    }
  }
});