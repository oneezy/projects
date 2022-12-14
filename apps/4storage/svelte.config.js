import { svelteConfig } from '@packages/config';

const config = {
  ...svelteConfig,
  kit: {
    ...svelteConfig.kit,
    paths: {
        base: '/4storage',
    },
  }
};

export default config;