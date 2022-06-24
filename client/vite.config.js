import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
const path = require('path')

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(['react-moment'])],
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000/',
    },
  },
})
