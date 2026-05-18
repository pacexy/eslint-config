/**
 * @return {import("../types").Overrides}
 */
export function stylistic() {
  return {
    'antfu/stylistic/rules': (config) => {
      config.rules = {
        ...config.rules,
        'style/brace-style': ['error', '1tbs'],
      }
      return config
    },
  }
}
