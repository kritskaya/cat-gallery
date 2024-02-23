import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/main.scss";',
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      $fonts: resolve('./src/assets/fonts'),
    },
  },
  server: {
    open: true,
  },
});
