<script>
  import { Intro, App, Hero } from '@oneezy/ui'
  import '@oneezy/ui/app.css'
  import '$4storage/app.css'
</script>

<!-- Layout -->
<Intro>
  <App id="4storage">
    <Hero>
      <svelte:fragment slot="title"><slot/></svelte:fragment>
      <svelte:fragment slot="description">This 4storage app is so dope</svelte:fragment>
    </Hero>
  </App>
</Intro>