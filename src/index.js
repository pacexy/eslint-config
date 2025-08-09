import antfu from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'
import { react } from './configs/react.js'
import { perfectionist } from './overrides/perfectionist.js'
import { sort } from './overrides/sort.js'

/**
 * @import {Options, Config} from './types.js'
 * @param  {Options} [options]
 * @param  {Config[]} userConfigs
 */
export function defineConfig(options = {}, ...userConfigs) {
  const {
    nextjs: enableNextjs = isPackageExists('next'),
    react: enableReact = isPackageExists('react'),
  } = options

  /** @type {Options} */
  const defaultOptions = {
    formatters: true,
    jsx: { a11y: true },
    nextjs: enableNextjs,
    react: enableReact,
  }

  /** @type {Config[]} */
  const configs = []

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
  ).overrides({
    ...sort(),
    ...perfectionist(),
  })
}
