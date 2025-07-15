import { writeFile } from 'node:fs/promises'
import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import pacexy from '../eslint.config.js'

const dts = await flatConfigsToRulesDTS([
  {
    plugins: { '': { rules: Object.fromEntries(builtinRules) } },
  },
  ...await pacexy.toConfigs(),
])

await writeFile('src/typegen.d.ts', dts)
