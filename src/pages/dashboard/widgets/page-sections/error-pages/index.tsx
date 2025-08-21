import { 
  Button,
  Container,
  Group,
  Text,
  Title,
  Stack,
  Center,
  Box
} from '@mantine/core'
import { Page, PageHeader } from '@/components'
import classes from './error-pages.module.css'

// 1. 404 Not Found Error
function NotFoundTitle() {
  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
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

// 2. 500 Server Error
function ServerError() {
  return (
    <div className={classes.serverRoot}>
      <Container>
        <div className={classes.serverLabel}>500</div>
        <Title className={classes.serverTitle}>Something bad just happened...</Title>
        <Text size="lg" ta="center" className={classes.serverDescription}>
          Our servers could not handle your request. Don&apos;t worry, our development team was
          already notified. Try refreshing the page.
        </Text>
        <Group justify="center">
          <Button variant="white" size="md">
            Refresh the page
          </Button>
        </Group>
      </Container>
    </div>
  )
}

// 3. 503 Server Overload
function ServerOverload() {
  return (
    <div className={classes.overloadRoot}>
      <Container>
        <div className={classes.overloadLabel}>503</div>
        <Title className={classes.overloadTitle}>All of our servers are busy</Title>
        <Text c="dimmed" size="lg" ta="center" className={classes.overloadDescription}>
          We cannot handle your request right now, please wait for a couple of minutes and refresh
          the page. Our team is already working on this issue.
        </Text>
        <Group justify="center">
          <Button variant="white" size="md">
            Refresh the page
          </Button>
        </Group>
      </Container>
    </div>
  )
}

// 4. Nothing Found Background
function NothingFoundBackground() {
  return (
    <Container className={classes.nothingRoot}>
      <div className={classes.nothingInner}>
        <div className={classes.nothingImage}>
          <Center>
            <Text size="6rem" style={{ opacity: 0.3 }}>🔍</Text>
          </Center>
        </div>
        <div className={classes.nothingContent}>
          <Title className={classes.nothingTitle}>Nothing to see here</Title>
          <Text color="dimmed" size="lg" ta="center" className={classes.nothingDescription}>
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </Text>
          <Group justify="center">
            <Button mt="xl">Take me back to home page</Button>
          </Group>
        </div>
      </div>
    </Container>
  )
}

// 5. Not Found Image
function NotFoundImage() {
  return (
    <Container className={classes.imageRoot}>
      <div className={classes.imageInner}>
        <div className={classes.imageContent}>
          <Title className={classes.imageTitle}>Something is not right...</Title>
          <Text color="dimmed" size="lg" ta="center" mt="xl">
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL.
          </Text>
          <Group justify="center" mt="xl">
            <Button variant="outline">Get back to home page</Button>
          </Group>
        </div>
        <div className={classes.imageContainer}>
          <Box className={classes.imagePlaceholder}>
            <Text size="4rem" ta="center" c="dimmed">🚫</Text>
          </Box>
        </div>
      </div>
    </Container>
  )
}

export default function ErrorPages() {
  return (
    <Page title="Error Pages">
      <PageHeader
        title="Error Pages"
      />
      
      <Stack gap="xl" mt="xl">
        <div>
          <Title order={3} mb="md">404 Not Found</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Clean and simple 404 error page with helpful messaging and navigation back to safety.
          </Text>
          <NotFoundTitle />
        </div>

        <div>
          <Title order={3} mb="md">500 Server Error</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Server error page with blue background and clear messaging about technical issues.
          </Text>
          <ServerError />
        </div>

        <div>
          <Title order={3} mb="md">503 Server Overload</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Service unavailable page for when servers are experiencing high load or maintenance.
          </Text>
          <ServerOverload />
        </div>

        <div>
          <Title order={3} mb="md">Nothing Found with Background</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Alternative 404 page with background image and side-by-side layout design.
          </Text>
          <NothingFoundBackground />
        </div>

        <div>
          <Title order={3} mb="md">Not Found with Image</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Error page with illustration placeholder and horizontal layout for better visual appeal.
          </Text>
          <NotFoundImage />
        </div>
      </Stack>
    </Page>
  )
}