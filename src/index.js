import antfu from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'
import { react } from './configs/react.js'
import { sort } from './configs/sort.js'

/**
 * @typedef {import('@antfu/eslint-config').OptionsConfig} OptionsConfig
 * @typedef {import('@antfu/eslint-config').TypedFlatConfigItem} TypedFlatConfigItem
 * @typedef {OptionsConfig & Omit<TypedFlatConfigItem, 'files'>} Options
 * @typedef {import('@antfu/eslint-config').Awaitable<TypedFlatConfigItem>} UserConfig
 * @typedef {import('@antfu/eslint-config').Awaitable<TypedFlatConfigItem[]>} Config
 * @param  {Options} [options]
 * @param  {UserConfig[]} userConfigs
 */
export function defineConfig(options = {}, ...userConfigs) {
  const { react: enableReact = isPackageExists('react') } = options

  // TODO: update `@default` in `OptionsConfig` jsdoc
  /** @type {Options} */
  const defaultOptions = {
    react: enableReact,
  }

  /** @type {Config[]} */
  const configs = []

  configs.push(sort)

  if (enableReact) {
    configs.push(react)
  }

  return antfu(
    {
      ...defaultOptions,
      ...options,
    },
    ...configs,
    ...userConfigs,
  )
}
