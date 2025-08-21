import { useState } from 'react'
import {
  Button,
  Card,
  Progress,
  Text,
  Container,
  Group,
  Title,
  Alert,
  Notification,
  Stack,
  SimpleGrid,
  ActionIcon,
  Loader,
  Center,
  RingProgress,
  ThemeIcon,
  Paper,
  Box
} from '@mantine/core'
import {
  IconX,
  IconCheck,
  IconAlertTriangle,
  IconInfoCircle,
  IconCloudUpload,
  IconFileX,
  IconUpload
} from '@tabler/icons-react'
import { Page, PageHeader } from '@/components'

// 1. Progress Card Component
function ProgressCard() {
  return (
    <Card withBorder radius="md" padding="xl" bg="var(--mantine-color-body)">
      <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        Monthly goal
      </Text>
      <Text fz="lg" fw={500}>
        $5.431 / $10.000
      </Text>
      <Progress value={54.31} mt="md" size="lg" radius="xl" />
    </Card>
  )
}

// 2. Colored Progress Card Component
function ProgressCardColored() {
  return (
    <Card
      withBorder
      radius="md"
      p="xl"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}
    >
      <Text fz="xs" tt="uppercase" fw={700} style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
        Monthly goal
      </Text>
      <Text fz="lg" fw={500} style={{ color: 'white' }}>
        $5.431 / $10.000
      </Text>
      <Progress
        value={54.31}
        mt="md"
        size="lg"
        radius="xl"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)'
        }}
        styles={{
          section: {
            backgroundColor: 'white'
          }
        }}
      />
    </Card>
  )
}

// 3. 404 Error Page Component
function NotFoundTitle() {
  return (
    <Container style={{ textAlign: 'center', padding: '2rem' }}>
      <div
        style={{
          fontSize: '6rem',
          fontWeight: 900,
          lineHeight: 1,
          marginBottom: '1rem',
          color: 'var(--mantine-color-gray-3)'
        }}
      >
        404
      </div>
      <Title
        order={2}
        style={{
          fontFamily: 'var(--mantine-font-family)',
          fontSize: '2rem',
          fontWeight: 600,
          marginBottom: '1rem'
        }}
      >
        You have found a secret place.
      </Title>
      <Text c="dimmed" size="lg" ta="center" style={{ marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
        Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
        been moved to another URL.
      </Text>
      <Group justify="center">
        <Button variant="subtle" size="md">
          Take me back to home page
        </Button>
      </Group>
    </Container>
  )
}

// 4. Nothing Found with Illustration Component
function NothingFoundBackground() {
  return (
    <Container style={{ textAlign: 'center', padding: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'var(--mantine-color-gray-1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem'
          }}
        >
          🔍
        </div>
      </div>
      <Title
        order={3}
        style={{
          fontFamily: 'var(--mantine-font-family)',
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem'
        }}
      >
        Nothing to see here
      </Title>
      <Text c="dimmed" size="lg" ta="center" style={{ marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
        Page you are trying to open does not exist. You may have mistyped the address, or the
        page has been moved to another URL. If you think this is an error contact support.
      </Text>
      <Group justify="center">
        <Button size="md">Take me back to home page</Button>
      </Group>
    </Container>
  )
}

// 5. Notification Examples Component
function NotificationExamples() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'success', title: 'Success notification', message: 'Your changes have been saved', visible: true },
    { id: 2, type: 'error', title: 'Error notification', message: 'Something went wrong', visible: true },
    { id: 3, type: 'info', title: 'Info notification', message: 'New version available', visible: true }
  ])

  const hideNotification = (id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, visible: false } : n))
  }

  return (
    <Stack gap="md">
      {notifications.filter(n => n.visible).map(notification => (
        <Notification
          key={notification.id}
          icon={
            notification.type === 'success' ? <IconCheck size={18} /> :
            notification.type === 'error' ? <IconX size={18} /> :
            <IconInfoCircle size={18} />
          }
          color={
            notification.type === 'success' ? 'teal' :
            notification.type === 'error' ? 'red' :
            'blue'
          }
          title={notification.title}
          onClose={() => hideNotification(notification.id)}
        >
          {notification.message}
        </Notification>
      ))}
      
      {notifications.every(n => !n.visible) && (
        <Button 
          variant="light" 
          onClick={() => setNotifications(prev => prev.map(n => ({ ...n, visible: true })))}
        >
          Show notifications again
        </Button>
      )}
    </Stack>
  )
}

// 6. Loading States Component
function LoadingStates() {
  const [loadingStates, setLoadingStates] = useState({
    uploading: false,
    processing: false,
    completed: false
  })

  const simulateUpload = () => {
    setLoadingStates({ uploading: true, processing: false, completed: false })
    setTimeout(() => {
      setLoadingStates({ uploading: false, processing: true, completed: false })
      setTimeout(() => {
        setLoadingStates({ uploading: false, processing: false, completed: true })
        setTimeout(() => {
          setLoadingStates({ uploading: false, processing: false, completed: false })
        }, 2000)
      }, 2000)
    }, 1500)
  }

  return (
    <Stack gap="md">
      <Paper withBorder p="md" radius="md">
        <Group justify="space-between">
          <Text fw={500}>File Upload Status</Text>
          <ActionIcon 
            variant="light" 
            onClick={simulateUpload}
            disabled={loadingStates.uploading || loadingStates.processing}
          >
            <IconUpload size={16} />
          </ActionIcon>
        </Group>
        
        <Center mt="md">
          {loadingStates.uploading && (
            <Group>
              <Loader size="sm" />
              <Text size="sm">Uploading...</Text>
            </Group>
          )}
          
          {loadingStates.processing && (
            <Group>
              <RingProgress 
                size={40} 
                thickness={4} 
                sections={[{ value: 75, color: 'blue' }]} 
              />
              <Text size="sm">Processing...</Text>
            </Group>
          )}
          
          {loadingStates.completed && (
            <Group>
              <ThemeIcon color="teal" variant="light" size="sm">
                <IconCheck size={16} />
              </ThemeIcon>
              <Text size="sm" c="teal">Upload completed!</Text>
            </Group>
          )}
          
          {!loadingStates.uploading && !loadingStates.processing && !loadingStates.completed && (
            <Text size="sm" c="dimmed">Click upload icon to start</Text>
          )}
        </Center>
      </Paper>
    </Stack>
  )
}

// 7. Alert Examples Component
function AlertExamples() {
  return (
    <Stack gap="md">
      <Alert variant="light" color="blue" title="Information" icon={<IconInfoCircle />}>
        This is an informational alert with additional details about the current state.
      </Alert>
      
      <Alert variant="light" color="yellow" title="Warning" icon={<IconAlertTriangle />}>
        This is a warning alert. Please review your settings before proceeding.
      </Alert>
      
      <Alert variant="light" color="red" title="Error" icon={<IconX />}>
        This is an error alert. Something went wrong and needs your attention.
      </Alert>
      
      <Alert variant="light" color="teal" title="Success" icon={<IconCheck />}>
        This is a success alert. Your action has been completed successfully.
      </Alert>
    </Stack>
  )
}

export default function Feedback() {
  return (
    <Page title="Feedback">
      <PageHeader
        title="Feedback"
      />
      
      <Stack gap="xl" mt="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <div>
            <Title order={3} mb="md">Progress Cards</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Visual progress indicators showing completion status and goal tracking.
            </Text>
            <Stack gap="md">
              <ProgressCard />
              <ProgressCardColored />
            </Stack>
          </div>

          <div>
            <Title order={3} mb="md">Loading States</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Various loading indicators and progress states for user actions.
            </Text>
            <LoadingStates />
          </div>
        </SimpleGrid>

        <div>
          <Title order={3} mb="md">Notifications</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Toast-style notifications for success, error, and informational messages.
          </Text>
          <NotificationExamples />
        </div>

        <div>
          <Title order={3} mb="md">Alert Messages</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Inline alert components for displaying important information and status updates.
          </Text>
          <AlertExamples />
        </div>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <div>
            <Title order={3} mb="md">404 Error Page</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Clean error page design for handling missing or invalid routes.
            </Text>
            <Paper withBorder p="md">
              <NotFoundTitle />
            </Paper>
          </div>

          <div>
            <Title order={3} mb="md">Empty State</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Friendly empty state with illustration for when no content is available.
            </Text>
            <Paper withBorder p="md">
              <NothingFoundBackground />
            </Paper>
          </div>
        </SimpleGrid>
      </Stack>
    </Page>
  )
}