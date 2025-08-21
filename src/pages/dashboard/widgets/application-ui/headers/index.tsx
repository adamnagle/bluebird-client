import { useState } from 'react'
import {
  IconChevronDown,
  IconHeart,
  IconLogout,
  IconMessage,
  IconPlayerPause,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
  IconTrash,
} from '@tabler/icons-react'
import cx from 'clsx'
import {
  Container,
  Title,
  Text,
  Burger,
  Group,
  Menu,
  Center,
  Avatar,
  UnstyledButton,
  Tabs,
  useMantineTheme,
  Anchor
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Page, PageHeader } from '@/components'
import classes from './headers.module.css'

function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState('/about')

  const links = [
    { link: '/about', label: 'Features' },
    { link: '/pricing', label: 'Pricing' },
    { link: '/learn', label: 'Learn' },
    { link: '/community', label: 'Community' },
  ]

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault()
        setActive(link.link)
      }}
    >
      {link.label}
    </a>
  ))

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <div style={{ width: 28, height: 28, backgroundColor: '#228be6', borderRadius: 4 }} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  )
}

function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false)

  const links = [
    { link: '/about', label: 'Features' },
    {
      link: '#1',
      label: 'Learn',
      links: [
        { link: '/docs', label: 'Documentation' },
        { link: '/resources', label: 'Resources' },
        { link: '/community', label: 'Community' },
        { link: '/blog', label: 'Blog' },
      ],
    },
    { link: '/about', label: 'About' },
    { link: '/pricing', label: 'Pricing' },
    {
      link: '#2',
      label: 'Support',
      links: [
        { link: '/faq', label: 'FAQ' },
        { link: '/demo', label: 'Book a demo' },
        { link: '/forums', label: 'Forums' },
      ],
    },
  ]

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ))

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    )
  })

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <div style={{ width: 28, height: 28, backgroundColor: '#228be6', borderRadius: 4 }} />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  )
}

function HeaderTabs() {
  const theme = useMantineTheme()
  const [opened, { toggle }] = useDisclosure(false)
  const [userMenuOpened, setUserMenuOpened] = useState(false)

  const user = {
    name: 'Jane Spoonfighter',
    email: 'janspoon@fighter.dev',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
  }

  const tabs = [
    'Home',
    'Orders',
    'Education',
    'Community',
    'Forums',
    'Support',
    'Account',
    'Helpdesk',
  ]

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ))

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Group justify="space-between">
          <div style={{ width: 28, height: 28, backgroundColor: '#228be6', borderRadius: 4 }} />

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />

          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group gap={7}>
                  <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                  <Text fw={500} size="sm" lh={1} mr={3}>
                    {user.name}
                  </Text>
                  <IconChevronDown size={12} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                leftSection={<IconHeart size={16} color={theme.colors.red[6]} stroke={1.5} />}
              >
                Liked posts
              </Menu.Item>
              <Menu.Item
                leftSection={<IconStar size={16} color={theme.colors.yellow[6]} stroke={1.5} />}
              >
                Saved posts
              </Menu.Item>
              <Menu.Item
                leftSection={<IconMessage size={16} color={theme.colors.blue[6]} stroke={1.5} />}
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
      </Container>
      <Container size="md">
        <Tabs
          defaultValue="Home"
          variant="outline"
          visibleFrom="sm"
          classNames={{
            root: classes.tabs,
            list: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </div>
  )
}

export default function Headers() {
  return (
    <Page title="Headers">
      <PageHeader
        title="Headers"
      />
      
      <Container size="xl" mt="xl">
        <Text size="sm" c="dimmed" mb="lg">
          Header components with various styles and configurations.
        </Text>

        <Title order={3} mb="md">Simple Header</Title>
        <Text size="sm" c="dimmed" mb="lg">Basic header with navigation links</Text>
        <HeaderSimple />

        <Title order={3} mb="md" mt="xl">Header with Menu</Title>
        <Text size="sm" c="dimmed" mb="lg">Header with dropdown menu navigation</Text>
        <HeaderMenu />

        <Title order={3} mb="md" mt="xl">Header with Tabs</Title>
        <Text size="sm" c="dimmed" mb="lg">Header with tab navigation and user menu</Text>
        <HeaderTabs />
      </Container>
    </Page>
  )
}