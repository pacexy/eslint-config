import { writeFile } from 'node:fs/promises'
import { combine } from '@antfu/eslint-config'
import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { react } from '../src/configs/react.js'
import { sort } from '../src/configs/sort.js'

const configs = await combine(
  react,
  sort,
)

const dts = await flatConfigsToRulesDTS(configs)

await writeFile('src/typegen.d.ts', dts)
