const { overrides } = require('@1stg/eslint-config/overrides')
const tsNode = require('ts-node')

tsNode.register({
  transpileOnly: true,
  compilerOptions: {
    module: 'commonjs',
  },
})

module.exports = {
  extends: '@1stg',
  overrides,
}
