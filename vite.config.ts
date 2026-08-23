import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Repo site: https://lewis-star-1992.github.io/portfolio/
  base: '/portfolio/',
})
