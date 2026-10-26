import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Escucha en 0.0.0.0 para Docker y red local
    port: 5173,
    watch: {
      usePolling: process.env.USE_POLLING === 'true',
    },
  },
})
