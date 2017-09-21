// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  plugins: [],
  // add your custom rules here
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // own rules
    'no-multi-spaces': 0,
    'curly': 0,
    'no-multiple-empty-lines': 0,
    'padded-blocks': 0,
    'key-spacing': 0,
    'object-property-newline': 0,
    'spaced-comment': 0,
    'no-useless-escape': 0,
    'brace-style': 0,
    'semi': 1,
  }
}
