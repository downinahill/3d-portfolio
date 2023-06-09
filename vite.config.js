import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['react-router-dom']},
    build: {
      rollupOptions: {
        external: ["/Users/brianhill/node_modules/@emailjs/browser/es/index"],
      },
    }
})

 


