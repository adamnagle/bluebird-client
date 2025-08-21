import {
  Avatar,
  Button,
  Card,
  Group,
  Text,
  Badge,
  Image,
  ActionIcon,
  Paper,
  Progress,
  ThemeIcon,
  RingProgress,
  SimpleGrid,
  Stack,
  Title
} from '@mantine/core'
import { IconHeart, IconSwimming } from '@tabler/icons-react'
import { Page, PageHeader } from '@/components'

// 1. User Card with Image Component
const userStats = [
  { value: '34K', label: 'Followers' },
  { value: '187', label: 'Follows' },
  { value: '1.6K', label: 'Posts' },
]

function UserCardImage() {
  const items = userStats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ))

  return (
    <Card withBorder padding="xl" radius="md" style={{ backgroundColor: 'var(--mantine-color-body)' }}>
      <Card.Section
        h={140}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        style={{ border: '2px solid var(--mantine-color-body)' }}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        Bill Headbanger
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        Fullstack engineer
      </Text>
      <Group mt="md" justify="center" gap={30}>
        {items}
      </Group>
      <Button fullWidth radius="md" mt="xl" size="md" variant="default">
        Follow
      </Button>
    </Card>
  )
}

// 2. Badge Card Component
const mockdata = {
  image:
    'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  title: 'Verudela Beach',
  country: 'Croatia',
  description:
    'Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.',
  badges: [
    { emoji: '☀️', label: 'Sunny weather' },
    { emoji: '🦓', label: 'Onsite zoo' },
    { emoji: '🌊', label: 'Sea' },
    { emoji: '🌲', label: 'Nature' },
    { emoji: '🤽', label: 'Water sports' },
  ],
}

function BadgeCard() {
  const { image, title, description, country, badges } = mockdata
  const features = badges.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ))

  return (
    <Card withBorder radius="md" p="md">
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm" variant="light">
            {country}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section>
        <Text mt="md" c="dimmed" fw={500} fz="sm">
          Perfect for you, if you enjoy
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  )
}

// 3. Stats Card Component
function StatsCard() {
  return (
    <Paper radius="md" withBorder p="lg" style={{ textAlign: 'center' }}>
      <ThemeIcon size={60} radius={60} mx="auto" mb="md">
        <IconSwimming size={32} stroke={1.5} />
      </ThemeIcon>

      <Text ta="center" fw={700} fz="lg">
        Swimming challenge
      </Text>
      <Text c="dimmed" ta="center" fz="sm">
        32 km / week
      </Text>

      <Group justify="space-between" mt="xs">
        <Text fz="sm" c="dimmed">
          Progress
        </Text>
        <Text fz="sm" c="dimmed">
          62%
        </Text>
      </Group>

      <Progress value={62} mt={5} />

      <Group justify="space-between" mt="md">
        <Text fz="sm">20 / 36 km</Text>
        <Badge size="sm">4 days left</Badge>
      </Group>
    </Paper>
  )
}

// 4. Card with Stats Component
const cardStats = [
  { title: 'Distance', value: '27.4 km' },
  { title: 'Avg. speed', value: '9.6 km/h' },
  { title: 'Score', value: '88/100' },
]

function CardWithStats() {
  const items = cardStats.map((stat) => (
    <div key={stat.title}>
      <Text size="xs" c="dimmed">
        {stat.title}
      </Text>
      <Text fw={500} size="sm">
        {stat.value}
      </Text>
    </div>
  ))

  return (
    <Card withBorder padding="lg" radius="md">
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          alt="Running challenge"
          height={100}
        />
      </Card.Section>

      <Group justify="space-between" mt="lg">
        <Text fw={500} fz="lg">Running challenge</Text>
        <Group gap={5}>
          <Text fz="xs" c="dimmed">
            80% completed
          </Text>
          <RingProgress size={18} thickness={2} sections={[{ value: 80, color: 'blue' }]} />
        </Group>
      </Group>
      <Text mt="sm" mb="md" c="dimmed" fz="xs">
        56 km this month • 17% improvement compared to last month • 443 place in global scoreboard
      </Text>
      <Card.Section 
        style={{ 
          padding: 'var(--mantine-spacing-md)',
          borderTop: '1px solid var(--mantine-color-gray-3)',
          backgroundColor: 'var(--mantine-color-gray-0)'
        }}
      >
        <Group justify="space-around">
          {items}
        </Group>
      </Card.Section>
    </Card>
  )
}

// 5. Stats Group Component
const data = [
  {
    title: 'Page views',
    stats: '456,133',
    description: '24% more than in the same month last year, 33% more that two years ago',
  },
  {
    title: 'New users',
    stats: '2,175',
    description: '13% less compared to last month, new user engagement up by 6%',
  },
  {
    title: 'Completed orders',
    stats: '1,994',
    description: '1994 orders were completed this month, 97% satisfaction rate',
  },
]

function StatsGroup() {
  const stats = data.map((stat) => (
    <div key={stat.title} style={{ textAlign: 'center', padding: '1rem' }}>
      <Text
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          lineHeight: 1,
          color: 'var(--mantine-primary-color-filled)'
        }}
      >
        {stat.stats}
      </Text>
      <Text
        fw={600}
        fz="sm"
        style={{
          textTransform: 'uppercase',
          marginTop: '0.5rem',
          marginBottom: '0.25rem'
        }}
      >
        {stat.title}
      </Text>
      <Text fz="xs" c="dimmed" style={{ lineHeight: 1.4 }}>
        {stat.description}
      </Text>
    </div>
  ))
  
  return (
    <Paper withBorder radius="md" p="md">
      <SimpleGrid cols={{ base: 1, sm: 3 }}>{stats}</SimpleGrid>
    </Paper>
  )
}

export default function DataDisplay() {
  return (
    <Page title="Data Display">
      <PageHeader
        title="Data Display"
      />
      
      <Stack gap="xl" mt="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <div>
            <Title order={3} mb="md">User Card with Image</Title>
            <Text size="sm" c="dimmed" mb="lg">
              User profile card with background image, avatar, stats, and follow button.
            </Text>
            <UserCardImage />
          </div>

          <div>
            <Title order={3} mb="md">Stats Challenge Card</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Progress tracking card with icon, progress bar, and completion stats.
            </Text>
            <StatsCard />
          </div>
        </SimpleGrid>

        <div>
          <Title order={3} mb="md">Badge Card</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Product card with image, description, feature badges, and action buttons.
          </Text>
          <BadgeCard />
        </div>

        <div>
          <Title order={3} mb="md">Card with Stats</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Activity card showing challenge progress with detailed statistics footer.
          </Text>
          <CardWithStats />
        </div>

        <div>
          <Title order={3} mb="md">Grouped Statistics</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Analytics dashboard showing key metrics with descriptions and comparisons.
          </Text>
          <StatsGroup />
        </div>
      </Stack>
    </Page>
  )
}