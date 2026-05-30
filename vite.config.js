import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/search': {
        target: 'https://internshala.com',
        changeOrigin: true,
        rewrite: (path) => '/hiring/search',
      }
    }
  }
})