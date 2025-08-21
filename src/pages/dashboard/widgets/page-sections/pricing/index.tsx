import { Page, PageHeader } from '@/components'
import { Stack, Title, Text, Card, Group, Button, Badge, List, ThemeIcon, Container, SimpleGrid, Center } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons-react'

// Simple Pricing Cards
function PricingSimple() {
  const plans = [
    {
      title: 'Free',
      price: '$0',
      period: 'forever',
      features: ['5 projects', '1GB storage', 'Basic support', 'Community access'],
      buttonText: 'Get Started',
      buttonVariant: 'light' as const,
    },
    {
      title: 'Pro',
      price: '$19',
      period: 'per month',
      features: ['50 projects', '100GB storage', 'Priority support', 'Advanced features'],
      buttonText: 'Start Free Trial',
      buttonVariant: 'filled' as const,
      popular: true,
    },
    {
      title: 'Enterprise',
      price: '$99',
      period: 'per month',
      features: ['Unlimited projects', '1TB storage', '24/7 support', 'Custom integrations'],
      buttonText: 'Contact Sales',
      buttonVariant: 'light' as const,
    },
  ]

  return (
    <Container size="lg">
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {plans.map((plan, index) => (
          <Card key={index} shadow="sm" padding="xl" radius="md" withBorder h="100%">
            <Stack gap="lg" h="100%">
              {plan.popular && (
                <Badge color="blue" variant="filled" size="sm" style={{ alignSelf: 'flex-start' }}>
                  Most Popular
                </Badge>
              )}
              
              <div>
                <Title order={3} size="h2" mb="xs">{plan.title}</Title>
                <Group gap={5} align="baseline">
                  <Text size="2rem" fw={700}>{plan.price}</Text>
                  <Text c="dimmed">/{plan.period}</Text>
                </Group>
              </div>

              <List
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="blue" size={20} radius="xl">
                    <IconCheck size={12} />
                  </ThemeIcon>
                }
              >
                {plan.features.map((feature, idx) => (
                  <List.Item key={idx}>{feature}</List.Item>
                ))}
              </List>

              <Button variant={plan.buttonVariant} fullWidth mt="auto">
                {plan.buttonText}
              </Button>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  )
}

// Pricing with Badge
function PricingBadge() {
  return (
    <Container size="sm">
      <Card shadow="lg" padding="xl" radius="lg" withBorder>
        <Stack align="center" gap="lg">
          <Badge size="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
            Special Offer
          </Badge>
          
          <div style={{ textAlign: 'center' }}>
            <Title order={1} size="3rem">$49</Title>
            <Text size="lg" c="dimmed">
              <Text component="span" td="line-through">$99</Text> per month
            </Text>
            <Text size="sm" c="dimmed">Save 50% - Limited time</Text>
          </div>

          <List
            spacing="sm"
            size="sm"
            center
            icon={
              <ThemeIcon color="green" size={20} radius="xl">
                <IconCheck size={12} />
              </ThemeIcon>
            }
          >
            <List.Item>Unlimited projects</List.Item>
            <List.Item>Premium templates</List.Item>
            <List.Item>Priority support</List.Item>
            <List.Item>Advanced analytics</List.Item>
            <List.Item>Custom branding</List.Item>
          </List>

          <Button size="lg" fullWidth gradient={{ from: 'blue', to: 'cyan' }}>
            Claim This Deal
          </Button>

          <Text size="xs" c="dimmed" ta="center">
            30-day money-back guarantee
          </Text>
        </Stack>
      </Card>
    </Container>
  )
}

// Pricing Comparison Table
function PricingTable() {
  const features = [
    { name: 'Projects', free: '5', pro: '50', enterprise: 'Unlimited' },
    { name: 'Storage', free: '1GB', pro: '100GB', enterprise: '1TB' },
    { name: 'Support', free: 'Community', pro: 'Email', enterprise: '24/7 Phone' },
    { name: 'API Access', free: false, pro: true, enterprise: true },
    { name: 'Custom Domains', free: false, pro: true, enterprise: true },
    { name: 'Analytics', free: false, pro: 'Basic', enterprise: 'Advanced' },
    { name: 'White Label', free: false, pro: false, enterprise: true },
  ]

  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <ThemeIcon color="green" size={20} radius="xl">
          <IconCheck size={12} />
        </ThemeIcon>
      ) : (
        <ThemeIcon color="red" size={20} radius="xl" variant="light">
          <IconX size={12} />
        </ThemeIcon>
      )
    }
    return <Text size="sm">{value}</Text>
  }

  return (
    <Container size="lg">
      <Card shadow="sm" padding="0" radius="md" withBorder>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
                <th style={{ padding: '1rem', textAlign: 'left', width: '25%' }}>
                  <Text fw={600}>Features</Text>
                </th>
                <th style={{ padding: '1rem', textAlign: 'center', width: '25%' }}>
                  <Stack gap="xs" align="center">
                    <Text fw={600}>Free</Text>
                    <Text size="lg" fw={700}>$0</Text>
                  </Stack>
                </th>
                <th style={{ padding: '1rem', textAlign: 'center', width: '25%', backgroundColor: 'var(--mantine-color-blue-0)' }}>
                  <Stack gap="xs" align="center">
                    <Badge color="blue" size="sm">Popular</Badge>
                    <Text fw={600}>Pro</Text>
                    <Text size="lg" fw={700}>$19/mo</Text>
                  </Stack>
                </th>
                <th style={{ padding: '1rem', textAlign: 'center', width: '25%' }}>
                  <Stack gap="xs" align="center">
                    <Text fw={600}>Enterprise</Text>
                    <Text size="lg" fw={700}>$99/mo</Text>
                  </Stack>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} style={{ borderBottom: '1px solid var(--mantine-color-gray-2)' }}>
                  <td style={{ padding: '1rem' }}>
                    <Text size="sm" fw={500}>{feature.name}</Text>
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'center' }}>
                    {renderFeatureValue(feature.free)}
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'center', backgroundColor: 'var(--mantine-color-blue-0)' }}>
                    {renderFeatureValue(feature.pro)}
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'center' }}>
                    {renderFeatureValue(feature.enterprise)}
                  </td>
                </tr>
              ))}
              <tr>
                <td style={{ padding: '1rem' }}></td>
                <td style={{ padding: '1rem', textAlign: 'center' }}>
                  <Button variant="light" size="sm" fullWidth>
                    Get Started
                  </Button>
                </td>
                <td style={{ padding: '1rem', textAlign: 'center', backgroundColor: 'var(--mantine-color-blue-0)' }}>
                  <Button size="sm" fullWidth>
                    Start Trial
                  </Button>
                </td>
                <td style={{ padding: '1rem', textAlign: 'center' }}>
                  <Button variant="light" size="sm" fullWidth>
                    Contact Sales
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </Container>
  )
}

// Simple Single Plan Pricing
function PricingSingle() {
  return (
    <Container size="sm">
      <Center>
        <Card shadow="lg" padding="xl" radius="lg" withBorder maw={400}>
          <Stack align="center" gap="lg">
            <Badge size="lg" color="green">
              Single Plan
            </Badge>
            
            <div style={{ textAlign: 'center' }}>
              <Title order={1} size="4rem" c="blue">$29</Title>
              <Text size="lg" c="dimmed">per month, per user</Text>
            </div>

            <Text ta="center" c="dimmed">
              Everything you need to run your business successfully
            </Text>

            <List
              spacing="sm"
              size="sm"
              center
              icon={
                <ThemeIcon color="green" size={20} radius="xl">
                  <IconCheck size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>Unlimited everything</List.Item>
              <List.Item>Premium support</List.Item>
              <List.Item>Advanced features</List.Item>
              <List.Item>Custom integrations</List.Item>
              <List.Item>99.9% uptime SLA</List.Item>
            </List>

            <Button size="lg" fullWidth>
              Start Free Trial
            </Button>

            <Group justify="center" gap="lg">
              <Text size="xs" c="dimmed">No credit card required</Text>
              <Text size="xs" c="dimmed">Cancel anytime</Text>
            </Group>
          </Stack>
        </Card>
      </Center>
    </Container>
  )
}

export default function Pricing() {
  return (
    <Page title="Pricing Components">
      <PageHeader
        title="Pricing"
      />
      
      <Stack gap="xl" mt="xl">
        {/* Simple Pricing Cards */}
        <div>
          <Title order={3} mb="md">Simple Pricing Cards</Title>
          <Text size="sm" c="dimmed" mb="lg">Clean card-based pricing layout with different plan tiers</Text>
          <PricingSimple />
        </div>

        {/* Pricing with Badge */}
        <div>
          <Title order={3} mb="md">Pricing with Special Offer Badge</Title>
          <Text size="sm" c="dimmed" mb="lg">Single plan pricing with promotional badge and discount</Text>
          <PricingBadge />
        </div>

        {/* Pricing Comparison Table */}
        <div>
          <Title order={3} mb="md">Pricing Comparison Table</Title>
          <Text size="sm" c="dimmed" mb="lg">Detailed feature comparison table across different plans</Text>
          <PricingTable />
        </div>

        {/* Single Plan Pricing */}
        <div>
          <Title order={3} mb="md">Single Plan Pricing</Title>
          <Text size="sm" c="dimmed" mb="lg">Simple single plan pricing card with feature list</Text>
          <PricingSingle />
        </div>
      </Stack>
    </Page>
  )
}