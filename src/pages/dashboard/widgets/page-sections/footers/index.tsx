import { Page, PageHeader } from '@/components'
import { Stack, Title, Text, Anchor, Group, ActionIcon, Container } from '@mantine/core'
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react'
import classes from './footers.module.css'

// Footer Simple Component
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
    <div className={classes.footerSimple}>
      <Container className={classes.innerSimple}>
        <div className={classes.logo}>
          <Text size="lg" fw={700}>Your Logo</Text>
        </div>
        <Group className={classes.linksSimple}>{items}</Group>
      </Container>
    </div>
  )
}

// Footer Centered Component
function FooterCentered() {
  const links = [
    { link: '#', label: 'Contact' },
    { link: '#', label: 'Privacy' },
    { link: '#', label: 'Blog' },
    { link: '#', label: 'Store' },
    { link: '#', label: 'Careers' },
  ]

  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ))

  return (
    <div className={classes.footerCentered}>
      <div className={classes.innerCentered}>
        <div className={classes.logo}>
          <Text size="lg" fw={700}>Your Logo</Text>
        </div>

        <Group className={classes.linksCentered}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  )
}

// Footer Social Component
function FooterSocial() {
  return (
    <div className={classes.footerSocial}>
      <Container className={classes.innerSocial}>
        <div className={classes.logo}>
          <Text size="lg" fw={700}>Your Logo</Text>
        </div>
        <Group gap={0} className={classes.linksSocial} justify="flex-end" wrap="nowrap">
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

// Footer Links Component
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
    <footer className={classes.footerLinks}>
      <Container className={classes.innerLinks}>
        <div className={classes.logoSection}>
          <Text size="lg" fw={700}>Your Logo</Text>
          <Text size="xs" c="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 Your Company. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
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
    </footer>
  )
}

export default function Footers() {
  return (
    <Page title="Footer Components">
      <PageHeader
        title="Footers"
      />
      
      <Stack gap="xl" mt="xl">
        {/* Footer Simple */}
        <div>
          <Title order={3} mb="md">Footer Simple</Title>
          <Text size="sm" c="dimmed" mb="lg">Simple footer with logo and navigation links</Text>
          <FooterSimple />
        </div>

        {/* Footer Centered */}
        <div>
          <Title order={3} mb="md">Footer Centered</Title>
          <Text size="sm" c="dimmed" mb="lg">Centered footer with logo, links, and social media icons</Text>
          <FooterCentered />
        </div>

        {/* Footer Social */}
        <div>
          <Title order={3} mb="md">Footer Social</Title>
          <Text size="sm" c="dimmed" mb="lg">Minimal footer with logo and social media links only</Text>
          <FooterSocial />
        </div>

        {/* Footer Links */}
        <div>
          <Title order={3} mb="md">Footer Links</Title>
          <Text size="sm" c="dimmed" mb="lg">Comprehensive footer with organized link groups and copyright section</Text>
          <FooterLinks />
        </div>
      </Stack>
    </Page>
  )
}