module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser'
  },

  settings: {
    'import/resolver': {
      typescript: {}
    }
  },

  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'no-use-before-define': ['warn', { functions: true }],
    'spaced-comment': ['warn', 'always'],
    'prefer-destructuring': ['warn'],
    'no-loss-of-precision': 'warn',
    '@typescript-eslint/no-loss-of-precision': ['warn'],
    'vue/padding-line-between-blocks': ['warn', 'always'],
    'vue/attribute-hyphenation': 'warn',
    'vue/attributes-order': ['warn', { alphabetical: true }],
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        groups: [['external', 'builtin'], 'index', ['parent', 'sibling']],
        'newlines-between': 'always'
      }
    ]
  }
};
