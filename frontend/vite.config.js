import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Quan trọng để Docker expose port ra ngoài
    port: 5173, 
  }
})