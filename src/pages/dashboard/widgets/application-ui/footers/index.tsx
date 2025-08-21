import { Container, Title, Text, Anchor, Group, ActionIcon, Stack } from '@mantine/core'
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react'
import { Page, PageHeader } from '@/components'
import classes from './footers.module.css'

function FooterSimple() {
  const links = [
    { link: '#', label: 'Contact' },
    { link: '#', label: 'Privacy' },
    { link: '#', label: 'Blog' },
    { link: '#', label: 'Careers' },
  ]

  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ))

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div style={{ width: 28, height: 28, backgroundColor: '#228be6', borderRadius: 4 }} />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  )
}

function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div style={{ width: 28, height: 28, backgroundColor: '#228be6', borderRadius: 4 }} />
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  )
}

function FooterLinks() {
  const data = [
    {
      title: 'About',
      links: [
        { label: 'Features', link: '#' },
        { label: 'Pricing', link: '#' },
        { label: 'Support', link: '#' },
        { label: 'Forums', link: '#' },
      ],
    },
    {
      title: 'Project',
      links: [
        { label: 'Contribute', link: '#' },
        { label: 'Media assets', link: '#' },
        { label: 'Changelog', link: '#' },
        { label: 'Releases', link: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Join Discord', link: '#' },
        { label: 'Follow on Twitter', link: '#' },
        { label: 'Email newsletter', link: '#' },
        { label: 'GitHub discussions', link: '#' },
      ],
    },
  ]

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ))

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    )
  })

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <div style={{ width: 28, height: 28, backgroundColor: '#228be6', borderRadius: 4 }} />
          <Text size="xs" c="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
    </footer>
  )
}

export default function Footers() {
  return (
    <Page title="Footers">
      <PageHeader
        title="Footers"
      />
      
      <Container size="xl" mt="xl">
        <Text size="sm" c="dimmed" mb="lg">
          Footer components with various styles and configurations.
        </Text>

        <Title order={3} mb="md">Simple Footer</Title>
        <Text size="sm" c="dimmed" mb="lg">Basic footer with navigation links</Text>
        <FooterSimple />

        <Title order={3} mb="md" mt="xl">Footer with Social Icons</Title>
        <Text size="sm" c="dimmed" mb="lg">Footer with social media action buttons</Text>
        <FooterSocial />

        <Title order={3} mb="md" mt="xl">Footer with Links</Title>
        <Text size="sm" c="dimmed" mb="lg">Comprehensive footer with organized link groups</Text>
        <FooterLinks />
      </Container>
    </Page>
  )
}