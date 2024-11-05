import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Isso permite que o Vite escute em todas as interfaces de rede.
    port: 3000, // Defina a porta que você deseja usar.
  },
})

