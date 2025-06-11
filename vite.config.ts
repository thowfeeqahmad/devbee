import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/devbee/', // 👈 This is essential for GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
