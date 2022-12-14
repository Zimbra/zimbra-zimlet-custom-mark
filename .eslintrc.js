module.exports = {
  extends: ['eslint-config-synacor', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'brace-style': ['error', '1tbs'],
    eqeqeq: ['error', 'smart'],

    'react/jsx-wrap-multilines': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'no-shadow': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],

    indent: 'off',

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'none',
        arrowParens: 'avoid'
      }
    ]
  },
  settings: {
    react: {
      pragma: 'createElement',
      version: '16.3'
    },
    'preact-i18n': {
      languageFiles: [
        {
          name: 'en_US',
          path: 'src/intl/en_US.json'
        },
        {
          name: 'ja',
          path: 'src/intl/ja.json'
        }
      ]
    }
  }
};
