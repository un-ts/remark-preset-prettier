const { js, ts } = require('@1stg/eslint-config/overrides')

module.exports = {
  extends: '@1stg/eslint-config/base',
  overrides: [js, ...ts],
}
