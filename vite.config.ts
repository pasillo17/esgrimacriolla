
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    // Base relativa es la forma más estable para páginas sin React Router en GitHub Pages
    base: './',
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    }
  };
});
