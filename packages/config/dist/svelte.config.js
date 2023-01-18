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

      // Components 
      $ui: resolve('../../apps/+ui/src'),
      // $ui: resolve('../../apps/+ui/src/lib/index.js'),
      // '@oneezy/ui': resolve('../../apps/+ui/src/lib/index.js'),

      // Apps (plop added)
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