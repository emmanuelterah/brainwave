import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Default port, change if needed
    host: '0.0.0.0', // This allows access from the local network
    open: true // Automatically open the browser on server start
  }
});