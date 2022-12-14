<script>
  import { page } from '$app/stores'
	import { APP_NAME, APP_TITLE, APP_SEPARATOR, APP_AUTHOR, APP_DESCRIPTION } from '@packages/metadata'
</script>

<svelte:head>
	<title>4storage {APP_SEPARATOR} {APP_NAME}</title>
	<meta name="description" content={APP_DESCRIPTION} />

	<meta property="og:title" content="4storage {APP_SEPARATOR} {APP_NAME}" />
	<meta property="og:description" content={APP_DESCRIPTION} />
	<meta property="og:image" content="{$page.url.origin}/og.png" />
</svelte:head>

4storage