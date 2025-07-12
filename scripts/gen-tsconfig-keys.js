import { writeFile } from 'node:fs/promises'
import { JSDOM } from 'jsdom'

async function main() {
  const res = await fetch('https://www.typescriptlang.org/tsconfig')
  const html = await res.text()
  const dom = new JSDOM(html)
  const document = dom.window.document

  /** @type {NodeListOf<HTMLElement>} */
  const groups = document.querySelectorAll('.tsconfig-quick-nav.grouped')

  const root = {
    name: 'root',
    groups: Array.from(groups, parseGroup),
  }

  writeFile('src/generated/tsconfig-keys.json', JSON.stringify(root, null, 2))
}

main()

/**
 * @param {HTMLElement} group
 * @returns
 */
function parseGroup(group) {
  const name = group.querySelector('h4')?.textContent
  if (!name) return

  const categories = group.querySelectorAll('div')

  return {
    name: name.slice(1, -1), // Remove leading and trailing quotes
    categories: Array.from(categories, parseCategory),
  }
}

/**
 * @param {HTMLElement} category
 * @returns
 */
function parseCategory(category) {
  const name = category.querySelector('h5')?.textContent?.trim()
  if (!name) return

  const items = category.querySelectorAll('a')

  return {
    name,
    options: Array.from(items, parseOption),
  }
}

/**
 * @param {HTMLElement} option
 * @returns
 */
function parseOption(option) {
  const name = option.textContent
  if (!name) return

  return name
}
