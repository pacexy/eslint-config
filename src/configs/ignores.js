import pluginGitignore from 'eslint-config-flat-gitignore'

/** @type {import('eslint').Linter.Config[]} */
export const ignores = [
  {
    ...pluginGitignore({ strict: false }),
    name: 'ignores/gitignore',
  },
]
