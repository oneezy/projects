<script>
	import { Section, Container, Content, Card, Title, Button, Icon } from '@packages/ui'

  let id

	const pricing = [
		{
			name: 'Starter',
			price: 'FREE',
			features: [
				// { feature: '7-Day Free Trial' },
				{ feature: 'Zero Upfront Cost' },
				{ feature: '15% Profit Invoiced Weekly' },
				{ feature: 'Never Pay for Losses' },
				{ feature: 'Prepay Options Available' }
			],
			description: 'We only make money when you do.',
			isFeatured: true,
			isFree: true,
			trial: '7-Day Trial'
		}
		// {
		//   name: 'Pro',
		//   price: 38,
		//   features: [
		//     { feature: 'Feature 1' },
		//     { feature: 'Feature 2' },
		//     { feature: 'Feature 3' },
		//     { feature: 'Feature 4' },
		//   ],
		//   description: 'Faster trades, better profits.',
		//   isFeatured: false
		// },
		// {
		//   name: 'Team',
		//   price: 56,
		//   features: [
		//     { feature: 'Feature 1' },
		//     { feature: 'Feature 2' },
		//     { feature: 'Feature 3' },
		//     { feature: 'Feature 4' },
		//     { feature: 'Feature 5' }
		//   ],
		//   description: 'Team trading, better better profits.',
		//   isFeatured: false
		// },
	]
</script>

<Section id="pricing" class="min-h-[100vh_!important] h-full flex-col items-center justify-center">
	<Container class="h-full flex flex-col items-center justify-center">
		<Title subtitle="Pricing" tagline="We only profit when you do." />

		<Content class="flex w-full mx-auto justify-center">
			<div class="flex h-full w-full gap-4 items-stretch justify-center">
				{#each pricing as price}
					<Card class="flex flex-col w-full md:w-1/2 lg:w-1/3">
						<div class="grow">
							<span class="text-sm tracking-widest mb-1 font-medium text--primary uppercase">{price.name}</span>
							<strong
								class="text--primary font-normal text-5xl pb-4 mb-4 border-b border-lite-2 dark:border-lite-6/40 leading-none flex items-center">
								{#if price.isFree}
									<span class="inline-block relative">{price.price}
										<span class="text-sm ml-1 font-normal text--dim w-full absolute top-1 left-[100%]">{price.trial}</span>
									</span>
								{:else}
									<span>${price.price}</span>
									<span class="text-lg ml-1 font-normal text--dim lowercase">/mo</span>
								{/if}
							</strong>

							{#each price.features as feature}
								<p class="flex items-center text--secondary mb-2">
									<Icon
										name="check"
										viewBox="0 0 20 20"
										size="20"
										class="fill-lite bg-brand-primary rounded-full p-1 mr-3"/>
									{feature.feature}
								</p>
							{/each}
						</div>

						<div class="w-full mt-10 grid gap-3"> 
							<Button href="/signin" class="w-full">Sign Up</Button>
							<p class="text-xs text--dim">{price.description}</p>
						</div>
					</Card>
				{/each}
			</div>
		</Content>
	</Container>
</Section>
