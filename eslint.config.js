import pluginJs from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { react } from './src/configs/react.js'
import { typescript } from './src/configs/typescript.js'

export default tseslint.config(
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...typescript,
  ...react,
)
