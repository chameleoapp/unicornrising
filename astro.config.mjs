// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import localKeystatic from './astro.keystatic.mjs';

// Keystatic Admin UI only in local dev — never bundled into production builds.
const enableKeystatic = !process.argv.includes('build');

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), ...(enableKeystatic ? [localKeystatic()] : [])],
});
