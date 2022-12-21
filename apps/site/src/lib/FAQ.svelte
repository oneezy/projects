<script>
  import { Section, Container, Title, Accordion, AccordionItem } from '@oneezy/ui';
  import { onMount } from 'svelte';
  import { faqs } from '../stores/faqs.js';
</script>

<Section id="faq" class="min-h-screen grid overflow-hidden">
  <Container class="w-full">
    <Title 
      subtitle="FAQ"
      tagline="You've got questions, we've got answers." 
    />

    <Accordion>
      {#each $faqs as faq}
      <AccordionItem title="{faq.question}">
        {faq.answer}
      </AccordionItem>
      {/each}
    </Accordion>
    
  </Container>
</Section>