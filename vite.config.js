import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // ... outras configurações ...
    publicDir: 'public', // Certifique-se de que esta opção está configurada corretamente
    // ... outras configurações ...
  },
})
