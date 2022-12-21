<script>
	import { APP_NAME, APP_TITLE, APP_SEPARATOR, APP_AUTHOR, APP_DESCRIPTION } from '@packages/metadata'
	import { page } from '$app/stores'
  import { Intro } from '@oneezy/ui';
  import Hero from '$project/lib/Hero.svelte'
</script>

<svelte:head>
	<title>{APP_NAME} {APP_SEPARATOR} {APP_TITLE}</title>
	<meta name="description" content={APP_DESCRIPTION} />

	<meta property="og:title" content="{APP_NAME} {APP_SEPARATOR} {APP_TITLE}" />
	<meta property="og:description" content={APP_DESCRIPTION} />
	<meta property="og:image" content="{$page.url.origin}/og.png" />
</svelte:head>

<Hero />