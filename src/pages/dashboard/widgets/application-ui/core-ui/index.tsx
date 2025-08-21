import { 
  Avatar,
  Badge,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  Tooltip,
  SimpleGrid,
  Center,
  Box,
  ThemeIcon,
  ActionIcon,
  Image,
  Flex
} from '@mantine/core'
import { 
  IconHeart,
  IconStar,
  IconDownload,
  IconShare,
  IconBookmark,
  IconThumbUp,
  IconBell,
  IconSettings,
  IconUser,
  IconCheck,
  IconX,
  IconPlus
} from '@tabler/icons-react'
import { Page, PageHeader } from '@/components'
import classes from './index.module.css'

// 1. Button Variants Component
function ButtonVariants() {
  return (
    <div>
      <Title order={4} mb="md">Button Variants</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Various button styles and states for different use cases and interactions.
      </Text>
      
      <Stack gap="md">
        <Group gap="md">
          <Button variant="filled">Filled Button</Button>
          <Button variant="light">Light Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="subtle">Subtle Button</Button>
          <Button variant="transparent">Transparent</Button>
        </Group>
        
        <Group gap="md">
          <Button color="blue">Primary</Button>
          <Button color="green">Success</Button>
          <Button color="red">Danger</Button>
          <Button color="yellow">Warning</Button>
          <Button color="gray">Secondary</Button>
        </Group>
        
        <Group gap="md">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </Group>
        
        <Group gap="md">
          <Button leftSection={<IconDownload size={16} />}>Download</Button>
          <Button rightSection={<IconShare size={16} />}>Share</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </Group>
      </Stack>
    </div>
  )
}

// 2. Badge Components
function BadgeComponents() {
  return (
    <div>
      <Title order={4} mb="md">Badge Components</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Small status indicators and labels for categorization and highlighting.
      </Text>
      
      <Stack gap="md">
        <Group gap="md">
          <Badge>Default</Badge>
          <Badge variant="light">Light</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="dot">Dot Badge</Badge>
          <Badge variant="transparent">Transparent</Badge>
        </Group>
        
        <Group gap="md">
          <Badge color="blue">Primary</Badge>
          <Badge color="green">Success</Badge>
          <Badge color="red">Error</Badge>
          <Badge color="yellow">Warning</Badge>
          <Badge color="violet">Info</Badge>
        </Group>
        
        <Group gap="md">
          <Badge size="xs">Extra Small</Badge>
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
          <Badge size="xl">Extra Large</Badge>
        </Group>
        
        <Group gap="md">
          <Badge leftSection={<IconStar size={12} />}>Featured</Badge>
          <Badge rightSection={<IconCheck size={12} />}>Verified</Badge>
          <Badge circle>42</Badge>
          <Badge variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>Gradient</Badge>
        </Group>
      </Stack>
    </div>
  )
}

// 3. Card Components
function CardComponents() {
  return (
    <div>
      <Title order={4} mb="md">Card Components</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Versatile container components for organizing and displaying content.
      </Text>
      
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group justify="space-between" mb="xs">
            <Text fw={500}>Simple Card</Text>
            <ActionIcon variant="subtle" color="gray">
              <IconBookmark size={16} />
            </ActionIcon>
          </Group>
          
          <Text size="sm" c="dimmed" mb="md">
            A basic card component with minimal styling and content organization.
          </Text>
          
          <Group gap="xs">
            <Button size="xs" variant="light">Learn More</Button>
            <Button size="xs" variant="outline">Share</Button>
          </Group>
        </Card>

        <Card shadow="md" padding="xl" radius="lg" className={classes.card}>
          <Center>
            <ThemeIcon size={60} radius="xl" variant="light" color="blue">
              <IconUser size={30} />
            </ThemeIcon>
          </Center>
          
          <Text ta="center" fw={500} mt="md">
            Profile Card
          </Text>
          
          <Text ta="center" size="sm" c="dimmed" mt="sm">
            Enhanced card with centered content and custom styling
          </Text>
          
          <Button fullWidth mt="md" radius="xl">
            View Profile
          </Button>
        </Card>
      </SimpleGrid>
    </div>
  )
}

// 4. Chip Components
function ChipComponents() {
  return (
    <div>
      <Title order={4} mb="md">Chip Components</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Interactive tags and filters for selection and categorization.
      </Text>
      
      <Stack gap="md">
        <Group gap="md">
          <Chip defaultChecked>Default Chip</Chip>
          <Chip variant="outline">Outline Chip</Chip>
          <Chip variant="light">Light Chip</Chip>
          <Chip variant="filled">Filled Chip</Chip>
        </Group>
        
        <Group gap="md">
          <Chip color="blue">Technology</Chip>
          <Chip color="green">Environment</Chip>
          <Chip color="red">Urgent</Chip>
          <Chip color="violet">Design</Chip>
          <Chip color="orange">Marketing</Chip>
        </Group>
        
        <Group gap="md">
          <Chip size="xs">Extra Small</Chip>
          <Chip size="sm">Small</Chip>
          <Chip size="md">Medium</Chip>
          <Chip size="lg">Large</Chip>
          <Chip size="xl">Extra Large</Chip>
        </Group>
        
        <Chip.Group multiple>
          <Group gap="md">
            <Chip value="react">React</Chip>
            <Chip value="typescript">TypeScript</Chip>
            <Chip value="mantine">Mantine</Chip>
            <Chip value="vite">Vite</Chip>
          </Group>
        </Chip.Group>
      </Stack>
    </div>
  )
}

// 5. Divider Components
function DividerComponents() {
  return (
    <div>
      <Title order={4} mb="md">Divider Components</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Visual separators for organizing content and improving layout structure.
      </Text>
      
      <Stack gap="xl">
        <div>
          <Text size="sm" c="dimmed" mb="md">Basic Dividers</Text>
          <Stack gap="md">
            <Text>Content above divider</Text>
            <Divider />
            <Text>Content below divider</Text>
            <Divider variant="dashed" />
            <Text>Content with dashed divider</Text>
            <Divider variant="dotted" />
            <Text>Content with dotted divider</Text>
          </Stack>
        </div>
        
        <div>
          <Text size="sm" c="dimmed" mb="md">Labeled Dividers</Text>
          <Stack gap="md">
            <Divider label="Section 1" labelPosition="left" />
            <Divider label="Center Label" labelPosition="center" />
            <Divider label="Section 2" labelPosition="right" />
            <Divider label={<IconStar size={16} />} labelPosition="center" />
          </Stack>
        </div>
        
        <div>
          <Text size="sm" c="dimmed" mb="md">Vertical Dividers</Text>
          <Group gap="md">
            <Text>Left content</Text>
            <Divider orientation="vertical" />
            <Text>Middle content</Text>
            <Divider orientation="vertical" />
            <Text>Right content</Text>
          </Group>
        </div>
      </Stack>
    </div>
  )
}

// 6. Tooltip Components
function TooltipComponents() {
  return (
    <div>
      <Title order={4} mb="md">Tooltip Components</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Contextual information and help text displayed on hover or focus.
      </Text>
      
      <Stack gap="md">
        <Group gap="md">
          <Tooltip label="This is a basic tooltip">
            <Button variant="outline">Basic Tooltip</Button>
          </Tooltip>
          
          <Tooltip label="Tooltip with arrow" withArrow>
            <Button variant="outline">With Arrow</Button>
          </Tooltip>
          
          <Tooltip label="Tooltip with delay" openDelay={500}>
            <Button variant="outline">With Delay</Button>
          </Tooltip>
        </Group>
        
        <Group gap="md">
          <Tooltip label="Top position" position="top">
            <Button variant="light">Top</Button>
          </Tooltip>
          
          <Tooltip label="Right position" position="right">
            <Button variant="light">Right</Button>
          </Tooltip>
          
          <Tooltip label="Bottom position" position="bottom">
            <Button variant="light">Bottom</Button>
          </Tooltip>
          
          <Tooltip label="Left position" position="left">
            <Button variant="light">Left</Button>
          </Tooltip>
        </Group>
        
        <Group gap="md">
          <Tooltip
            multiline
            w={220}
            withArrow
            label="This is a multiline tooltip with a lot of content that wraps to multiple lines"
          >
            <Button variant="outline">Multiline Tooltip</Button>
          </Tooltip>
          
          <Tooltip
            label="Custom styled tooltip"
            color="violet"
            withArrow
          >
            <Button variant="outline">Custom Color</Button>
          </Tooltip>
        </Group>
      </Stack>
    </div>
  )
}

// 7. Avatar Components
function AvatarComponents() {
  return (
    <div>
      <Title order={4} mb="md">Avatar Components</Title>
      <Text size="sm" c="dimmed" mb="lg">
        User profile images and placeholder icons for representing people.
      </Text>
      
      <Stack gap="md">
        <Group gap="md">
          <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80" alt="John Doe" />
          <Avatar radius="xl" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80" alt="Jane Smith" />
          <Avatar src={null} alt="No Image" color="blue">JD</Avatar>
          <Avatar src={null} alt="No Image" color="red">AB</Avatar>
        </Group>
        
        <Group gap="md">
          <Avatar size="xs">XS</Avatar>
          <Avatar size="sm">SM</Avatar>
          <Avatar size="md">MD</Avatar>
          <Avatar size="lg">LG</Avatar>
          <Avatar size="xl">XL</Avatar>
        </Group>
        
        <Group gap="md">
          <Avatar color="blue">BL</Avatar>
          <Avatar color="green">GR</Avatar>
          <Avatar color="red">RD</Avatar>
          <Avatar color="yellow">YL</Avatar>
          <Avatar color="violet">VI</Avatar>
        </Group>
        
        <Group gap="md">
          <Avatar.Group spacing="sm">
            <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80" radius="xl" />
            <Avatar src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80" radius="xl" />
            <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80" radius="xl" />
            <Avatar radius="xl">+5</Avatar>
          </Avatar.Group>
        </Group>
      </Stack>
    </div>
  )
}

// 8. Paper Components
function PaperComponents() {
  return (
    <div>
      <Title order={4} mb="md">Paper Components</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Container components with customizable backgrounds and shadows.
      </Text>
      
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Paper shadow="xs" p="md" withBorder>
          <Text fw={500} mb="md">Basic Paper</Text>
          <Text size="sm">
            A simple paper component with border and subtle shadow for content organization.
          </Text>
        </Paper>
        
        <Paper shadow="md" p="lg" radius="lg">
          <Text fw={500} mb="md">Enhanced Paper</Text>
          <Text size="sm">
            Paper with medium shadow and larger radius for more prominent content.
          </Text>
        </Paper>
        
        <Paper shadow="lg" p="xl" radius="xl" bg="var(--mantine-color-blue-light)">
          <Text fw={500} mb="md">Colored Paper</Text>
          <Text size="sm">
            Paper with custom background color and large shadow for emphasis.
          </Text>
        </Paper>
        
        <Paper shadow="xl" p="md" radius="md" className={classes.gradientPaper}>
          <Text fw={500} mb="md" c="white">Gradient Paper</Text>
          <Text size="sm" c="white">
            Paper with gradient background and custom styling via CSS modules.
          </Text>
        </Paper>
      </SimpleGrid>
    </div>
  )
}

export default function CoreUI() {
  return (
    <Page title="Core UI Components">
      <PageHeader
        title="Core UI Components"
      />
      
      <Container size="xl" mt="xl">
        <Stack gap="xl">
          <ButtonVariants />
          <BadgeComponents />
          <CardComponents />
          <ChipComponents />
          <DividerComponents />
          <TooltipComponents />
          <AvatarComponents />
          <PaperComponents />
        </Stack>
      </Container>
    </Page>
  )
}