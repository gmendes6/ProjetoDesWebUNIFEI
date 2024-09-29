import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Altere 'repository-name' para o nome do seu repositório no GitHub
export default defineConfig({
  base: '/ProjetoDesWebUNIFEI/', // O nome do seu repositório no GitHub
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),   // Página principal
        segunda: resolve(__dirname, 'index2.html') // Segunda página
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Alias para a pasta src
    },
  },
})