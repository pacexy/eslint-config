import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import pluginReact from 'eslint-plugin-react'
import { isPackageExists } from 'local-pkg'
import tseslint from 'typescript-eslint'

const compat = new FlatCompat()

const hasNext = isPackageExists('next')

export const react = tseslint.config(
  // @ts-expect-error TODO:
  ...(hasNext
    ? fixupConfigRules(compat.extends('next/core-web-vitals'))
    : [pluginReact.configs.flat?.recommended]),
)
