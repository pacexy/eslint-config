import { defineConfig } from './src/index.js'

export default defineConfig({
  nextjs: true,
  react: true,
  tailwindcss: true,
  type: 'lib',
  typescript: true,
}, {
  ignores: [
    'fixtures',
  ],
})
