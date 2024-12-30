import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactJsx from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
      reactJsx.flatConfigs.recommended,
      eslintPluginPrettierRecommended,
    ],
    files: ['**/*.+(ts|tsx|mts|cts|js|mjs|cjs|jsx)'],
    // files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          paths: ['.'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    plugins: {
      react,
      'jsx-ally': reactJsx,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
    },
    rules: {
      ...reactJsx.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      'react/react-in-jsx-scope': 'off',

      'prettier/prettier': ['error', {}, { usePrettierrc: true }],

      'no-console': 'off',
      'no-unused-vars': [
        'off',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'no-undef': 'error',
      'no-useless-constructor': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  }
);
