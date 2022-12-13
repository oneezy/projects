<script>
  import { Section, Container, Content, Card, Title, Button, Icon } from '@packages/ui';
  
  const features = [
    { id: 1, icon: 'user-group',  name: 'Community Driven',       description: 'This bot was built by you... real traders. Continuously crafting features from your feedback to push crypto forward.', box: '0 0 20 20' },
    { id: 2, icon: 'gear',        name: 'Limitless Strategies',   description: 'Use our built-in strategies or make your own using TradingView web hooks or a custom application.' },
    { id: 3, icon: 'settings',    name: 'Customizable Settings',  description: 'Select from over 100+ possible setting combinations. Position Protections, Trailing Profit, Stop Loss, and tons more!' },
    { id: 4, icon: 'cloud',       name: 'Cloud Hosted',           description: 'Once you start your bot it stays on. Forever. No need to stay logged in or keep your computer running.' },
    { id: 5, icon: 'install',     name: 'Mobile Friendly',        description: 'Use oneezy on the go anywhere you have an internet connection. Available on iOS and Android.' },
    { id: 6, icon: 'sparkles',    name: 'Free To Try',            description: 'Try the bot free for 7-days and only pay when you make a profit or explore different strategies on Testnet before going Live.' },
    { id: 7, icon: 'bolt',        name: 'Low Latency Times',      description: 'High performance servers within 5 milliseconds from your crypto exchange. Optimizing fills and reducing slippage.' },
    { id: 8, icon: 'chat',        name: 'Expert Level Support',   description: 'Proficient support team to help with any crypto bot questions you have, besides financial advice.' },
    { id: 9, icon: 'theme',      name: 'Lite or Dark Theme',     description: 'Switch between lite or dark mode with 1-click, or automatically adjust with system settings to suit environment.', box: '0 0 20 20' },

    // { id: 10, icon: 'robot', name: 'Unlimited Bots',                          description: '' },
    // { id: 10, icon: 'robot', name: 'Private & Secure',                        description: '' },
    // { id: 10, icon: 'robot', name: '99.99% Uptime',                           description: '' },
    // { id: 10, icon: 'robot', name: '200+ Countries Supported',                description: '' },
    // { id: 10, icon: 'robot', name: 'Affiliate Program',                       description: '' },
    // { id: 10, icon: 'robot', name: 'Mulitple Languages',                      description: '' },
    // { id: 10, icon: 'robot', name: 'Time Rewind',                             description: '' },
    // { id: 10, icon: 'robot', name: 'Copy Trading',                            description: '' },
  ]
</script>

<Section id="features" class="min-h-screen h-full">
  <Container>
    <Content>
      <Title 
        subtitle="Features" 
        tagline="Multiple ways to help you take flight." />

      <div class="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {#each features as feature} 
          <Card class="md:p-8">
            <Icon name={feature.icon} size="24" viewBox={feature.box || '0 0 24 24'} class="w-9 h-9 p-2 flex items-center justify-center fill-brand-primary-6 text-brand-primary-6 bg-brand-primary-1 rounded-full dark:bg-brand-primary-6 dark:text-lite dark:fill-lite mb-4" />
            <h3 class="text-lg text--primary font-medium mb-4">{feature.name}</h3>
            <p class="leading-relaxed text--secondary">{feature.description}</p>
          </Card>
        {/each}

      </div>
    </Content>
  </Container>
</Section>