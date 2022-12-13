<script>
  import { base } from '$app/paths'
	import { mediaQuery, Intro, App, AppBar, Scrollbar, Dialog, Nav, Logo, Theme, Button, Social, Link, Icon } from '@packages/ui'
	import '@packages/ui/css/global.css';
  import '$project/app.css';

	const sm = mediaQuery('(min-width: 0px) and (max-width: 767px)')
	const md = mediaQuery('(min-width: 0px) and (max-width: 1024px)')

  let links = [
    { label: 'home', href: `/` },
    { label: 'site', href: `/site` },
  ]
</script>

{#if !$md}
  <Scrollbar />
{/if}

<!-- Mobile -->
<AppBar class="block md:hidden">
  <Dialog slot="left" type="nav">
    <Nav {links} />
  </Dialog>
  <Logo slot="center" />
  <Theme slot="right" />
</AppBar>

<!-- Desktop -->
<AppBar class="hidden md:block">
  <Logo slot="left" class="ml-8" />
  <Nav {links} slot="center" />
  <div class="flex items-center justify-center gap-2" slot="right">
    <Link href="https://discord.gg/6Ys7gEr" target="_blank" rel="noreferrer">
      <Icon name="discord" viewBox="0 0 28 28" size="42" class="fill--primary rounded-full" />
    </Link>
    <Theme />
    <Button href="/signin" class="ml-2">Sign Up</Button>
  </div>
</AppBar>

<Intro>
  <App id="projects">
    <slot />
  </App>
</Intro>

<footer class="container mx-auto p-4 md:p-8">
  <Social />
</footer>