import { GLOB_SRC } from '@antfu/eslint-config'
import pluginReactGoogleTranslate from 'eslint-plugin-react-google-translate'

const files = [GLOB_SRC]

/** @type {import('eslint').Linter.Config[]} */
export const react = [
  {
    name: 'pacexy/react',
    files,
    plugins: {
      // @ts-expect-error
      'react-google-translate': pluginReactGoogleTranslate,
    },
    rules: {
      'react-google-translate/no-conditional-text-nodes-with-siblings': 'warn',
      'react-google-translate/no-return-text-nodes': 'warn',
    },
  },
  // TODO: should `eslint-config-next` be included here?
]
