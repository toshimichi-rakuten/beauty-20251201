import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  base: '/',
  publicDir: false,
  server: {
    port: 3000,
    open: true,
    // すべてのHTMLページへのアクセスを許可
    fs: {
      strict: false,
      allow: ['.']
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});
