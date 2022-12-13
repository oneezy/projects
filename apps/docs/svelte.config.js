import { svelteConfig } from '@packages/config';

const config = {
  ...svelteConfig,
  kit: {
    ...svelteConfig.kit,
    paths: {
        base: '/docs',
    },
  }
};

export default config;