<script>
  import { fly } from 'svelte/transition';
  import { APP_NAME } from '@packages/metadata';
  import { Section, mediaQuery, Container, Content, Button, TextAnimate, Stats } from '@oneezy/ui';
  
	const lg = mediaQuery('(min-width: 0px) and (max-width: 1024px)')
</script>

<Section {...$$restProps} id="home" class="w-full relative py-20 active section--active min-h-[100vh]">
  <Container class="h-full">
    <Content class="h-full mx-auto flex flex-col lg:items-center justify-around gap-6 select-none">
      <h1 class="text-black dark:text-white text-4xl font-bold sr-only">{APP_NAME}</h1>
    
      <h3 class="grid items-center justify-center text-center text-7xl md:text-[14vw] lg:text-[12vw] xl:text-[8vw] tracking-tight md:tracking-tight font-black">
        <span class="-mb-9 md:-mb-12 block">Make.</span>
        <TextAnimate class="py-8 block">Crypto.</TextAnimate>
        <span class="-mt-9 md:-mb-12 block">Happen.</span>
      </h3>
      
      <h2 class="inline-block text--secondary text-center font-medium tracking-wide
           text-[5.6vw] 
        sm:text-[4vw] 
        md:text-[3vw]     md:mt-20 
        lg:text-3xl
        ">
        {#if $lg}
        <span>Oneezy™ is your personal <br>crypto trading co-pilot.</span>

        {:else}
        <span>Oneezy™ is your personal crypto trading co-pilot.</span>
        {/if}
      </h2>
      
      <Stats />
        
      <div in:fly="{{ y: 10, delay: 900, duration: 800 }}" class="flex flex-col justify-center lg:flex-row gap-4">
        <div class="w-full lg:w-64">
          <Button href="/#features" display="hero">Learn More</Button>
        </div>

        {#if $lg}
          <div in:fly="{{ y: 10, delay: 900, duration: 800 }}" class="w-full lg:w-64">
            <Button href="/dashboard" button="outline" display="hero">Create Bot</Button>
          </div>

        {:else}
          <div class="w-full lg:w-64">
            <Button href="/dashboard" button="outline" display="hero">Create Bot</Button>
          </div>
        {/if}
      </div>
    </Content>
  </Container>

</Section>