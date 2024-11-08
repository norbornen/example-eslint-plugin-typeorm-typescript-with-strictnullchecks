module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'simple-import-sort',
    'destructuring',
    'typeorm-typescript',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'commitlint.config.js',
    'package.json',
    'yarn.lock',
    'tsconfig.json',
    'node_modules',
    'jest.config.mjs',
    'dist',
    'lib',
  ],
  rules: {
    eqeqeq: 'error',
    curly: 'error',
    'no-lone-blocks': 'error',
    'no-undefined': 'off',
    'no-bitwise': 'warn',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-lonely-if': 'warn',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-unneeded-ternary': 'error',
    'no-return-await': 'error',
    camelcase: [
      'error',
      {
        ignoreDestructuring: true,
        ignoreGlobals: true,
        properties: 'never',
      },
    ],
    'spaced-comment': ['error', 'always'],
    'arrow-body-style': ['error', 'as-needed'],
    'guard-for-in': 'error',
    'destructuring/in-methods-params': 'error',
    'destructuring/in-params': [
      'error',
      {
        'max-params': 2,
      },
    ],
    'import/no-cycle': 'error',
    'import/no-unresolved': 'error',
    'newline-before-return': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'off',
          parameterProperties: 'explicit',
        },
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
        minimumDescriptionLength: 5,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_$' },
    ],
    'typeorm-typescript/enforce-column-types': 'error',
    'typeorm-typescript/enforce-relation-types': 'error',
    'typeorm-typescript/enforce-consistent-nullability': 'error',
  },
};
