import { resolve } from 'path';
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $ui: resolve('../../apps/+ui/src'),
      // $lib: resolve('../../apps/+ui/src/lib/index.js'),
      '@oneezy/ui': resolve('../../apps/+ui/src/lib/'),
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
