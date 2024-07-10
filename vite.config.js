import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as dotenv from 'dotenv'
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: './src',
  server: {
    port: 3000 || process.env.PORT,
    hot: true
  }
})
