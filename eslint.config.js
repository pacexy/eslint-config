import { defineConfig } from './src/index.js'

export default defineConfig({
  react: true,
  type: 'lib',
  typescript: true,
}, {
  ignores: [
    'fixtures',
  ],
})
