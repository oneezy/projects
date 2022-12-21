<script>
  import  { APP_NAME } from '@packages/metadata';
  import { Section, Container, Content, Title, Button } from '@oneezy/ui';
</script>

<Section id="about" class="min-h-screen grid overflow-hidden">
  <Container class="w-full">
    <Title 
      subtitle="Oneezy™"
      tagline="We make crypto happen." 
    />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">
      <Content prose class="order-2 lg:order-none pt-4 lg:pt-0">
        <h3>Trading crypto is hard.</h3>
        <p>
          Trading bots are incredible for removing emotion, but setup and configuration can be a nightmare. 
          There are a lot of options to maintain between settings and hardware. As a trader we don't want to 
          waste time configuring hardware and sitting on the sidelines.
        </p>

        <h3>We made it easy.</h3>
        <p>
          After using numerous other bots, in 2018 the three of us decided that we needed a fresh new take on 
          the experience. We had four goals in mind: Only profit if our users profit, meaning no upfront fee 
          to use; Hosted by us so users don't have to hassle with maintenance of their bots; Focus our development 
          in one direction to create the most powerful and easy to use bot; And make it so users can get started 
          in minutes, not hours. Let us be your co-pilot as we continue to make crypto happen.
        </p>
<!-- 
        <div class="flex gap-4 not-prose">
          <Button class="text-lite-primary" href="/">Button</Button>
          <Button class="text-dark-primary" href="/" button="outline">Button</Button>
        </div> -->
      </Content>

      <figure class="order-1 lg:order-none">
        <img src="/og.png" alt="{APP_NAME}" class="scale-[1.2] lg:scale-[1.5] lg:origin-left lg:translate-x-[25vw] transition-all delay-200 duration-300 lg:opacity-0 lg:sectionActive:translate-x-0 lg:sectionActive:opacity-100" />
      </figure>
    </div>
  </Container>
</Section>

<!-- 
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Oneezy, 
        <br class="hidden lg:inline-block">a cryptocurrency trading robot
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
  </div>
</section> -->