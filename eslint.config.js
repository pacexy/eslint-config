import { ignores } from './src/configs/ignores.js'
import { javascript } from './src/configs/javascript.js'
import { jsonc } from './src/configs/jsonc.js'
import { react } from './src/configs/react.js'
import { sort } from './src/configs/sort.js'
import { typescript } from './src/configs/typescript.js'
import { unicorn } from './src/configs/unicorn.js'

// prettier-ignore
export default [
  ...ignores,
  ...javascript,
  ...typescript,
  ...jsonc,
  ...react,
  ...sort,
  ...unicorn,
]
