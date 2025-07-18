import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'

export type Options = OptionsConfig & Omit<TypedFlatConfigItem, 'files'>
export type Config = Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>
