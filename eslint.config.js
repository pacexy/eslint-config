import { defineConfig } from './src/index.js'

export default defineConfig({
  formatters: true,
  nextjs: true,
  pnpm: false,
  react: true,
  tailwindcss: true,
  type: 'lib',
  typescript: true,
}, {
  ignores: [
    'fixtures',
  ],
})
