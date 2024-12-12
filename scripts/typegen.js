import { writeFile } from 'node:fs/promises'
import { flatConfigsToPlugins, pluginsToRulesDTS } from 'eslint-typegen/core'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import pacexy from '../eslint.config.js'

const plugins = await flatConfigsToPlugins([
  {
    plugins: { '': { rules: Object.fromEntries(builtinRules) } },
  },
  // @ts-expect-error TODO:
  ...pacexy,
])
const dts = await pluginsToRulesDTS(plugins)

await writeFile('src/typegen.d.ts', dts)
