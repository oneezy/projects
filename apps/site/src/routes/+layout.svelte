<script>
	import { page } from '$app/stores'
  import { fade, fly } from 'svelte/transition';
	import { mediaQuery, Intro, Header, Scrollbar, Dialog, Logo, Nav, Theme, Button, Social, Link, Icon, Copyright } from '@oneezy/ui'

  import '@oneezy/ui/app.css'
  import '$lib/app.css'

	const sm = mediaQuery('(min-width: 0px) and (max-width: 1024px)')
	const lg = mediaQuery('(min-width: 1025px)')
  
  let links = [
    { label: 'home',      href: `#home`},
    { label: 'features',  href: `#features`},
    { label: 'pricing',   href: `#pricing`},
    { label: 'about',     href: `#about`},
    { label: 'FAQ',       href: `#faq`},
  ]
</script>

<svelte:head>
  <title>Projects | Oneezy</title>
  <link rel="canonical" href="https://oneezy.com/"/>
  <meta name="description" content="Projects by Oneezy."/>

  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.oneezy.com/"/>
  <meta property="og:site_name" content="Oneezy"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:title" content="Projects | Oneezy"/>
  <meta property="og:description" content="Projects by Oneezy."/>
  <meta property="og:image" content="https://www.oneezy.com/opengraph.png"/>
</svelte:head>

{#if $lg}
  <Scrollbar />
{/if}

<!-- Mobile -->
<Header class="block lg:hidden">
  <Dialog slot="left" type="nav">
    <Nav {links} />
  </Dialog>
  <Logo slot="center" />
  <Theme slot="right" />
</Header>

<!-- Desktop -->
<Header class="hidden lg:block">
  <Logo slot="left" class="ml-8" />
  <Nav {links} slot="center" />
  <div class="flex items-center justify-center gap-2" slot="right">
    <Link href="https://discord.gg/6Ys7gEr" target="_blank" rel="noreferrer">
      <Icon name="discord" viewBox="0 0 28 28" size="42" class="fill--primary rounded-full" />
    </Link>
    <Theme />
    <Button href="/signin" class="ml-2">Sign In</Button>
  </div>
</Header>

<!-- Layout -->
<Intro class="min-h-screen">
  <div class="min-h-screen w-full" in:fly="{{ y: 20, delay: 800, duration: 800 }}">
    <slot />
    <footer class="container mx-auto p-4 lg:p-8">
      <Social />
      <Copyright>Site™</Copyright>
    </footer>
  </div>
</Intro>