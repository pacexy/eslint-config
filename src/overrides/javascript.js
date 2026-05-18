/**
 * @return {import("../types").Overrides}
 */
export function javascript() {
  return {
    'antfu/javascript/rules': (config) => {
      config.rules ??= {}
      // @ts-expect-error
      config.rules['no-console'][0] = 'warn'
      config.rules['prefer-template'] = 'off'
      return config
    },
  }
}
