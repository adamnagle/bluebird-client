import { IconChevronRight, IconAt, IconPhoneCall, IconDots, IconHeart, IconLogout, IconMessage, IconPlayerPause, IconSettings, IconStar, IconSwitchHorizontal, IconTrash } from '@tabler/icons-react'
import { Container, Title, Text, SimpleGrid, Avatar, Group, UnstyledButton, Card, Button, Paper, ActionIcon, Menu, useMantineTheme } from '@mantine/core'
import { Page, PageHeader } from '@/components'
import classes from './user-info.module.css'

function UserButton() {
  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            Harriette Spoonlicker
          </Text>

          <Text c="dimmed" size="xs">
            hspoonlicker@outlook.com
          </Text>
        </div>

        <IconChevronRight size={14} stroke={1.5} />
      </Group>
    </UnstyledButton>
  )
}

function UserCardImage() {
  const stats = [
    { value: '34K', label: 'Followers' },
    { value: '187', label: 'Follows' },
    { value: '1.6K', label: 'Posts' },
  ]

  const items = stats.map((stat) => (
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
    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <Card.Section
        h={140}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
        }}
      />
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
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

function UserInfoAction() {
  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        size={120}
        radius={120}
        mx="auto"
      />
      <Text ta="center" fz="lg" fw={500} mt="md">
        Jane Fingerlicker
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        jfingerlicker@me.io • Art director
      </Text>

      <Button variant="default" fullWidth mt="md">
        Send message
      </Button>
    </Paper>
  )
}

function UserInfoIcons() {
  return (
    <div>
      <Group wrap="nowrap">
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          size={94}
          radius="md"
        />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Software engineer
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            Robert Glassbreaker
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size={16} className={classes.icon} />
            <Text fz="xs" c="dimmed">
              robert@glassbreaker.io
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size={16} className={classes.icon} />
            <Text fz="xs" c="dimmed">
              +11 (876) 890 56 23
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  )
}

function UserMenu() {
  const theme = useMantineTheme()
  return (
    <Group justify="center">
      <Menu
        withArrow
        width={300}
        position="bottom"
        transitionProps={{ transition: 'pop' }}
        withinPortal
      >
        <Menu.Target>
          <ActionIcon variant="default">
            <IconDots size={16} stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item rightSection={<IconChevronRight size={16} stroke={1.5} />}>
            <Group>
              <Avatar
                radius="xl"
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
              />

              <div>
                <Text fw={500}>Nancy Eggshacker</Text>
                <Text size="xs" c="dimmed">
                  neggshaker@mantine.dev
                </Text>
              </div>
            </Group>
          </Menu.Item>

          <Menu.Divider />

          <Menu.Item leftSection={<IconHeart size={16} stroke={1.5} color={theme.colors.red[6]} />}>
            Liked posts
          </Menu.Item>
          <Menu.Item
            leftSection={<IconStar size={16} stroke={1.5} color={theme.colors.yellow[6]} />}
          >
            Saved posts
          </Menu.Item>
          <Menu.Item
            leftSection={<IconMessage size={16} stroke={1.5} color={theme.colors.blue[6]} />}
          >
            Your comments
          </Menu.Item>

          <Menu.Label>Settings</Menu.Label>
          <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
            Account settings
          </Menu.Item>
          <Menu.Item leftSection={<IconSwitchHorizontal size={16} stroke={1.5} />}>
            Change account
          </Menu.Item>
          <Menu.Item leftSection={<IconLogout size={16} stroke={1.5} />}>Logout</Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item leftSection={<IconPlayerPause size={16} stroke={1.5} />}>
            Pause subscription
          </Menu.Item>
          <Menu.Item color="red" leftSection={<IconTrash size={16} stroke={1.5} />}>
            Delete account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  )
}

export default function UserInfo() {
  return (
    <Page title="User Info">
      <PageHeader
        title="User Info"
      />
      
      <Container size="xl" mt="xl">
        <Text size="sm" c="dimmed" mb="lg">
          User information display components for profiles and user data.
        </Text>

        <Title order={3} mb="md">User Button</Title>
        <Text size="sm" c="dimmed" mb="lg">Clickable user card with avatar, name and email</Text>
        <UserButton />

        <Title order={3} mb="md" mt="xl">User Card with Image</Title>
        <Text size="sm" c="dimmed" mb="lg">User profile card with background image and stats</Text>
        <div style={{ maxWidth: 340, margin: '0 auto' }}>
          <UserCardImage />
        </div>

        <Title order={3} mb="md" mt="xl">User Info Action</Title>
        <Text size="sm" c="dimmed" mb="lg">Simple user profile with action button</Text>
        <div style={{ maxWidth: 240, margin: '0 auto' }}>
          <UserInfoAction />
        </div>

        <Title order={3} mb="md" mt="xl">User Info with Icons</Title>
        <Text size="sm" c="dimmed" mb="lg">User information display with contact details and icons</Text>
        <UserInfoIcons />

        <Title order={3} mb="md" mt="xl">User Menu</Title>
        <Text size="sm" c="dimmed" mb="lg">Dropdown menu with user profile and actions</Text>
        <UserMenu />
      </Container>
    </Page>
  )
}