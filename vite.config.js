import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  base: './',
  publicDir: 'public',
  server: {
    port: 3000,
    open: '/index.html',
    // すべてのHTMLページへのアクセスを許可
    fs: {
      strict: false
    },
    // MIMEタイプの設定
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // すべてのHTMLファイルをそのまま出力
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});
