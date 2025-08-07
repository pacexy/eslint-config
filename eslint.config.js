import { defineConfig } from './src/index.js'

export default defineConfig({
  nextjs: true,
  react: true,
  type: 'lib',
  typescript: true,
}, {
  ignores: [
    'fixtures',
  ],
})
