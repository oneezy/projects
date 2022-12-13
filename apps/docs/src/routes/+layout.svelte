<script>
  import { Intro, App, Hero } from '@packages/ui'
  import '@packages/ui/css/global.css'
  import '$docs/app.css'
</script>

<!-- Layout -->
<Intro>
  <App id="docs">
    <Hero>
      <svelte:fragment slot="title"><slot/></svelte:fragment>
      <svelte:fragment slot="description">This docs app is so dope</svelte:fragment>
    </Hero>
  </App>
</Intro>