import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import history from 'connect-history-api-fallback';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    setupMiddlewares(middlewares) {
      middlewares.unshift(
        history({
          verbose: false,       // optional: make true only for debugging
          disableDotRule: true, // needed for proper route handling
        })
      );
      return middlewares;
    },
  },
});
