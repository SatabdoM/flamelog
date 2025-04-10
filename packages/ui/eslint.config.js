import { config as baseConfig } from '@workspace/eslint-config/react-internal';

/** @type {import("eslint").Linter.Config} */
export default [
  ...baseConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
          enforceForJSX: false,
        },
      ],
    },
  },
];
