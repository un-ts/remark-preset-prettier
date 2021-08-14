export default {
  plugins: [
    'remark-lint',
    'remark-preset-lint-consistent',
    'remark-preset-lint-markdown-style-guide',
    'remark-preset-lint-recommended',
    './lib/index.js',
  ],
}
