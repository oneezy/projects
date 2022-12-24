import { resolve } from 'path';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      // Root
      $root: resolve('../../..'),

      // App (main)
      $project: resolve('../../apps/+projects/src'),

      // Components 
      $ui: resolve('../../apps/+ui/src'),
      // $lib: resolve('../../apps/+ui/src/lib/index.js'),
      '@oneezy/ui': resolve('../../apps/+ui/src/lib/index.js'),

      // Apps (plop added)
      $4storage: resolve('../../apps/4storage/src'),
      $docs: resolve('../../apps/docs/src'),
      $site: resolve('../../apps/site/src')
    },
  },

  preprocess: [
    preprocess({
      postcss: true
    }),
  ]
};

export default config;