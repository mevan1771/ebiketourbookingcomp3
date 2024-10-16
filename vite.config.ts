import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.SUPPRESS_BEAUTIFUL_DND_WARNINGS': JSON.stringify(true),
  },
  envPrefix: 'VITE_', // This ensures Vite loads environment variables prefixed with VITE_
});