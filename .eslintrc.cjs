module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest/globals': true,
    'node': true,
    'cypress/globals': true // Ensure this is correct
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:cypress/recommended' // Add this line
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'settings': {
    'react': {
      'version': 'detect' // Add this line
    }
  },
  'plugins': [
    'react', 'jest', 'cypress' // Ensure this line is correct
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': 'off',
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error', 'always'
    ],
    'arrow-spacing': [
      'error', { 'before': true, 'after': true }
    ],
    'no-console': 'error',
    'react/prop-types': 0
  }
}
