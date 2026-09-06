import { mkdirSync, writeFileSync } from 'node:fs';

/**
 * Local-only Keystatic setup.
 * Uses a .tsx admin page so React hydration works with Astro 7,
 * and is omitted from production builds.
 */
export default function localKeystatic() {
  return {
    name: 'local-keystatic',
    hooks: {
      'astro:config:setup': ({ injectRoute, updateConfig, config }) => {
        updateConfig({
          server: config.server.host
            ? {}
            : {
                host: '127.0.0.1',
              },
          vite: {
            plugins: [
              {
                name: 'keystatic-config',
                resolveId(id) {
                  if (id === 'virtual:keystatic-config') {
                    return this.resolve('./keystatic.config', './a');
                  }
                  return null;
                },
              },
            ],
            optimizeDeps: {
              entries: ['keystatic.config.*', '.astro/keystatic-imports.js'],
            },
          },
        });

        const dotAstroDir = new URL('./.astro/', config.root);
        mkdirSync(dotAstroDir, { recursive: true });
        writeFileSync(
          new URL('keystatic-imports.js', dotAstroDir),
          `import "@keystatic/astro/ui";
import "@keystatic/astro/api";
import "@keystatic/core/ui";
`,
        );

        injectRoute({
          entrypoint: './src/keystatic/admin.astro',
          pattern: '/keystatic/[...params]',
          prerender: false,
        });
        injectRoute({
          entrypoint: '@keystatic/astro/internal/keystatic-api.js',
          pattern: '/api/keystatic/[...params]',
          prerender: false,
        });
      },
    },
  };
}
