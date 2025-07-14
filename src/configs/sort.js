import {
  perfectionist,
  sortPackageJson,
  sortTsconfig,
} from '@antfu/eslint-config'

export const sort = [
  ...(await sortPackageJson()),
  ...sortTsconfig().map((c) => ({
    ...c,
    files: ['**/[jt]sconfig.json', '**/[jt]sconfig.*.json'],
  })),
  ...(await perfectionist()),
]
