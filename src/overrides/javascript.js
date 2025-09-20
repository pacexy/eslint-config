/**
 * @return {import("../types").Overrides}
 */
export function javascript() {
  return {
    'antfu/javascript/rules': (config) => {
      // @ts-expect-error
      config.rules['no-console'][0] = 'warn'
      return config
    },
  }
}
