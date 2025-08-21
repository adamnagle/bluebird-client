import { 
  Card,
  Container,
  Stack,
  Text,
  Title,
  SimpleGrid,
  Group,
  Badge,
  Button,
  Avatar,
  ActionIcon,
  Paper,
  Progress,
  Image,
  Anchor,
  ThemeIcon,
  Divider,
  RingProgress,
  Center
} from '@mantine/core'
import { 
  IconHeart,
  IconStar,
  IconDownload,
  IconShare,
  IconBookmark,
  IconThumbUp,
  IconUser,
  IconTrendingUp,
  IconTrendingDown,
  IconEye,
  IconMessageCircle,
  IconDots,
  IconChevronRight,
  IconMapPin,
  IconClock,
  IconCalendar
} from '@tabler/icons-react'
import { Page, PageHeader } from '@/components'
import classes from './index.module.css'

// 1. Project Card Component
function ProjectCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.projectCard}>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3"
          height={160}
          alt="Project"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Mobile App Design</Text>
        <Badge color="green">Active</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Modern mobile application design with clean UI and smooth user experience
      </Text>

      <Group justify="space-between" mt="md">
        <Avatar.Group spacing="sm">
          <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" radius="xl" size="sm" />
          <Avatar src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91" radius="xl" size="sm" />
          <Avatar radius="xl" size="sm">+3</Avatar>
        </Avatar.Group>
        <Text size="sm" c="dimmed">Due: Dec 15</Text>
      </Group>

      <Progress value={75} mt="md" />
      <Text size="xs" c="dimmed" mt="xs">75% complete</Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        View Project
      </Button>
    </Card>
  )
}

// 2. User Profile Card Component
function UserProfileCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.profileCard}>
      <Center>
        <Avatar
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
          size={80}
          radius={80}
          mx="auto"
        />
      </Center>

      <Text ta="center" fw={500} mt="md">
        John Doe
      </Text>
      <Text ta="center" size="sm" c="dimmed">
        Senior Developer
      </Text>

      <Group justify="center" mt="md" gap="xl">
        <div>
          <Text ta="center" fw={700} size="lg">
            42
          </Text>
          <Text ta="center" size="xs" c="dimmed">
            Projects
          </Text>
        </div>
        <div>
          <Text ta="center" fw={700} size="lg">
            1.2k
          </Text>
          <Text ta="center" size="xs" c="dimmed">
            Followers
          </Text>
        </div>
        <div>
          <Text ta="center" fw={700} size="lg">
            89
          </Text>
          <Text ta="center" size="xs" c="dimmed">
            Following
          </Text>
        </div>
      </Group>

      <Button fullWidth mt="md" radius="md">
        Follow
      </Button>
    </Card>
  )
}

// 3. Analytics Card Component
function AnalyticsCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mb="md">
        <div>
          <Text size="sm" c="dimmed">Revenue</Text>
          <Text fw={700} size="xl">$12,543</Text>
        </div>
        <RingProgress
          size={60}
          roundCaps
          thickness={8}
          sections={[{ value: 65, color: 'blue' }]}
          label={
            <Center>
              <IconTrendingUp size={18} />
            </Center>
          }
        />
      </Group>

      <Group gap="xs" mb="xs">
        <IconTrendingUp size={16} color="green" />
        <Text size="sm" c="green">+18%</Text>
        <Text size="sm" c="dimmed">from last month</Text>
      </Group>

      <Progress value={65} color="blue" />
    </Card>
  )
}

// 4. Social Card Component
function SocialCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mb="md">
        <Avatar src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91" radius="xl" />
        <ActionIcon variant="subtle" color="gray">
          <IconDots size={16} />
        </ActionIcon>
      </Group>

      <Text fw={500} mb="xs">Sarah Johnson</Text>
      <Text size="sm" c="dimmed" mb="md">
        Just finished working on the new dashboard design. Really excited to share it with the team! 🎨
      </Text>

      <Image
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
        radius="md"
        mb="md"
      />

      <Group justify="space-between">
        <Group gap="lg">
          <Group gap="xs">
            <ActionIcon variant="subtle" color="red">
              <IconHeart size={16} />
            </ActionIcon>
            <Text size="sm">24</Text>
          </Group>
          <Group gap="xs">
            <ActionIcon variant="subtle" color="blue">
              <IconMessageCircle size={16} />
            </ActionIcon>
            <Text size="sm">8</Text>
          </Group>
          <Group gap="xs">
            <ActionIcon variant="subtle" color="green">
              <IconShare size={16} />
            </ActionIcon>
            <Text size="sm">3</Text>
          </Group>
        </Group>
        <Text size="xs" c="dimmed">2h ago</Text>
      </Group>
    </Card>
  )
}

// 5. Product Card Component
function ProductCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.productCard}>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          height={180}
          alt="Product"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Nike Air Max</Text>
        <ActionIcon variant="subtle" color="red">
          <IconHeart size={18} />
        </ActionIcon>
      </Group>

      <Text size="sm" c="dimmed" mb="md">
        Comfortable running shoes with excellent cushioning and support
      </Text>

      <Group justify="space-between" align="flex-end">
        <div>
          <Text fw={700} size="lg">$129.99</Text>
          <Text size="sm" c="dimmed" td="line-through">$159.99</Text>
        </div>
        <Badge color="red">-19%</Badge>
      </Group>

      <Group mt="md" gap="xs">
        <IconStar size={16} fill="orange" color="orange" />
        <Text size="sm">4.8 (124 reviews)</Text>
      </Group>

      <Button color="blue" fullWidth mt="md" radius="md">
        Add to Cart
      </Button>
    </Card>
  )
}

// 6. Event Card Component
function EventCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group gap="md" mb="md">
        <ThemeIcon size={40} radius="md" color="blue">
          <IconCalendar size={20} />
        </ThemeIcon>
        <div>
          <Text fw={500}>Design Conference 2024</Text>
          <Group gap="xs">
            <IconMapPin size={16} />
            <Text size="sm" c="dimmed">San Francisco, CA</Text>
          </Group>
        </div>
      </Group>

      <Text size="sm" mb="md">
        Join us for the biggest design conference of the year featuring speakers from top tech companies.
      </Text>

      <Divider my="md" />

      <Group justify="space-between">
        <Group gap="xs">
          <IconClock size={16} />
          <Text size="sm">Mar 15, 2024</Text>
        </Group>
        <Group gap="xs">
          <IconUser size={16} />
          <Text size="sm">250 attending</Text>
        </Group>
      </Group>

      <Button variant="light" fullWidth mt="md" radius="md">
        Register Now
      </Button>
    </Card>
  )
}

export default function ApplicationCards() {
  return (
    <Page title="Application Cards">
      <PageHeader
        title="Application Cards"
      />
      
      <Container size="xl" mt="xl">
        <Stack gap="xl">
          <div>
            <Title order={4} mb="md">Project Cards</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Cards designed for displaying project information, progress, and team members.
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </SimpleGrid>
          </div>

          <div>
            <Title order={4} mb="md">User Profile Cards</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Profile cards for showcasing user information and statistics.
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
              <UserProfileCard />
              <UserProfileCard />
              <UserProfileCard />
              <UserProfileCard />
            </SimpleGrid>
          </div>

          <div>
            <Title order={4} mb="md">Analytics Cards</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Data visualization cards for displaying metrics and analytics.
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
              <AnalyticsCard />
              <AnalyticsCard />
              <AnalyticsCard />
              <AnalyticsCard />
            </SimpleGrid>
          </div>

          <div>
            <Title order={4} mb="md">Social Cards</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Social media style cards for posts and interactions.
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
              <SocialCard />
              <SocialCard />
            </SimpleGrid>
          </div>

          <div>
            <Title order={4} mb="md">Product Cards</Title>
            <Text size="sm" c="dimmed" mb="lg">
              E-commerce style cards for products with pricing and ratings.
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </SimpleGrid>
          </div>

          <div>
            <Title order={4} mb="md">Event Cards</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Event and activity cards with date, location, and attendance information.
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
              <EventCard />
              <EventCard />
              <EventCard />
            </SimpleGrid>
          </div>
        </Stack>
      </Container>
    </Page>
  )
}