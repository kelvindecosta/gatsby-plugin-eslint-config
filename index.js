/**
 * Default ESLint configuration used by Gatsby.
 */

const { store } = require("gatsby/dist/redux")
const { eslintConfig } = require("gatsby/dist/utils/eslint-config")
const { reactHasJsxRuntime } = require("gatsby/dist/utils/webpack-utils")

// Load GraphQL schema
const { schema } = store.getState()

module.exports = {
  ...eslintConfig(schema, reactHasJsxRuntime()).baseConfig,

  // TODO #1
  // Remove Gatsby's custom rules
  extends: "react-app",

  rules: {
    // GraphQL
    // TODO #2
    "graphql/template-strings": "off", // Disabled because it causes a Syntax Error
  },
}
