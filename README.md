# gatsby-plugin-eslint-config

A Gatsby plugin that extends the [default ESLint configuration](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/eslint-config.ts).

## Disclaimer

> This plugin supports _almost_ all rules added by the default configuration.
> Some rules are temporarily disabled.
> Please refer to these [issues](https://github.com/kelvindecosta/gatsby-plugin-eslint-config/issues) for more information.

## Installation

```bash
npm i -D gatsby-plugin-eslint-config
```

```bash
yarn add -D gatsby-plugin-eslint-config
```

## Usage

### `.eslintrc.js`

```js
module.exports = {
  extends: "gatsby-plugin-eslint-config",
}
```

### `gatsby-config.js`

```js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-eslint-config",
      options: {
        extensions: ["js", "jsx", "ts", "tsx"],
        failOnError: false,
      },
    },
  ],
}
```

Refer to the [complete list of options](https://eslint.org/docs/developer-guide/nodejs-api#-new-eslintoptions).
