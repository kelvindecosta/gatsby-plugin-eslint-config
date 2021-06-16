/**
 * Default ESLint configuration used by Gatsby.
 */

const { store } = require("gatsby/dist/redux")
const { eslintConfig } = require("gatsby/dist/utils/eslint-config")
const { reactHasJsxRuntime } = require("gatsby/dist/utils/webpack-utils")

// Load GraphQL schema
const { schema } = store.getState()

// Load default configuration
let config = eslintConfig(schema, reactHasJsxRuntime()).baseConfig

// TODO #1
// Remove Gatsby's custom rules
config.extends = "react-app"

// TODO #2
// Disabled because it causes a Syntax Error
config.rules["graphql/template-strings"] = "off"

module.exports = config
