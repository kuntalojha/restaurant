import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Here I change the server port 5173 to 3000
  // opent true is for opening the browser
  server: {
    port: 3000,
    open: true,
  },
});
