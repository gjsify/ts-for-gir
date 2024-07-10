import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // target: "firefox60", // Since GJS 1.53.90
    // target: "firefox68", // Since GJS 1.63.90
    // target: "firefox78", // Since GJS 1.65.90
    // target: "firefox91", // Since GJS 1.71.1
    // target: "firefox102", // Since GJS 1.73.2
    target: "firefox115", // Since GJS 1.77.2

    assetsDir: '.',
    rollupOptions: {
      input: 'main.ts',
      output: {
        entryFileNames: 'main.js',
      },
      external: [
        new RegExp('^gi:\/\/*', 'i'),
        new RegExp('^resource:\/\/*', 'i'),
        'gettext', 'system', 'cairo'
      ],
    },
    cssMinify: false
  }
});