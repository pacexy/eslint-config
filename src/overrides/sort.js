/**
 * @return {import("../types").Overrides}
 */
export function sort() {
  return {
    'antfu/sort/package-json': (config) => {
      // @ts-expect-error
      config.rules['jsonc/sort-keys'].push({
        pathPattern: '^scripts$',
        order: { type: 'asc' },
      })
      return config
    },
  }
}
