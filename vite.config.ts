
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    // Para GH Pages, si construyes desde un subdirectorio (ej. github.com/user/repo), usa '/repo/'
    // Usar base './' suele fallar en history fallbacks de SPA en github pages.
    // Usar base: process.env.BASE_URL || '/'  te permite inyectar la base en el workflow
    base: process.env.VITE_BASE_URL || '/',
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});
