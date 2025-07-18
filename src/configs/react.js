import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import pluginReact from 'eslint-plugin-react'
import pluginReactGoogleTranslate from 'eslint-plugin-react-google-translate'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import { isPackageExists } from 'local-pkg'
import { GLOB_SRC } from '../globs.js'

const compat = new FlatCompat()

const hasNext = isPackageExists('next')
const hasReactRouter = isPackageExists('@react-router/dev')

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
        {
          ...pluginReactHooks.configs['recommended-latest'],
          files,
          name: 'react/hooks/recommended',
        },
        {
          ...pluginReactRefresh.configs.recommended,
          name: 'react/refresh',
          files,
          rules: {
            'react-refresh/only-export-components': [
              'warn',
              {
                allowConstantExport: true,
                allowExportNames: [
                  ...(hasNext
                    ? [
                        'dynamic',
                        'dynamicParams',
                        'revalidate',
                        'fetchCache',
                        'runtime',
                        'preferredRegion',
                        'maxDuration',
                        'config',
                        'generateStaticParams',
                        'metadata',
                        'generateMetadata',
                        'viewport',
                        'generateViewport',
                      ]
                    : []),
                  ...(hasReactRouter
                    ? [
                        'loader',
                        'clientLoader',
                        'action',
                        'clientAction',
                        'headers',
                        'handle',
                        'links',
                        'meta',
                        'shouldRevalidate',
                      ]
                    : []),
                ],
              },
            ],
          },
        },
        {
          name: 'react/google-translate',
          files,
          plugins: {
            'react-google-translate': pluginReactGoogleTranslate,
          },
          rules: {
            'react-google-translate/no-conditional-text-nodes-with-siblings':
              'warn',
            'react-google-translate/no-return-text-nodes': 'warn',
          },
        },
      ]),
  {
    name: 'react/custom',
    files,
    rules: {},
  },
]
