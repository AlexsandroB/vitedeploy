import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vitedeploy/',

  resolve:{
    alias: {
      '@img' : path.resolve(__dirname, './src/img'),
      '@pages' : path.resolve(__dirname, './src/pages')
    }
  }
})
