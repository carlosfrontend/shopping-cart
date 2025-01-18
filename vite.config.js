import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  globals: true,
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
})
