import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import pluginReact from 'eslint-plugin-react'
import { isPackageExists } from 'local-pkg'

const compat = new FlatCompat()

const hasNext = isPackageExists('next')

/** @type {import('eslint').Linter.Config[]} */
// @ts-expect-error TODO:
export const react = [
  ...(hasNext
    ? fixupConfigRules(compat.extends('next/core-web-vitals'))
    : [
        {
          name: 'react/recommended',
          ...pluginReact.configs.flat?.recommended,
        },
        {
          name: 'react/jsx-runtime',
          ...pluginReact.configs.flat?.['jsx-runtime'],
        },
      ]),
  {
    name: 'react/custom',
    rules: {},
  },
]
