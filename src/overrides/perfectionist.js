/**
 * @return {import("../types").Overrides}
 */
export function perfectionist() {
  return {
    'antfu/perfectionist/setup': (config) => {
      config.rules = {
        ...config.rules,
        //
      }
      return config
    },
  }
}
