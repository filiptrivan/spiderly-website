import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  // Fumadocs MDX writes .source/ at dev and build time.
  globalIgnores(['.source/**']),
]);
