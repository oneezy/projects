import adapter from "@sveltejs/adapter-auto";
import { resolve } from 'path';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $ui: resolve('../+ui/src/lib'),
      '@oneezy/ui': resolve('../+ui/src/lib'),
    },
  },

  preprocess: vitePreprocess(),
};

export default config;