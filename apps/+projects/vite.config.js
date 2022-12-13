import { viteConfig } from '@packages/config';

/**
 * Trying to figure the best way to make "/" show the "/site" app
 * 
 * i.e. 
 * If you go to http://localhost:3000, I want the user to actualy 
 * be viewing the "/site" route
 * 
 * We need to be able to easily swap out our `/` with whatever app we want. 
 * Let me know if you have any ideas!
 */


// const defaultRouteUrlRewrite = {
//   name: 'site-fallback',
//   configureServer(server) {
//     server.middlewares.use('/', (req, res, next) => {
//       req.url += '/site'
//       next()
//     })
//   }
// }

/** @type {import('vite').UserConfig} */
const config = {
  ...viteConfig,
  server: {
    ...viteConfig.server,
    // base: '/site',
    host: '0.0.0.0',
    open: '/'
  },
  plugins:[
    ...viteConfig.plugins,
    // defaultRouteUrlRewrite,
  ]
};

export default config;