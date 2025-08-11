import { ensurePackages, GLOB_SRC } from '@antfu/eslint-config'

const files = [GLOB_SRC]

/**
 * @type {import("../types").ConfigFn}
 */
export async function tailwindcss(options = {}) {
  const {
    stylistic = true,
  } = options

  await ensurePackages([
    'eslint-plugin-better-tailwindcss',
  ])

  const { default: eslintPluginBetterTailwindcss } = await import('eslint-plugin-better-tailwindcss')

  return [
    {
      files,
      name: 'pacexy/tailwindcss',
      plugins: {
        'better-tailwindcss': eslintPluginBetterTailwindcss,
      },
      rules: {
        // Correctness rules
        'better-tailwindcss/no-conflicting-classes': 'error',
        'better-tailwindcss/no-restricted-classes': 'error',
        'better-tailwindcss/no-unregistered-classes': 'error',

        // Stylistic rules
        ...stylistic && {
          'better-tailwindcss/enforce-consistent-class-order': 'warn',
          'better-tailwindcss/enforce-consistent-important-position': 'warn',
          'better-tailwindcss/enforce-consistent-line-wrapping': 'warn',
          'better-tailwindcss/enforce-consistent-variable-syntax': 'warn',
          'better-tailwindcss/enforce-shorthand-classes': 'warn',
          'better-tailwindcss/no-deprecated-classes': 'warn',
          'better-tailwindcss/no-duplicate-classes': 'warn',
          'better-tailwindcss/no-unnecessary-whitespace': 'warn',
        },
      },
    },
  ]
}
