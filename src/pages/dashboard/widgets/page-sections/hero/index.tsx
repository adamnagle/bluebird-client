import { 
  Button, 
  Container, 
  Group, 
  Text, 
  Title,
  List,
  ThemeIcon,
  Overlay,
  Stack,
  SimpleGrid,
  Box
} from '@mantine/core'
import { IconCheck, IconBrandGithub } from '@tabler/icons-react'
import { Page, PageHeader } from '@/components'

// GitHub Icon Component
function GithubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

// 1. Hero with Gradient Text
function HeroTitle() {
  return (
    <Box
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem 0',
        color: 'white'
      }}
    >
      <Container size={700}>
        <Title
          order={1}
          style={{
            fontSize: '3rem',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}
        >
          A{' '}
          <Text 
            component="span" 
            variant="gradient" 
            gradient={{ from: 'yellow', to: 'orange' }}
            inherit
            style={{ fontWeight: 'inherit' }}
          >
            fully featured
          </Text>{' '}
          React components and hooks library
        </Title>

        <Text 
          size="lg" 
          style={{ 
            textAlign: 'center',
            marginBottom: '2rem',
            opacity: 0.9,
            maxWidth: 600,
            margin: '0 auto 2rem'
          }}
        >
          Build fully functional accessible web applications with ease – Mantine includes more than
          100 customizable components and hooks to cover you in any situation
        </Text>

        <Group justify="center" gap="md">
          <Button
            size="xl"
            variant="white"
            color="dark"
            radius="xl"
          >
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            leftSection={<GithubIcon />}
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white'
            }}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </Box>
  )
}

// 2. Hero with Bullets/Features
function HeroBullets() {
  return (
    <Container size="md" py={80}>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
        <div>
          <Title
            order={2}
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '1rem'
            }}
          >
            A{' '}
            <span 
              style={{ 
                color: 'var(--mantine-primary-color-filled)',
                background: 'linear-gradient(45deg, #228be6, #339af0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              modern
            </span>{' '}
            React <br /> components library
          </Title>
          
          <Text c="dimmed" mt="md" size="lg">
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="md"
            icon={
              <ThemeIcon size={20} radius="xl" color="teal">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <strong>TypeScript based</strong> – build type safe applications, all components and hooks
              export types
            </List.Item>
            <List.Item>
              <strong>Free and open source</strong> – all packages have MIT license, you can use Mantine in
              any project
            </List.Item>
            <List.Item>
              <strong>No annoying focus ring</strong> – focus ring will appear only when user navigates with
              keyboard
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md">
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md">
              Source code
            </Button>
          </Group>
        </div>
        
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--mantine-color-gray-0)',
            borderRadius: '8px',
            height: 300
          }}
        >
          <div
            style={{
              fontSize: '4rem',
              opacity: 0.6
            }}
          >
            📊
          </div>
        </div>
      </SimpleGrid>
    </Container>
  )
}

// 3. Hero with Background Image (Left Content)
function HeroContentLeft() {
  return (
    <Box
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 500,
        position: 'relative'
      }}
    >
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container 
        size="md"
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: 'white'
        }}
      >
        <Title
          order={1}
          style={{
            fontSize: '3rem',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: '1.5rem'
          }}
        >
          A fully featured React components library
        </Title>
        
        <Text size="xl" mt="xl" style={{ maxWidth: 600, marginBottom: '2rem' }}>
          Build fully functional accessible web applications faster than ever – Mantine includes
          more than 120 customizable components and hooks to cover you in any situation
        </Text>

        <Button 
          variant="gradient" 
          size="xl" 
          radius="xl"
          style={{ width: 'fit-content' }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  )
}

// 4. Hero with Image Right
function HeroImageRight() {
  return (
    <Box style={{ padding: '4rem 0', backgroundColor: 'var(--mantine-color-gray-0)' }}>
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Title
              order={1}
              style={{
                fontSize: '3rem',
                fontWeight: 900,
                lineHeight: 1.2,
                marginBottom: '1.5rem'
              }}
            >
              A{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
                style={{ fontWeight: 'inherit' }}
              >
                fully featured
              </Text>{' '}
              React components library
            </Title>

            <Text size="lg" mt={30} c="dimmed">
              Build fully functional accessible web applications with ease – Mantine includes more
              than 100 customizable components and hooks to cover you in any situation
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              mt={40}
              style={{ width: 'fit-content' }}
            >
              Get started
            </Button>
          </div>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'white',
              borderRadius: '12px',
              height: 400,
              border: '1px solid var(--mantine-color-gray-3)'
            }}
          >
            <div
              style={{
                fontSize: '4rem',
                opacity: 0.6
              }}
            >
              🚀
            </div>
          </div>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default function Hero() {
  return (
    <Page title="Hero">
      <PageHeader
        title="Hero"
      />
      
      <Stack gap="xl" mt="xl">
        <div>
          <Title order={3} mb="md">Hero with Gradient Text</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Eye-catching hero section with gradient background and highlighted text elements.
          </Text>
          <HeroTitle />
        </div>

        <div>
          <Title order={3} mb="md">Hero with Feature Bullets</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Informative hero section with feature list and supporting illustration.
          </Text>
          <HeroBullets />
        </div>

        <div>
          <Title order={3} mb="md">Hero with Background Image</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Dramatic hero section with background image overlay and prominent call-to-action.
          </Text>
          <HeroContentLeft />
        </div>

        <div>
          <Title order={3} mb="md">Hero with Image Right</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Balanced hero layout with content on the left and supporting image on the right.
          </Text>
          <HeroImageRight />
        </div>
      </Stack>
    </Page>
  )
}