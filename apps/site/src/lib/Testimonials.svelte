<script>
	import { Section, Container, Content, Card, Title, Button } from '@packages/ui'
	import { onMount } from 'svelte'
	import { testimonials } from '../stores/testimonials.js'

	let expanded = { isExpanded: false }

	function expand() {
		expanded.isExpanded = !expanded.isExpanded
	}
</script>

<Section id="testimonials" class="flex items-center justify-center h-full">
	<Container>
    <Content class="md:columns-2 lg:columns-3 gap-8 overflow-hidden {expanded.isExpanded ? '' : 'h-[65vh]'}">
      {#each $testimonials as testimonial}
        <Card class="mb-8">
          <figure class="flex items-center space-x-4">

            <img
              src={testimonial.avatar}
              alt={testimonial.author}
              class="flex-none w-14 h-14 rounded-full object-contain bg-black {testimonial.hasAvatar == false ? 'p-2' : ''}"
              loading="lazy"
            />

            <figcaption class="text-lg text--primary font-medium">
              {testimonial.author}
            </figcaption>
          </figure>
          <blockquote class="mt-6 leading-relaxed text--secondary">
            {testimonial.content}
          </blockquote>
        </Card>
      {/each}
    </Content>

    <Container
      id="expand"
      class="sticky bottom-0 flex justify-center pt-32 pb-8 bg-gradient-to-t from-lite-primary dark:from-dark-primary">

      {#if expanded.isExpanded}
        <Button href="#expand" on:click={expand}>Ok, I get the point</Button>
      {:else}
        <Button on:click={expand}>Show more...</Button>
      {/if}
    </Container>
      
	</Container>
</Section>
