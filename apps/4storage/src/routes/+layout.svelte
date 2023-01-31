<script>
	import { page } from '$app/stores'
  import { fade, fly } from 'svelte/transition';
	import { mediaQuery, Intro, Header, Scrollbar, Dialog, Nav, Theme, Button, Social, Link, Icon, Copyright } from '@oneezy/ui'
  import Logo from '../lib/Logo.svelte'

  import '@oneezy/ui/app.css'
  import '$lib/app.css'

	const sm = mediaQuery('(min-width: 0px) and (max-width: 1024px)')
	const lg = mediaQuery('(min-width: 1025px)')
  
  let links = [
    { label: 'home',      href: `#home`},
    { label: 'pricing',   href: `#pricing`},
    { label: 'location',  href: `#location`},
    { label: 'FAQ',       href: `#faq`},
  ]
</script>

<svelte:head>
  <title>4 Storage Solutions | Call (409)227-4444</title>
  <link rel="canonical" href="https://4storagesolutions.com/"/>
  <meta name="description" content="Call us to check availability! (409)227-4444"/>

  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.4storagesolutions.com/"/>
  <meta property="og:site_name" content="4Storage"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:title" content="4 Storage Solutions"/>
  <meta property="og:description" content="Call us to check availability! (409)227-4444"/>
  <meta property="og:image" content="https://4storagesolutions.com/opengraph.png"/>
</svelte:head>

{#if $lg}
  <Scrollbar />
{/if}

<!-- Mobile -->
<Header class="block lg:hidden opacity-0">
  <Dialog slot="left" type="nav">
    <Nav {links} />
  </Dialog>
  
  <Button slot="right" href="tel:4092274444" button="icon" icon="phone" size="20" />
</Header>

<!-- Desktop -->
<Header class="hidden lg:block opacity-0">
  <Logo icon class="w-20" slot="left" />
  <Nav {links} slot="center" />
  <div class="flex items-center justify-center gap-2" slot="right">
    <Button href="tel:4092274444" class="ml-2" button="text" icon="phone" size="24" position="left">(409) 227-4444</Button>
  </div>
</Header>

<!-- Layout -->
<Intro class="min-h-screen">
  <div class="min-h-screen w-full">
    <slot />
<!--     
    <footer class="container mx-auto p-4 lg:p-8">
      <Social />
      <Copyright>Projects</Copyright>
    </footer> -->
  </div>
</Intro>