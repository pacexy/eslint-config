import type { Awaitable, ConfigNames, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'

export interface Options extends OptionsConfig, Omit<TypedFlatConfigItem, 'files'> {
  /**
   * @default true
   */
  formatters?: OptionsConfig['formatters']
  /**
   * @default auto-detect based on the dependencies
   */
  nextjs?: OptionsConfig['nextjs']
  /**
   * @default auto-detect based on the dependencies
   */
  react?: OptionsConfig['react']
}

declare module '@antfu/eslint-config' {
  interface OptionsJSX {
    /**
     * @default true
     */
    a11y?: OptionsJSX['a11y']
  }
}

export type Config = Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>
export type Overrides<T = TypedFlatConfigItem>
  = Partial<Record<ConfigNames, T | ((config: T) => Awaitable<T>)>>
