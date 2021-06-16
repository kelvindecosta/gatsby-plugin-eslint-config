const ESLintPlugin = require("eslint-webpack-plugin")

exports.onCreateWebpackConfig = (
  { stage, actions },
  { plugins, ...options }
) => {
  if (stage === "develop") {
    actions.setWebpackConfig({
      plugins: [new ESLintPlugin(options)],
    })
  }
}
