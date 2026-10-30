import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        // rolldown (Vite 8) requires manualChunks to be a function
        manualChunks(id) {
          if (
            id.includes('three') ||
            id.includes('@react-three/fiber') ||
            id.includes('@react-three/drei')
          ) {
            return 'three'
          }
          if (id.includes('gsap')) {
            return 'gsap'
          }
          if (id.includes('react-dom') || id.includes('react-icons')) {
            return 'react-vendor'
          }
        },
      },
    },
  },
})
