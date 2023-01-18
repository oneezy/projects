import { resolve } from 'path';
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// preprocess: vitePreprocess(),
	preprocess: preprocess({
    postcss: true,
	}),

  kit: {
    adapter: adapter(),
    alias: {
      $ui: resolve('../+ui/src/lib'),
      '@oneezy/ui': resolve('../+ui/src/lib'),
    },
  },
  
};

export default config;
