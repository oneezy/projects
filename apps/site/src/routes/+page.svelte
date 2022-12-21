<script>
	import { APP_NAME, APP_TITLE, APP_SEPARATOR, APP_DESCRIPTION } from '@packages/metadata'

	import { page } from '$app/stores'
	import { App } from '@oneezy/ui'
	import Hero from '$site/lib/Hero.svelte'
	import Features from '$site/lib/Features.svelte'
	import Pricing from '$site/lib/Pricing.svelte'
	import About from '$site/lib/About.svelte'
	import TrustedBy from '$site/lib/TrustedBy.svelte'
	import Testimonials from '$site/lib/Testimonials.svelte'
	import FAQ from '$site/lib/FAQ.svelte'
	import CTA from '$site/lib/CTA.svelte'
</script>

<svelte:head>
	<title>{APP_NAME} {APP_SEPARATOR} {APP_TITLE}</title>
	<meta name="description" content={APP_DESCRIPTION} />
	<meta property="og:title" content="{APP_NAME} {APP_SEPARATOR} {APP_TITLE}" />
	<meta property="og:description" content={APP_DESCRIPTION} />
	<meta property="og:image" content="{$page.url.origin}/og.png" />
</svelte:head>

<App id="site">
  <Hero id="home" />
  <TrustedBy id="trustedby" />
  <Testimonials id="testimonials" />
  <Features id="features" />
  <Pricing id="pricing" />
  <About id="about" />
  <FAQ id="faq" />
  <CTA id="cta" />
</App>