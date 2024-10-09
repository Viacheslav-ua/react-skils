import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "assets": path.resolve('./src/assets'),
      "modules": path.resolve('./src/modules'),
      "app": path.resolve('./src/app'),
      "shared": path.resolve('./src/shared'),
    },
  },
})
