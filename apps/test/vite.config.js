import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],

  server: {
    open: '/'
  }
};

export default config;
