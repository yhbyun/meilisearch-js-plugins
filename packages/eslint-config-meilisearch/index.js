const reactConfig = require('./react')
const vueConfig = require('./vue')
const tsConfig = require('./typescript')
const jsConfig = require('./javascript')

module.exports = {
  overrides: [reactConfig, jsConfig, vueConfig, tsConfig],
}
