const pluginMapper = (prefix: string) => (plugin: string) =>
  [prefix, plugin].join('-')

export const remarkLintPlugins = [
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
].map(pluginMapper('remark-lint'))

export const retextPlugins = ['quotes', 'sentence-spacing'].map(
  pluginMapper('retext'),
)

export const plugins = remarkLintPlugins
  .concat(retextPlugins)
  .reduce<Array<[import('unified').Plugin, false]>>((plugins, plugin) => {
    try {
      plugins.push([
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require(plugin),
        false,
      ])
    } catch (e) {}
    return plugins
  }, [])
