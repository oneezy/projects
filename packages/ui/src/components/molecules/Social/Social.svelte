<script>
	import { socials } from '@packages/metadata'
	import { Button } from '@packages/ui'
</script>

<div class="socials flex items-center justify-center gap-2">
	{#each socials as social}
    <Button
      button="icon"
      icon="{social.name}"
      size="42"
      href={social.url}
      target="_blank" rel="noreferrer"
      aria-label={social.title} />

    
    <!-- <Button
      href="{social.url}" target="_blank" rel="noreferrer" title={social.name}
      button="icon"
      icon={social.name}
      size={social.size ? social.size : '36'}
      box={social.box ? social.box : '0 0 24 24'}
    /> -->

	{/each}
</div>
