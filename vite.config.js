import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        conceptHome: resolve(rootDir, 'concept-home.html'),
        projectShowcase: resolve(rootDir, 'project-showcase.html'),
      },
    },
  },
});
