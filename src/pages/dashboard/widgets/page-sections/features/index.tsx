import { 
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
  Stack
} from '@mantine/core'
import { 
  IconCircleDotted,
  IconFileCode,
  IconFlame,
  IconReceiptOff,
  IconCookie,
  IconGauge,
  IconUser,
  IconLock,
  IconMessage2,
  IconCertificate,
  IconCoin,
  IconTruck
} from '@tabler/icons-react'
import { Page, PageHeader } from '@/components'

// 1. Features with Title Component
const titleFeatures = [
  {
    icon: IconReceiptOff,
    title: 'Free and open source',
    description: 'All packages are published under MIT license, you can use Mantine in any project',
  },
  {
    icon: IconFileCode,
    title: 'TypeScript based',
    description: 'Build type safe applications, all components and hooks export types',
  },
  {
    icon: IconCircleDotted,
    title: 'No annoying focus ring',
    description:
      'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
  },
  {
    icon: IconFlame,
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
]

function FeaturesTitle() {
  const items = titleFeatures.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ))

  return (
    <Container size="lg" py="xl">
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title order={2} style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
            A fully featured React components library for your next project
          </Title>
          <Text c="dimmed" size="lg">
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Get started
          </Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

// 2. Features Cards Component
const cardsData = [
  {
    title: 'Extreme performance',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: IconGauge,
  },
  {
    title: 'Privacy focused',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: IconUser,
  },
  {
    title: 'No third parties',
    description:
      'They\'re popular, but they\'re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: IconCookie,
  },
]

function FeaturesCards() {
  const theme = useMantineTheme()
  const features = cardsData.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" padding="xl" withBorder>
      <feature.icon size={50} stroke={1.5} color={theme.colors.blue[6]} />
      <Text fz="lg" fw={500} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ))

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Best company ever
        </Badge>
      </Group>

      <Title order={2} ta="center" mt="sm" style={{ fontSize: '2rem', fontWeight: 700 }}>
        Integrate effortlessly with any technology stack
      </Title>

      <Text c="dimmed" ta="center" mt="md" size="lg" style={{ maxWidth: 600, margin: '1rem auto' }}>
        Every once in a while, you'll see a Golbat that's missing some fangs. This happens when
        hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  )
}

// 3. Features Grid Component
const gridData = [
  {
    icon: IconGauge,
    title: 'Extreme performance',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
  },
  {
    icon: IconUser,
    title: 'Privacy focused',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
  },
  {
    icon: IconCookie,
    title: 'No third parties',
    description:
      'They\'re popular, but they\'re rare. Trainers who show them off recklessly may be targeted by thieves',
  },
  {
    icon: IconLock,
    title: 'Secure by default',
    description:
      'Although it still can\'t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don\'t grow up quite right',
  },
  {
    icon: IconMessage2,
    title: '24/7 Support',
    description:
      'Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail',
  },
]

function Feature({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size={18} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7} fw={500}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  )
}

function FeaturesGrid() {
  const features = gridData.map((feature, index) => <Feature {...feature} key={index} />)

  return (
    <Container py="xl">
      <Title order={2} ta="center" style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
        Integrate effortlessly with any technology stack
      </Title>

      <Container size={560} p={0}>
        <Text size="sm" ta="center" c="dimmed">
          Every once in a while, you'll see a Golbat that's missing some fangs. This happens when
          hunger drives it to try biting a Steel-type Pokémon.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  )
}

// 4. Features Asymmetrical Component
const asymmetricalData = [
  {
    icon: IconTruck,
    title: 'Free Worldwide shipping',
    description:
      'As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.',
  },
  {
    icon: IconCertificate,
    title: 'Best Quality Product',
    description:
      'Slakoth\'s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.',
  },
  {
    icon: IconCoin,
    title: 'Very Affordable Pricing',
    description:
      'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
  },
]

function FeatureAsymmetrical({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <Card
      withBorder
      radius="md"
      p="xl"
      style={{
        background: 'linear-gradient(135deg, rgba(103, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(103, 126, 234, 0.02) 0%, rgba(118, 75, 162, 0.02) 100%)',
          zIndex: 0
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Icon size={38} stroke={1.5} color="var(--mantine-primary-color-filled)" />
        <Text fw={700} fz="lg" mb="xs" mt={5}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </Card>
  )
}

function FeaturesAsymmetrical() {
  const items = asymmetricalData.map((item) => <FeatureAsymmetrical {...item} key={item.title} />)

  return (
    <Container mt={30} mb={30} size="lg">
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  )
}

export default function Features() {
  return (
    <Page title="Features">
      <PageHeader
        title="Features"
      />
      
      <Stack gap="xl" mt="xl">
        <div>
          <Title order={3} mb="md">Features with Title</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Two-column layout with detailed description and feature grid with gradient icons.
          </Text>
          <FeaturesTitle />
        </div>

        <div>
          <Title order={3} mb="md">Features Cards</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Card-based feature showcase with badge header and centered content layout.
          </Text>
          <FeaturesCards />
        </div>

        <div>
          <Title order={3} mb="md">Features Grid</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Simple grid layout with light theme icons and clean typography.
          </Text>
          <FeaturesGrid />
        </div>

        <div>
          <Title order={3} mb="md">Features Asymmetrical</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Stylized feature cards with gradient backgrounds and overlay effects.
          </Text>
          <FeaturesAsymmetrical />
        </div>
      </Stack>
    </Page>
  )
}