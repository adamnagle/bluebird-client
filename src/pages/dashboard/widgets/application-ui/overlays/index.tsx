import { useState } from 'react'
import {
  Button,
  CloseButton,
  Group,
  Paper,
  Text,
  TextInput,
  Title,
  Card,
  Overlay,
  Center,
  Tooltip,
  PasswordInput,
  Stack,
  SimpleGrid,
  Modal,
  Box
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconInfoCircle } from '@tabler/icons-react'
import { Page, PageHeader } from '@/components'

// 1. Cookies Banner Component
function CookiesBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <Paper withBorder p="lg" radius="md" shadow="md">
      <Group justify="space-between" mb="xs">
        <Text fz="md" fw={500}>
          Allow cookies
        </Text>
        <CloseButton mr={-9} mt={-9} onClick={() => setVisible(false)} />
      </Group>
      <Text c="dimmed" fz="xs">
        So the deal is, we want to spy on you. We would like to know what did you have for todays
        breakfast, where do you live, how much do you earn and like 50 other things. To view our
        landing page you will have to accept all cookies. That's all, and remember that we are
        watching...
      </Text>
      <Group justify="flex-end" mt="md">
        <Button variant="default" size="xs">
          Cookies preferences
        </Button>
        <Button variant="outline" size="xs">
          Accept all
        </Button>
      </Group>
    </Paper>
  )
}

// 2. Email Banner Component
function EmailBanner() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '2rem',
        borderRadius: '8px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative'
      }}
    >
      <div style={{ flex: 1 }}>
        <Title
          order={3}
          style={{
            color: 'white',
            marginBottom: '0.5rem'
          }}
        >
          Wait a minute...
        </Title>
        <Text fw={500} fz="lg" mb={5}>
          Subscribe to our newsletter!
        </Text>
        <Text fz="sm" mb="md" style={{ opacity: 0.9 }}>
          You will never miss important product updates, latest news and community QA sessions. Our
          newsletter is once a week, every Sunday.
        </Text>

        <Group>
          <TextInput
            placeholder="Your email"
            radius="md"
            size="md"
            style={{ flex: 1 }}
          />
          <Button variant="white" color="dark" radius="md" size="md">
            Subscribe
          </Button>
        </Group>
      </div>
      
      <div style={{ marginLeft: '2rem', opacity: 0.3 }}>
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem'
          }}
        >
          📧
        </div>
      </div>
    </div>
  )
}

// 3. Image Action Banner Component
function ImageActionBanner() {
  return (
    <Card
      radius="md"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 200,
        position: 'relative'
      }}
    >
      <Overlay opacity={0.55} zIndex={0} />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '2rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Text size="lg" fw={700} c="white" mb="xs">
          Plan & save
        </Text>

        <Text size="sm" c="white" mb="md" style={{ opacity: 0.9 }}>
          Save up to 25% at Fifth Season Hotels in Europe, the Middle East, Africa and Asia Pacific
        </Text>

        <Button variant="white" color="dark" size="xs" style={{ width: 'fit-content' }}>
          Book now
        </Button>
      </div>
    </Card>
  )
}

// 4. Tooltip Components
function TooltipIcon() {
  const rightSection = (
    <Tooltip
      label="We store your data securely"
      position="top-end"
      withArrow
      transitionProps={{ transition: 'pop-bottom-right' }}
    >
      <Text component="div" c="dimmed" style={{ cursor: 'help' }}>
        <Center>
          <IconInfoCircle size={18} stroke={1.5} />
        </Center>
      </Text>
    </Tooltip>
  )

  return (
    <TextInput
      rightSection={rightSection}
      label="Tooltip shown on icon hover"
      placeholder="Your email"
    />
  )
}

function TooltipFocus() {
  const [opened, setOpened] = useState(false)
  const [value, setValue] = useState('')
  const valid = value.trim().length >= 6
  
  return (
    <Tooltip
      label={valid ? 'All good!' : 'Password must include at least 6 characters'}
      position="bottom-start"
      withArrow
      opened={opened}
      color={valid ? 'teal' : undefined}
      withinPortal
    >
      <PasswordInput
        label="Tooltip shown onFocus"
        required
        placeholder="Your password"
        onFocus={() => setOpened(true)}
        onBlur={() => setOpened(false)}
        mt="md"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </Tooltip>
  )
}

function InputTooltips() {
  return (
    <>
      <TooltipIcon />
      <TooltipFocus />
    </>
  )
}

// 5. Modal Overlay Component
function ModalDemo() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <Stack>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
          />
          <Group justify="space-between">
            <Text size="sm">
              <Text component="span" c="dimmed">
                Don't have an account?{' '}
              </Text>
              <Text component="span" c="blue" style={{ cursor: 'pointer' }}>
                Register
              </Text>
            </Text>
            <Button onClick={close}>Sign in</Button>
          </Group>
        </Stack>
      </Modal>

      <Group justify="center">
        <Button onClick={open}>Open Modal</Button>
      </Group>
    </>
  )
}

export default function Overlays() {
  return (
    <Page title="Overlays">
      <PageHeader
        title="Overlays"
      />
      
      <Stack gap="xl" mt="xl">
        <div>
          <Title order={3} mb="md">Cookies Banner</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Cookie consent banner with accept and preferences options that can be dismissed.
          </Text>
          <CookiesBanner />
        </div>

        <div>
          <Title order={3} mb="md">Email Newsletter Banner</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Promotional banner with gradient background for newsletter subscription.
          </Text>
          <EmailBanner />
        </div>

        <div>
          <Title order={3} mb="md">Image Action Banner</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Hero banner with background image overlay and call-to-action button.
          </Text>
          <ImageActionBanner />
        </div>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <div>
            <Title order={3} mb="md">Input Tooltips</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Form inputs with helpful tooltips on hover and focus states.
            </Text>
            <InputTooltips />
          </div>

          <div>
            <Title order={3} mb="md">Modal Overlay</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Modal dialog overlay with authentication form and backdrop.
            </Text>
            <ModalDemo />
          </div>
        </SimpleGrid>
      </Stack>
    </Page>
  )
}