import { useState } from 'react'
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
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconGauge,
  IconHome2,
  IconUser,
  IconFileAnalytics,
  IconLicense,
  IconMessage2,
  IconMessages,
  IconUsers,
  IconReceiptRefund,
  IconShoppingCart,
  IconChevronRight,
  IconBulb,
  IconCheckbox,
  IconSearch,
  IconPlus
} from '@tabler/icons-react'
import { 
  Container, 
  Title, 
  Text, 
  Code, 
  Group, 
  Center, 
  Stack, 
  Tooltip, 
  UnstyledButton, 
  SegmentedControl,
  Badge,
  Box,
  TextInput,
  ActionIcon,
  ThemeIcon,
  Collapse,
  Avatar
} from '@mantine/core'
import { Page, PageHeader } from '@/components'
import classes from './navbars.module.css'

function NavbarSimple() {
  const [active, setActive] = useState('Billing')

  const data = [
    { link: '', label: 'Notifications', icon: IconBellRinging },
    { link: '', label: 'Billing', icon: IconReceipt2 },
    { link: '', label: 'Security', icon: IconFingerprint },
    { link: '', label: 'SSH Keys', icon: IconKey },
    { link: '', label: 'Databases', icon: IconDatabaseImport },
    { link: '', label: 'Authentication', icon: Icon2fa },
    { link: '', label: 'Other Settings', icon: IconSettings },
  ]

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault()
        setActive(item.label)
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ))

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <div style={{ width: 28, height: 28, backgroundColor: '#228be6', borderRadius: 4 }} />
          <Code fw={700}>v3.1.2</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  )
}

function NavbarMinimal() {
  const [active, setActive] = useState(2)

  const mockdata = [
    { icon: IconHome2, label: 'Home' },
    { icon: IconGauge, label: 'Dashboard' },
    { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
    { icon: IconCalendarStats, label: 'Releases' },
    { icon: IconUser, label: 'Account' },
    { icon: IconFingerprint, label: 'Security' },
    { icon: IconSettings, label: 'Settings' },
  ]

  function NavbarLink({ icon: Icon, label, active, onClick }: any) {
    return (
      <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
        <UnstyledButton onClick={onClick} className={classes.minimalLink} data-active={active || undefined}>
          <Icon size={20} stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
    )
  }

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ))

  return (
    <nav className={classes.minimalNavbar}>
      <Center>
        <div style={{ width: 30, height: 30, backgroundColor: '#228be6', borderRadius: 4 }} />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack>
    </nav>
  )
}

function NavbarSegmented() {
  const [section, setSection] = useState<'account' | 'general'>('account')
  const [active, setActive] = useState('Billing')

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

  const links = tabs[section].map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault()
        setActive(item.label)
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ))

  return (
    <nav className={classes.navbar}>
      <div>
        <Text fw={500} size="sm" className={classes.title} c="dimmed" mb="xs">
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
        />
      </div>

      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  )
}

function NavbarWithSearch() {
  const links = [
    { icon: IconBulb, label: 'Activity', notifications: 3 },
    { icon: IconCheckbox, label: 'Tasks', notifications: 4 },
    { icon: IconUser, label: 'Contacts' },
  ]

  const collections = [
    { emoji: '👍', label: 'Sales' },
    { emoji: '🚚', label: 'Deliveries' },
    { emoji: '💸', label: 'Discounts' },
    { emoji: '💰', label: 'Profits' },
    { emoji: '✨', label: 'Reports' },
  ]

  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ))

  const collectionLinks = collections.map((collection) => (
    <a
      href="#"
      onClick={(event) => event.preventDefault()}
      key={collection.label}
      className={classes.collectionLink}
    >
      <Box component="span" mr={9} fz={16}>
        {collection.emoji}
      </Box>{' '}
      {collection.label}
    </a>
  ))

  return (
    <nav className={classes.searchNavbar}>
      <div className={classes.section}>
        <Group>
          <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" radius="xl" />
          <div>
            <Text size="sm" fw={500}>Harriette Spoonlicker</Text>
            <Text c="dimmed" size="xs">hspoonlicker@outlook.com</Text>
          </div>
        </Group>
      </div>

      <TextInput
        placeholder="Search"
        size="xs"
        leftSection={<IconSearch size={12} stroke={1.5} />}
        rightSectionWidth={70}
        rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
        styles={{ section: { pointerEvents: 'none' } }}
        mb="sm"
      />

      <div className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </div>

      <div className={classes.section}>
        <Group className={classes.collectionsHeader} justify="space-between">
          <Text size="xs" fw={500} c="dimmed">
            Collections
          </Text>
          <Tooltip label="Create collection" withArrow position="right">
            <ActionIcon variant="default" size={18}>
              <IconPlus size={12} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <div className={classes.collections}>{collectionLinks}</div>
      </div>
    </nav>
  )
}

function LinksGroup({ icon: Icon, label, initiallyOpened, links }: any) {
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)
  const items = (hasLinks ? links : []).map((link: any) => (
    <Text<'a'>
      component="a"
      className={classes.groupLink}
      href={link.link}
      key={link.label}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Text>
  ))

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o: boolean) => !o)} className={classes.control}>
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              size={16}
              style={{ transform: opened ? 'rotate(-90deg)' : 'none' }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  )
}

function NavbarLinksGroup() {
  const mockdata = {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  }

  return (
    <Box mih={220} p="md">
      <LinksGroup {...mockdata} />
    </Box>
  )
}

export default function Navbars() {
  return (
    <Page title="Navbars">
      <PageHeader
        title="Navbars"
      />
      
      <Container size="xl" mt="xl">
        <Text size="sm" c="dimmed" mb="lg">
          Navigation bar components with various styles and configurations.
        </Text>

        <Title order={3} mb="md">Simple Navbar</Title>
        <Text size="sm" c="dimmed" mb="lg">Basic navigation with icons and labels</Text>
        <div style={{ height: 400, border: '1px solid var(--mantine-color-gray-3)', borderRadius: 8 }}>
          <NavbarSimple />
        </div>

        <Title order={3} mb="md" mt="xl">Minimal Navbar</Title>
        <Text size="sm" c="dimmed" mb="lg">Compact navigation with icon-only links and tooltips</Text>
        <div style={{ height: 400, border: '1px solid var(--mantine-color-gray-3)', borderRadius: 8, width: 80 }}>
          <NavbarMinimal />
        </div>

        <Title order={3} mb="md" mt="xl">Segmented Navbar</Title>
        <Text size="sm" c="dimmed" mb="lg">Navigation with segmented control for different sections</Text>
        <div style={{ height: 400, border: '1px solid var(--mantine-color-gray-3)', borderRadius: 8 }}>
          <NavbarSegmented />
        </div>

        <Title order={3} mb="md" mt="xl">Navbar with Search</Title>
        <Text size="sm" c="dimmed" mb="lg">Navigation with search bar and collections</Text>
        <div style={{ height: 400, border: '1px solid var(--mantine-color-gray-3)', borderRadius: 8 }}>
          <NavbarWithSearch />
        </div>

        <Title order={3} mb="md" mt="xl">Navbar with Collapsible Links</Title>
        <Text size="sm" c="dimmed" mb="lg">Navigation with expandable link groups</Text>
        <div style={{ border: '1px solid var(--mantine-color-gray-3)', borderRadius: 8 }}>
          <NavbarLinksGroup />
        </div>
      </Container>
    </Page>
  )
}