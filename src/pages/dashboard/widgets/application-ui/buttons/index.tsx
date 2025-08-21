import { useState } from 'react'
import { 
  Button,
  Group,
  Menu,
  Text,
  useMantineTheme,
  ActionIcon,
  Tooltip,
  Progress,
  rgba,
  Stack,
  Title,
  SimpleGrid,
  Container
} from '@mantine/core'
import { 
  IconChevronDown,
  IconPackage,
  IconSquareCheck,
  IconUsers,
  IconCalendar,
  IconBookmark,
  IconTrash,
  IconCheck,
  IconCopy,
  IconDownload,
  IconShare,
  IconHeart,
  IconStar
} from '@tabler/icons-react'
import { useClipboard, useInterval } from '@mantine/hooks'
import { Page, PageHeader } from '@/components'
import classes from './buttons.module.css'

// 1. Button with Menu
function ButtonMenu() {
  const theme = useMantineTheme()
  return (
    <Menu
      transitionProps={{ transition: 'pop-top-right' }}
      position="top-end"
      width={220}
      withinPortal
      radius="md"
    >
      <Menu.Target>
        <Button rightSection={<IconChevronDown size={18} stroke={1.5} />} pr={12} radius="md">
          Create new
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={<IconPackage size={16} color={theme.colors.blue[6]} stroke={1.5} />}
          rightSection={
            <Text size="xs" tt="uppercase" fw={700} c="dimmed">
              Ctrl + P
            </Text>
          }
        >
          Project
        </Menu.Item>
        <Menu.Item
          leftSection={<IconSquareCheck size={16} color={theme.colors.pink[6]} stroke={1.5} />}
          rightSection={
            <Text size="xs" tt="uppercase" fw={700} c="dimmed">
              Ctrl + T
            </Text>
          }
        >
          Task
        </Menu.Item>
        <Menu.Item
          leftSection={<IconUsers size={16} color={theme.colors.cyan[6]} stroke={1.5} />}
          rightSection={
            <Text size="xs" tt="uppercase" fw={700} c="dimmed">
              Ctrl + U
            </Text>
          }
        >
          Team
        </Menu.Item>
        <Menu.Item
          leftSection={<IconCalendar size={16} color={theme.colors.violet[6]} stroke={1.5} />}
          rightSection={
            <Text size="xs" tt="uppercase" fw={700} c="dimmed">
              Ctrl + E
            </Text>
          }
        >
          Event
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

// 2. Split Button
function SplitButton() {
  const theme = useMantineTheme()

  return (
    <Group wrap="nowrap" gap={0}>
      <Button className={classes.button}>Send</Button>
      <Menu transitionProps={{ transition: 'pop' }} position="bottom-end" withinPortal>
        <Menu.Target>
          <ActionIcon
            variant="filled"
            color={theme.primaryColor}
            size={36}
            className={classes.menuControl}
          >
            <IconChevronDown size={16} stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            leftSection={<IconCalendar size={16} stroke={1.5} color={theme.colors.blue[5]} />}
          >
            Schedule for later
          </Menu.Item>
          <Menu.Item
            leftSection={<IconBookmark size={16} stroke={1.5} color={theme.colors.blue[5]} />}
          >
            Save draft
          </Menu.Item>
          <Menu.Item
            leftSection={<IconTrash size={16} stroke={1.5} color={theme.colors.blue[5]} />}
          >
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  )
}

// 3. Button with Copy
function ButtonCopy() {
  const clipboard = useClipboard()
  return (
    <Tooltip
      label="Link copied!"
      offset={5}
      position="bottom"
      radius="xl"
      transitionProps={{ duration: 100, transition: 'slide-down' }}
      opened={clipboard.copied}
    >
      <Button
        variant="light"
        rightSection={
          clipboard.copied ? (
            <IconCheck size={20} stroke={1.5} />
          ) : (
            <IconCopy size={20} stroke={1.5} />
          )
        }
        radius="xl"
        size="md"
        pr={14}
        h={48}
        styles={{ section: { marginLeft: 22 } }}
        onClick={() => clipboard.copy('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
      >
        Copy link to clipboard
      </Button>
    </Tooltip>
  )
}

// 4. Button with Progress
function ButtonProgress() {
  const theme = useMantineTheme()
  const [progress, setProgress] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const interval = useInterval(
    () =>
      setProgress((current) => {
        if (current < 100) {
          return current + 1
        }

        interval.stop()
        setLoaded(true)
        return 0
      }),
    20
  )

  return (
    <Button
      fullWidth
      className={classes.progressButton}
      onClick={() => (loaded ? setLoaded(false) : !interval.active && interval.start())}
      color={loaded ? 'teal' : theme.primaryColor}
      radius="md"
    >
      <div className={classes.label}>
        {progress !== 0 ? 'Uploading files' : loaded ? 'Files uploaded' : 'Upload files'}
      </div>
      {progress !== 0 && (
        <Progress
          value={progress}
          className={classes.progress}
          color={rgba(theme.colors.blue[2], 0.35)}
          radius="sm"
        />
      )}
    </Button>
  )
}

// 5. Button Variants
function ButtonVariants() {
  return (
    <div>
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

// 6. Gradient Buttons
function GradientButtons() {
  return (
    <Group gap="md">
      <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
        Blue to Cyan
      </Button>
      <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
        Teal to Lime
      </Button>
      <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
        Teal to Blue
      </Button>
      <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
        Orange to Red
      </Button>
      <Button variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}>
        Grape to Pink
      </Button>
    </Group>
  )
}

// 7. Icon Buttons
function IconButtons() {
  return (
    <Group gap="md">
      <ActionIcon variant="filled" color="blue" size="lg">
        <IconHeart size={20} />
      </ActionIcon>
      <ActionIcon variant="light" color="red" size="lg">
        <IconHeart size={20} />
      </ActionIcon>
      <ActionIcon variant="outline" color="teal" size="lg">
        <IconStar size={20} />
      </ActionIcon>
      <ActionIcon variant="subtle" color="violet" size="lg">
        <IconDownload size={20} />
      </ActionIcon>
      <ActionIcon variant="transparent" color="gray" size="lg">
        <IconShare size={20} />
      </ActionIcon>
    </Group>
  )
}

// 8. Floating Action Buttons
function FloatingActionButtons() {
  return (
    <div style={{ position: 'relative', height: 200, background: 'var(--mantine-color-gray-0)', borderRadius: 8 }}>
      <ActionIcon
        size="xl"
        variant="filled"
        color="blue"
        className={classes.fab}
        style={{ position: 'absolute', bottom: 16, right: 16 }}
      >
        <IconDownload size={24} />
      </ActionIcon>
      <ActionIcon
        size="lg"
        variant="filled"
        color="teal"
        className={classes.fabSecondary}
        style={{ position: 'absolute', bottom: 84, right: 16 }}
      >
        <IconShare size={20} />
      </ActionIcon>
    </div>
  )
}

export default function Buttons() {
  return (
    <Page title="Buttons">
      <PageHeader
        title="Buttons"
      />
      
      <Container size="xl" mt="xl">
        <Stack gap="xl">
          <div>
            <Title order={3} mb="md">Button Variants</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Various button styles, sizes, colors, and states for different use cases and interactions.
            </Text>
            <ButtonVariants />
          </div>

          <div>
            <Title order={3} mb="md">Button with Menu</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Button that opens a dropdown menu with multiple action options and keyboard shortcuts.
            </Text>
            <ButtonMenu />
          </div>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <div>
              <Title order={3} mb="md">Split Button</Title>
              <Text size="sm" c="dimmed" mb="lg">
                Combined button with primary action and dropdown for secondary options.
              </Text>
              <SplitButton />
            </div>

            <div>
              <Title order={3} mb="md">Copy Button</Title>
              <Text size="sm" c="dimmed" mb="lg">
                Button with clipboard functionality and visual feedback tooltip.
              </Text>
              <ButtonCopy />
            </div>
          </SimpleGrid>

          <div>
            <Title order={3} mb="md">Button with Progress</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Interactive button that shows progress bar during file upload or processing.
            </Text>
            <div style={{ maxWidth: 300 }}>
              <ButtonProgress />
            </div>
          </div>

          <div>
            <Title order={3} mb="md">Gradient Buttons</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Eye-catching buttons with gradient backgrounds and various color combinations.
            </Text>
            <GradientButtons />
          </div>

          <div>
            <Title order={3} mb="md">Icon Buttons</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Compact action buttons with icons for toolbar and interface controls.
            </Text>
            <IconButtons />
          </div>

          <div>
            <Title order={3} mb="md">Floating Action Buttons</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Prominent circular buttons that float above content for primary actions.
            </Text>
            <FloatingActionButtons />
          </div>
        </Stack>
      </Container>
    </Page>
  )
}