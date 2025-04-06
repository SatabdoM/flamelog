import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { config as baseConfig } from '@workspace/eslint-config/base';

export default [
  ...baseConfig,
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/.next/**', '**/build/**'],
    plugins: {
      '@typescript-eslint': typescript,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json', './apps/*/tsconfig.json', './packages/*/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];
