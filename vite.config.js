import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Não precisa de __dirname
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve('src'), // 'src' será resolvido a partir da raiz do projeto
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        segunda: resolve(__dirname, 'index2.html'),
      },
    },
  },
})