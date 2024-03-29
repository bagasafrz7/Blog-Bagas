module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true,
//   },
//   parserOptions: {
//     parser: 'babel-eslint',
//   },
//   extends: [
//     '@nuxtjs',
//     'plugin:prettier/recommended',
//     'plugin:nuxt/recommended',
//   ],
//   plugins: [],
//   // add your custom rules here
//   rules: {
//     'space-before-function-paren': 0,
//     'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
//   },
// }
