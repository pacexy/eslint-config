import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import { isPackageExists } from 'local-pkg'
import tseslint from 'typescript-eslint'
import { typescript } from './src/configs/typescript.js'

const compat = new FlatCompat()

const hasNext = isPackageExists('next')

export default tseslint.config(
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...typescript,
  // @ts-expect-error TODO:
  ...(hasNext
    ? fixupConfigRules(compat.extends('next/core-web-vitals'))
    : [pluginReact.configs.flat.recommended]),
)
