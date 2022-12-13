/// <reference types="histoire" />

import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig, defaultColors } from 'histoire'
// import { sveltekit } from '@sveltejs/kit/vite'
import { HstSvelte } from '@histoire/plugin-svelte'

import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
  // ...defineConfig,

  plugins: [
    svelte(),
    // sveltekit(),
  ],

  histoire: {
    plugins: [ HstSvelte() ],
    setupFile: '/histoire.setup.js',
    tree: {
      groups: [
        { id: 'top',        title: '' },
        { id: 'components', title: 'Components' },
        { id: 'examples',   title: 'Story Examples' },
      ],
    },
    theme: {
      title: 'Starter',
      logo: {
        square: '/assets/logo.svg',
        light: '/assets/logo.svg',
        dark: '/assets/logo.svg'
      },
      logoHref: '/',
      favicon: '/assets/favicon.png',

      colors: {
        gray: defaultColors.gray,
        primary: defaultColors.blue,
      }
    }
  },

  // resolve: {
	// 	alias: {
	// 		// $lib: path.resolve('./src/lib'),
	// 	}
	// },

  server: {
    // routes: {
    //   '/': './src/app.html'
    // },
    open: '/story/src-lib-introduction-story-js'
  },
};

export default config