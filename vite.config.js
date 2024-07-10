import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: 'C:/Users/admin/Documents/VSC/recipe-app/src',
  server: {
    port: 3000,
    hot: true
  },
  resolve: {
    alias: {
      '~bootstrap':  'C:/Users/admin/Documents/VSC/recipe-app/node_modules/bootstrap'
    }
  }
})
