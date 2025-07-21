import type { Awaitable, ConfigNames, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'

export type Options = OptionsConfig & Omit<TypedFlatConfigItem, 'files'>
export type Config = Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>
export type Overrides<T = TypedFlatConfigItem>
  = Partial<Record<ConfigNames, T | ((config: T) => Awaitable<T>)>>
