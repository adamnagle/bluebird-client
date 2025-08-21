import { useState } from 'react'
import {
  Burger,
  Container,
  Group,
  Code,
  Menu,
  Center,
  SegmentedControl,
  Text,
  Title,
  Tooltip,
  UnstyledButton,
  Stack,
  SimpleGrid,
  Paper
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  Icon2fa,
  IconBellRinging,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconLogout,
  IconReceipt2,
  IconSettings,
  IconSwitchHorizontal,
  IconChevronDown,
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconGauge,
  IconHome2,
  IconUser,
  IconShoppingCart,
  IconLicense,
  IconMessage2,
  IconMessages,
  IconUsers,
  IconReceiptRefund,
  IconFileAnalytics
} from '@tabler/icons-react'
import { Page, PageHeader } from '@/components'

// Logo placeholder component
function LogoPlaceholder({ size = 28 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #228be6, #339af0)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: size * 0.4
      }}
    >
      M
    </div>
  )
}

// 1. Simple Navbar Component
const navbarData = [
  { link: '', label: 'Notifications', icon: IconBellRinging },
  { link: '', label: 'Billing', icon: IconReceipt2 },
  { link: '', label: 'Security', icon: IconFingerprint },
  { link: '', label: 'SSH Keys', icon: IconKey },
  { link: '', label: 'Databases', icon: IconDatabaseImport },
  { link: '', label: 'Authentication', icon: Icon2fa },
  { link: '', label: 'Other Settings', icon: IconSettings },
]

function NavbarSimple() {
  const [active, setActive] = useState('Billing')

  const links = navbarData.map((item) => (
    <a
      key={item.label}
      href={item.link}
      style={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: 'var(--mantine-font-size-sm)',
        color: active === item.label ? 'var(--mantine-primary-color-filled)' : 'var(--mantine-color-text)',
        padding: '8px 12px',
        borderRadius: 'var(--mantine-radius-sm)',
        fontWeight: 500,
        backgroundColor: active === item.label ? 'var(--mantine-primary-color-light)' : 'transparent'
      }}
      onClick={(event) => {
        event.preventDefault()
        setActive(item.label)
      }}
    >
      <item.icon size={16} stroke={1.5} style={{ marginRight: 12 }} />
      <span>{item.label}</span>
    </a>
  ))

  return (
    <Paper withBorder p="md" style={{ width: 300, height: 400 }}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Group justify="space-between" mb="md" pb="xs" style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}>
          <LogoPlaceholder size={28} />
          <Code fw={700}>v3.1.2</Code>
        </Group>
        
        <div style={{ flex: 1 }}>
          <Stack gap="xs">
            {links}
          </Stack>
        </div>

        <div style={{ borderTop: '1px solid var(--mantine-color-gray-3)', paddingTop: 12 }}>
          <Stack gap="xs">
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                fontSize: 'var(--mantine-font-size-sm)',
                color: 'var(--mantine-color-text)',
                padding: '8px 12px',
                borderRadius: 'var(--mantine-radius-sm)',
                fontWeight: 500
              }}
              onClick={(event) => event.preventDefault()}
            >
              <IconSwitchHorizontal size={16} stroke={1.5} style={{ marginRight: 12 }} />
              <span>Change account</span>
            </a>
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                fontSize: 'var(--mantine-font-size-sm)',
                color: 'var(--mantine-color-text)',
                padding: '8px 12px',
                borderRadius: 'var(--mantine-radius-sm)',
                fontWeight: 500
              }}
              onClick={(event) => event.preventDefault()}
            >
              <IconLogout size={16} stroke={1.5} style={{ marginRight: 12 }} />
              <span>Logout</span>
            </a>
          </Stack>
        </div>
      </div>
    </Paper>
  )
}

// 2. Simple Header Component
const headerLinks = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
]

function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState(headerLinks[0].link)

  const items = headerLinks.map((link) => (
    <a
      key={link.label}
      href={link.link}
      style={{
        textDecoration: 'none',
        color: active === link.link ? 'var(--mantine-primary-color-filled)' : 'var(--mantine-color-text)',
        fontWeight: 500,
        fontSize: 'var(--mantine-font-size-sm)',
        padding: '8px 12px',
        borderRadius: 'var(--mantine-radius-sm)',
        display: 'block'
      }}
      onClick={(event) => {
        event.preventDefault()
        setActive(link.link)
      }}
    >
      {link.label}
    </a>
  ))

  return (
    <Paper withBorder p="md">
      <Container size="md">
        <Group justify="space-between">
          <LogoPlaceholder size={28} />
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Group>
      </Container>
    </Paper>
  )
}

// 3. Header with Menu Component
const menuLinks = [
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

function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false)

  const items = menuLinks.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ))

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              style={{
                textDecoration: 'none',
                color: 'var(--mantine-color-text)',
                fontWeight: 500,
                fontSize: 'var(--mantine-font-size-sm)',
                padding: '8px 12px',
                borderRadius: 'var(--mantine-radius-sm)',
                display: 'flex',
                alignItems: 'center'
              }}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span style={{ marginRight: 4 }}>{link.label}</span>
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
        style={{
          textDecoration: 'none',
          color: 'var(--mantine-color-text)',
          fontWeight: 500,
          fontSize: 'var(--mantine-font-size-sm)',
          padding: '8px 12px',
          borderRadius: 'var(--mantine-radius-sm)'
        }}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    )
  })

  return (
    <Paper withBorder p="md">
      <Container size="md">
        <Group justify="space-between">
          <LogoPlaceholder size={28} />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </Group>
      </Container>
    </Paper>
  )
}

// 4. Segmented Navbar Component
const tabs = {
  account: [
    { link: '', label: 'Notifications', icon: IconBellRinging },
    { link: '', label: 'Billing', icon: IconReceipt2 },
    { link: '', label: 'Security', icon: IconFingerprint },
    { link: '', label: 'SSH Keys', icon: IconKey },
    { link: '', label: 'Databases', icon: IconDatabaseImport },
    { link: '', label: 'Authentication', icon: Icon2fa },
    { link: '', label: 'Other Settings', icon: IconSettings },
  ],
  general: [
    { link: '', label: 'Orders', icon: IconShoppingCart },
    { link: '', label: 'Receipts', icon: IconLicense },
    { link: '', label: 'Reviews', icon: IconMessage2 },
    { link: '', label: 'Messages', icon: IconMessages },
    { link: '', label: 'Customers', icon: IconUsers },
    { link: '', label: 'Refunds', icon: IconReceiptRefund },
    { link: '', label: 'Files', icon: IconFileAnalytics },
  ],
}

function NavbarSegmented() {
  const [section, setSection] = useState<'account' | 'general'>('account')
  const [active, setActive] = useState('Billing')

  const links = tabs[section].map((item) => (
    <a
      key={item.label}
      href={item.link}
      style={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: 'var(--mantine-font-size-sm)',
        color: active === item.label ? 'var(--mantine-primary-color-filled)' : 'var(--mantine-color-text)',
        padding: '8px 12px',
        borderRadius: 'var(--mantine-radius-sm)',
        fontWeight: 500,
        backgroundColor: active === item.label ? 'var(--mantine-primary-color-light)' : 'transparent'
      }}
      onClick={(event) => {
        event.preventDefault()
        setActive(item.label)
      }}
    >
      <item.icon size={16} stroke={1.5} style={{ marginRight: 12 }} />
      <span>{item.label}</span>
    </a>
  ))

  return (
    <Paper withBorder p="md" style={{ width: 300, height: 500 }}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div>
          <Text fw={500} size="sm" c="dimmed" mb="xs">
            bgluesticker@mantine.dev
          </Text>

          <SegmentedControl
            value={section}
            onChange={(value: any) => setSection(value)}
            transitionTimingFunction="ease"
            fullWidth
            data={[
              { label: 'Account', value: 'account' },
              { label: 'System', value: 'general' },
            ]}
            mb="md"
          />
        </div>

        <div style={{ flex: 1 }}>
          <Stack gap="xs">
            {links}
          </Stack>
        </div>

        <div style={{ borderTop: '1px solid var(--mantine-color-gray-3)', paddingTop: 12 }}>
          <Stack gap="xs">
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                fontSize: 'var(--mantine-font-size-sm)',
                color: 'var(--mantine-color-text)',
                padding: '8px 12px',
                borderRadius: 'var(--mantine-radius-sm)',
                fontWeight: 500
              }}
              onClick={(event) => event.preventDefault()}
            >
              <IconSwitchHorizontal size={16} stroke={1.5} style={{ marginRight: 12 }} />
              <span>Change account</span>
            </a>
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                fontSize: 'var(--mantine-font-size-sm)',
                color: 'var(--mantine-color-text)',
                padding: '8px 12px',
                borderRadius: 'var(--mantine-radius-sm)',
                fontWeight: 500
              }}
              onClick={(event) => event.preventDefault()}
            >
              <IconLogout size={16} stroke={1.5} style={{ marginRight: 12 }} />
              <span>Logout</span>
            </a>
          </Stack>
        </div>
      </div>
    </Paper>
  )
}

export default function Navigation() {
  return (
    <Page title="Navigation">
      <PageHeader
        title="Navigation"
      />
      
      <Stack gap="xl" mt="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <div>
            <Title order={3} mb="md">Simple Header</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Clean horizontal header with logo, navigation links, and mobile burger menu.
            </Text>
            <HeaderSimple />
          </div>

          <div>
            <Title order={3} mb="md">Header with Dropdown Menu</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Header navigation with dropdown menus for organized link grouping.
            </Text>
            <HeaderMenu />
          </div>
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <div>
            <Title order={3} mb="md">Simple Sidebar</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Vertical sidebar navigation with icons, labels, and footer actions.
            </Text>
            <NavbarSimple />
          </div>

          <div>
            <Title order={3} mb="md">Segmented Sidebar</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Advanced sidebar with segmented control to switch between navigation sections.
            </Text>
            <NavbarSegmented />
          </div>
        </SimpleGrid>
      </Stack>
    </Page>
  )
}