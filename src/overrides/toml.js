/**
 * @return {import("../types").Overrides}
 */
export function toml() {
  return {
    'antfu/toml/rules': (config) => {
      // @ts-expect-error
      config.rules['toml/indent'][2] = {
        keyValuePairs: 1,
        subTables: 1,
      }

      return config
    },
  }
}
