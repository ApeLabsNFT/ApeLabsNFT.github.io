import { defineConfig } from 'vite';

export default defineConfig({
  // Keep this standalone portfolio independent of PostCSS files in parent folders.
  css: { postcss: { plugins: [] } },
});
