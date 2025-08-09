/**
 * @return {import("../types").Overrides}
 */
export function perfectionist() {
  return {
    'antfu/perfectionist/setup': (config) => {
      // @ts-expect-error
      const pluginPerfectionist = config.plugins.perfectionist
      config.rules = {
        ...pluginPerfectionist.configs['recommended-natural'].rules,
        ...config.rules,
        'perfectionist/sort-classes': 'off',
        'perfectionist/sort-heritage-clauses': 'off',
        'perfectionist/sort-intersection-types': 'off',
        'perfectionist/sort-modules': 'off',
        'perfectionist/sort-switch-case': 'off',
        'perfectionist/sort-union-types': 'off',
      }
      return config
    },
  }
}
