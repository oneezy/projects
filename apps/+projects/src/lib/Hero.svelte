<script>
  import { Section, Container, Content, TextAnimate, Title } from '@packages/ui';
</script>

<Section {...$$restProps} class="h-screen pt-20 md:pt-32 md:pb-[10vh]">
  <Container class="h-full bg-blue-500/0">
    <Content class="h-full flex flex-col justify-around">
      <h3 class="select-none grid items-center justify-center text-center text-6xl md:text-[12vw] lg:text-[10vw] xl:text-[7vw] tracking-tight font-black">
        <span class="-mb-6">Should be contents of the</span>
        <TextAnimate class="py-6">'/site' Route</TextAnimate>
        <span class="-mt-6"></span>
      </h3>

      <Title tagline="But URL still need to be the `/` root" />
    </Content>
  </Container>
</Section>