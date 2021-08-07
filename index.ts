import _ from 'module'

const cjsRequire =
  typeof require === 'undefined' ? _.createRequire(import.meta.url) : require

export const plugins = [
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
].reduce<Array<[import('unified').Plugin, false]>>((plugins, plugin) => {
  try {
    plugins.push([cjsRequire('remark-lint-' + plugin), false])
  } catch {}
  return plugins
}, [])
