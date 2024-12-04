import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      // Possible Problems
      'no-duplicate-imports': 'error',
      'no-unused-vars': 'warn',
      'no-use-before-define': 'error',
      'no-loss-of-precision': 'error',
      'no-promise-executor-return': 'error',
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',
      'no-unsafe-optional-chaining': 'error',

      // Suggestions
      'arrow-body-style': ['error', 'as-needed'],
      'camelcase': 'error',
      'curly': ['error', 'all'],
      'default-case': 'error',
      'dot-notation': 'error',
      'eqeqeq': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'warn',
      'no-lone-blocks': 'error',
      'no-multi-assign': 'error',
      'no-new-wrappers': 'error',
      'no-return-await': 'error',
      'no-unneeded-ternary': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'require-await': 'error',
      'yoda': 'error',

      // Layout & Formatting
      'array-bracket-spacing': ['error', 'never'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'block-spacing': 'error',
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      'computed-property-spacing': ['error', 'never'],
      'dot-location': ['error', 'property'],
      'eol-last': 'error',
      'func-call-spacing': ['error', 'never'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'linebreak-style': ['error', 'unix'],
      'max-len': ['warn', { 
        code: 100,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],
      'new-parens': 'error',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'no-trailing-spaces': 'error',
      'no-whitespace-before-property': 'error',
      'object-curly-spacing': ['error', 'always'],
      'operator-linebreak': ['error', 'before'],
      'padded-blocks': ['error', 'never'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
      'semi-spacing': ['error', { before: false, after: true }],
      'semi-style': ['error', 'last'],
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      }],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'space-unary-ops': ['error', { words: true, nonwords: false }],
      'switch-colon-spacing': 'error',
      'template-curly-spacing': 'error',
      'template-tag-spacing': 'error',
      'wrap-iife': ['error', 'outside'],
    },
  },
];