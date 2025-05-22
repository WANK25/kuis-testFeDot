import { fixupConfigRules } from '@eslint/compat';
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactJsx from 'eslint-plugin-react/configs/jsx-runtime.js';
import react from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import ts from 'typescript-eslint';

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...fixupConfigRules([
    {
      ...react,
      settings: {
        react: { version: 'detect' },
      },
    },
    reactJsx,
  ]),
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'max-lines': [
        'error',
        {
          max: 120,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
    },
  },
  {
    ignores: [
      'dist/',
      'node_modules/',
      './src/react-env.d.ts',
      'rspack.config.ts',
      'tsconfig.json',
      'eslint.config.mjs',
    ],
  },
];
