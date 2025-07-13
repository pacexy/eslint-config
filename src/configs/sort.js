import { sortTsconfig } from '@antfu/eslint-config'

// eslint-disable-next-line unicorn/no-useless-spread
export const sort = [
  ...sortTsconfig().map((c) => ({
    ...c,
    files: ['**/[jt]sconfig.json', '**/[jt]sconfig.*.json'],
  })),
]
