// index.d.ts
declare module '@workspace/eslint-config/base' {
  import { Linter } from 'eslint';
  const config: Linter.Config;
  export default config;
}

declare module '@workspace/eslint-config/next-js' {
  import { Linter } from 'eslint';
  const config: Linter.Config;
  export default config;
}

declare module '@workspace/eslint-config/react-internal' {
  import { Linter } from 'eslint';
  const config: Linter.Config;
  export default config;
}
