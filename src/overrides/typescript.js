/**
 * @return {import("../types").Overrides}
 */
export function typescript() {
  return {
    'antfu/typescript/rules': (config) => {
      config.rules = {
        ...config.rules,
        // The code problem checked by this ESLint rule is automatically checked by the TypeScript compiler. Thus, it is not recommended to turn on this rule in new TypeScript projects.
        'ts/no-redeclare': 'off',
      }
      return config
    },
  }
}
