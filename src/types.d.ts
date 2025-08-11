import type { Awaitable, ConfigNames, OptionsConfig, OptionsJSX, OptionsStylistic, TypedFlatConfigItem } from '@antfu/eslint-config'

export interface Options extends OptionsConfig, Omit<TypedFlatConfigItem, 'files'> {
  /**
   * @default true
   */
  formatters?: OptionsConfig['formatters']
  jsx?: boolean | _OptionsJSX
  /**
   * @default auto-detect based on the dependencies
   */
  nextjs?: OptionsConfig['nextjs']
  /**
   * @default auto-detect based on the dependencies
   */
  react?: OptionsConfig['react']
  /**
   * Requires installing:
   * - `eslint-plugin-better-tailwindcss`
   *
   * @default auto-detect based on the dependencies
   */
  tailwindcss?: boolean
}

// FIXME: This is a workaround to override `@default`
// instead of appending it to the existing JSDoc
interface _OptionsJSX extends OptionsJSX {
  /**
   * @default true
   */
  a11y?: OptionsJSX['a11y']
}

export type Config = Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>

export type ConfigFn = (options?: OptionsStylistic) => Promise<TypedFlatConfigItem[]>

export type Overrides<T = TypedFlatConfigItem>
  = Partial<Record<ConfigNames, T | ((config: T) => Awaitable<T>)>>
