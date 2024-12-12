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
    : [pluginReact.configs.flat?.recommended]),
  {
    name: 'pacexy/react',
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
]
