import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// すべてのindex-bundled.htmlファイルを自動で検索
function getHtmlEntries() {
  const entries = {};

  // ルートディレクトリのすべてのサブフォルダを取得
  const dirs = fs.readdirSync('.', { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .filter(dirent => !dirent.name.startsWith('.') && dirent.name !== 'node_modules')
    .map(dirent => dirent.name);

  dirs.forEach(dir => {
    const htmlPath = resolve(__dirname, dir, 'index-bundled.html');
    if (fs.existsSync(htmlPath)) {
      entries[dir] = htmlPath;
    }
  });

  return entries;
}

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: getHtmlEntries()
    }
  },
  server: {
    port: 3000,
    open: true,
    // すべてのHTMLページへのアクセスを許可
    fs: {
      strict: false
    }
  }
});
