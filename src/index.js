import antfu from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'
import { react } from './configs/react.js'
import { sortPackageJson } from './configs/sort.js'

/**
 * @import {Options, Config} from './types.js'
 * @param  {Options} [options]
 * @param  {Config[]} userConfigs
 */
export function defineConfig(options = {}, ...userConfigs) {
  const { react: enableReact = isPackageExists('react') } = options

  // TODO: update `@default` in `OptionsConfig` jsdoc
  /** @type {Options} */
  const defaultOptions = {
    formatters: true,
    pnpm: true,
    react: enableReact,
  }

  /** @type {Config[]} */
  const configs = []

  configs.push(sortPackageJson())

  if (enableReact) {
    configs.push(react())
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
