import fs from 'fs'
import path from 'path'

import prettier from 'prettier'

const plugins = [
  'blank-lines-1-0-2',
  'blockquote-indentation',
  'books-links',
  'checkbox-character-style',
  'code-block-style',
  'definition-case',
  'definition-spacing',
  'emphasis-marker',
  'fenced-code-marker',
  'final-newline',
  'hard-break-spaces',
  'heading-style',
  'heading-whitespace',
  'link-title-style',
  'list-item-bullet-indent',
  'list-item-content-indent',
  'list-item-indent',
  'list-item-spacing',
  'maximum-line-length',
  'no-blockquote-without-marker',
  'no-consecutive-blank-lines',
  'no-heading-content-indent',
  'no-inline-padding',
  'no-long-code',
  'no-table-indentation',
  'ordered-list-marker-style',
  'ordered-list-marker-value',
  'rule-style',
  'spaces-around-number',
  'spaces-around-word',
  'strong-marker',
  'table-cell-padding',
  'table-pipe-alignment',
  'table-pipes',
  'unordered-list-marker-style',
]

const camelCase = (val: string) =>
  val.replace(/-([\da-z])/g, ([_, $0]) => $0.toUpperCase())

const main = async () => {
  const pkgPath = path.resolve('package.json')

  // eslint-disable-next-line unicorn/prefer-json-parse-buffer
  const pkg = JSON.parse(await fs.promises.readFile(pkgPath, 'utf8')) as {
    dependencies?: Record<string, string>
  }

  await fs.promises.writeFile(
    pkgPath,
    prettier.format(
      JSON.stringify({
        ...pkg,
        dependencies: {
          ...pkg.dependencies,
          ...plugins.reduce<Record<string, string>>(
            (acc, plugin) =>
              Object.assign(acc, {
                [`remark-lint-${plugin}`]: '*',
              }),
            {},
          ),
        },
      }),
      {
        filepath: pkgPath,
      },
    ),
  )

  const pluginsPath = path.resolve('src/plugins.ts')

  await fs.promises.writeFile(
    pluginsPath,
    prettier.format(
      [
        '// @ts-nocheck',
        ...plugins.map(
          plugin => `import ${camelCase(plugin)} from 'remark-lint-${plugin}'`,
        ),
        `\nexport const plugins: Array<import('unified').Plugin> = [${plugins
          .map(plugin => camelCase(plugin))
          .join(',')}]`,
      ].join('\n'),
      {
        filepath: pluginsPath,
      },
    ),
  )
}

main().catch(console.error)
