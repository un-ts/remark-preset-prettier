/**
 * @typedef {import('unified').Plugin} Plugin
 */

const _plugins = await Promise.all(
  /** @type {const} */ ([
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
    'unordered-list-marker-style'
  ]).map(async (pluginName) => {
    try {
      const {default: plugin} = /** @type {{ default: Plugin }} */ (
        await import(`remark-lint-${pluginName}`)
      )
      return /** @type {const} */ ([plugin, false])
    } catch {}
  })
)

const remarkPresetPrettier = {
  plugins: _plugins.filter(Boolean)
}

export default remarkPresetPrettier
