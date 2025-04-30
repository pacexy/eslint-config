import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import pluginReact from 'eslint-plugin-react'
import { isPackageExists } from 'local-pkg'
import { GLOB_SRC } from '../globs.js'

const compat = new FlatCompat()

const hasNext = isPackageExists('next')
const files = [GLOB_SRC]

/** @type {import('eslint').Linter.Config[]} */
// @ts-expect-error TODO:
export const react = [
  ...(hasNext
    ? fixupConfigRules(compat.extends('next/core-web-vitals'))
    : [
        {
          name: 'react/recommended',
          files,
          ...pluginReact.configs.flat?.recommended,
        },
        {
          name: 'react/jsx-runtime',
          files,
          ...pluginReact.configs.flat?.['jsx-runtime'],
        },
      ]),
  {
    name: 'react/custom',
    files,
    rules: {},
  },
]
