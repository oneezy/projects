<script>
  import { mediaQuery, Section, Img, Container, Content, Button, Stats } from '$ui'
  import Logo from '$lib/Logo.svelte'
  
	const lg = mediaQuery('(min-width: 0px) and (max-width: 1024px)')
  
  let stats = [
    { name: '8x6 Unit', value: '3', type: 'decimal', duration: 1000 },
    { name: '11x5 Unit', value: '2', type: 'decimal', duration: 1000 },
    { name: '13x5 Unit', value: '5', type: 'decimal', duration: 1000 },
    { name: '8x12 Portable', value: '1', type: 'decimal', duration: 1000 }
  ]

  let button1 = 'tel:4092274444'
  let button2 = 'https://www.google.com/maps/dir//9604+Hwy+418+W,+Silsbee,+TX+77656/@30.3828015,-94.2507446,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x86393cbc56a986af:0x1847f2c171c180a1!2m2!1d-94.2157251!2d30.3827321'
</script>


<Section class="h-full relative {$$props.class || ''}">
  <Img src="/photos/4storage-building.jpg" bg="cover" scrim="0.6" position="left" />
  <Container class="h-full">
    <Content class="min-h-screen flex flex-col items-center justify-around gap-4 py-20">

      <h1 class="text-black dark:text-white text-4xl font-bold sr-only"><slot>{name}</slot></h1>
    
      <div class="flex flex-col items-center">
        <Logo class="w-11/12 lg:w-10/12" hero />
        
        <h2 class="inline-block text-white text-center font-medium tracking-wide
            text-[5.6vw] 
            sm:text-[4vw] 
            md:text-[3vw]
            lg:text-4xl">
          {#if $lg}
            <span>When you need it Stored or Sold, <br>Trust the Black and Gold!</span>

          {:else}
            <span>When you need it Stored or Sold, Trust the Black and Gold!</span>
          {/if}
        </h2>
      </div>
      
      <Stats {stats} textColor="text-white" statColor="text-brand"/>

      <div class="w-full lg:w-1/2 flex flex-col lg:flex-row items-center lg:justify-center gap-4">
        <Button class="lg:flex-1 items-center lg:justify-center rounded-xl" href="{button1}" display="hero" button="filled"  icon="phone" position="left" size="36">Call Now</Button>
        <Button class="lg:flex-1 items-center lg:justify-center rounded-xl" href="{button2}" display="hero" button="outline" icon="map"   position="left" size="36" target="_blank">Get Directions</Button>
      </div>

    </Content>
  </Container>
</Section>