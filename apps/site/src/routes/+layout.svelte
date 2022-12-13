<script>
  import { base } from '$app/paths'
	import { page } from '$app/stores'
  import { fade, fly } from 'svelte/transition';
	import { APP_URL, APP_NAME, APP_SEPARATOR, APP_DESCRIPTION } from '@packages/metadata'
	import { mediaQuery, Intro, BG, Header, Scrollbar, Dialog, Logo, Nav, Theme, Button, Social, Device, Link, Icon, Copyright } from '@packages/ui'
	import '@packages/ui/css/global.css'
	import '$site/app.css'

	const sm = mediaQuery('(min-width: 0px) and (max-width: 1024px)')
	const lg = mediaQuery('(min-width: 1025px)')
  
  let links = [
    { label: 'home',      href: `#home`},
    { label: 'features',  href: `#features`},
    { label: 'pricing',   href: `#pricing`},
    { label: 'about',     href: `#about`},
    { label: 'FAQ',       href: `#faq`},
    { label: 'Docs',      href: 'https://docs.Oneezy.io'},
  ]
</script>

<svelte:head>
	<title>{APP_NAME} {APP_SEPARATOR} {APP_DESCRIPTION}</title>
	<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<link rel="canonical" href="{APP_URL}{$page.url.pathname}" />

	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:APP_name" content={APP_NAME} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
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
  <div class="min-h-screen w-full absolute" in:fade="{{ delay: 50, duration: 750 }}" out:fade>
    <BG class="h-[150vh] mt-[-35vh] lg:mt-0 lg:h-screen" />
  </div>

  <div class="min-h-screen w-full" in:fly="{{ y: 20, delay: 800, duration: 800 }}">
    <slot />
    <footer class="container mx-auto p-4 lg:p-8">
      <Social />
      <Copyright>Oneezy™</Copyright>
    </footer>
  </div>
</Intro>