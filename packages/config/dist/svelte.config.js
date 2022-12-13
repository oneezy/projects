import { resolve } from 'path';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      // Root
      $root: resolve('../../../'),

      // App (main)
      $project: resolve('../../apps/+projects/src'),
      
      // Apps (plop added)
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