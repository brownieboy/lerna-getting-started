import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
  },
  optimizeDeps: {
    exclude: ["footer", "sub-footer"]
  },
  server: {
    port: 5173,
    watch: {
      ignored: ["!**/node_modules/footer/**", "!**/node_modules/footer/**"],
    },
  },
})
