import { writeFile } from 'node:fs/promises'
import { combine } from '@antfu/eslint-config'
import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { react } from '../src/configs/react.js'
import { tailwindcss } from '../src/configs/tailwindcss.js'

const configs = await combine(
  react(),
  tailwindcss(),
)

const dts = await flatConfigsToRulesDTS(configs)

await writeFile('src/typegen.d.ts', dts)
