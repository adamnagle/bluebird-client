import { Page, PageHeader } from '@/components'
import {
  Stack,
  Title,
  Text,
  Avatar,
  Group,
  Paper,
  TypographyStylesProvider,
  Container,
  Button,
  Textarea,
  ActionIcon,
  Divider
} from '@mantine/core'
import { IconHeart, IconShare, IconFlag, IconArrowBack } from '@tabler/icons-react'
import classes from './comments.module.css'

// Comment Simple Component
function CommentSimple() {
  return (
    <div>
      <Group>
        <Avatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
          alt="Jacob Warnhalter"
          radius="xl"
        />
        <div>
          <Text size="sm">Jacob Warnhalter</Text>
          <Text size="xs" c="dimmed">
            10 minutes ago
          </Text>
        </div>
      </Group>
      <Text pl={54} pt="sm" size="sm">
        This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa
        concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has
        water spouts that protrude from its shell. The water spouts are very accurate.
      </Text>
    </div>
  )
}

// Comment HTML Component
function CommentHtml() {
  return (
    <Paper withBorder radius="md" className={classes.comment}>
      <Group>
        <Avatar
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
          alt="Jacob Warnhalter"
          radius="xl"
        />
        <div>
          <Text fz="sm">Jacob Warnhalter</Text>
          <Text fz="xs" c="dimmed">
            10 minutes ago
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html:
              '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>',
          }}
        />
      </TypographyStylesProvider>
    </Paper>
  )
}

// Comment with Actions
function CommentWithActions() {
  return (
    <Paper withBorder radius="md" p="lg">
      <Group mb="xs">
        <Avatar
          src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
          alt="Sarah Johnson"
          radius="xl"
        />
        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>Sarah Johnson</Text>
          <Text size="xs" c="dimmed">2 hours ago</Text>
        </div>
        <ActionIcon variant="subtle" color="gray">
          <IconFlag size={16} />
        </ActionIcon>
      </Group>
      
      <Text size="sm" mb="md">
        Great article! I've been looking for something like this for weeks. The examples are really clear and the step-by-step approach makes it easy to follow along. Thank you for sharing this with the community.
      </Text>
      
      <Group gap="xs">
        <ActionIcon variant="subtle" color="red">
          <IconHeart size={16} />
        </ActionIcon>
        <Text size="xs" c="dimmed">12</Text>
        
        <ActionIcon variant="subtle" color="blue" ml="md">
          <IconArrowBack size={16} />
        </ActionIcon>
        <Text size="xs" c="dimmed">Reply</Text>
        
        <ActionIcon variant="subtle" color="gray" ml="md">
          <IconShare size={16} />
        </ActionIcon>
        <Text size="xs" c="dimmed">Share</Text>
      </Group>
    </Paper>
  )
}

// Comment Thread
function CommentThread() {
  return (
    <Stack gap="md">
      <Paper withBorder radius="md" p="lg">
        <Group mb="xs">
          <Avatar
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
            alt="Mike Chen"
            radius="xl"
          />
          <div>
            <Text size="sm" fw={500}>Mike Chen</Text>
            <Text size="xs" c="dimmed">3 hours ago</Text>
          </div>
        </Group>
        
        <Text size="sm" mb="md">
          Has anyone tried implementing this with TypeScript? I'm running into some type issues with the props interface.
        </Text>
        
        <Group gap="xs">
          <ActionIcon variant="subtle" color="red">
            <IconHeart size={16} />
          </ActionIcon>
          <Text size="xs" c="dimmed">5</Text>
          
          <Button variant="subtle" size="xs" leftSection={<IconArrowBack size={14} />}>
            Reply
          </Button>
        </Group>
      </Paper>
      
      {/* Reply */}
      <div style={{ marginLeft: '2rem' }}>
        <Paper withBorder radius="md" p="lg">
          <Group mb="xs">
            <Avatar
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              alt="Alex Kim"
              radius="xl"
            />
            <div>
              <Text size="sm" fw={500}>Alex Kim</Text>
              <Text size="xs" c="dimmed">2 hours ago</Text>
            </div>
          </Group>
          
          <Text size="sm" mb="md">
            @Mike Chen Yes! I had the same issue. You need to extend the interface with React.ComponentProps. Here's how I solved it...
          </Text>
          
          <Group gap="xs">
            <ActionIcon variant="subtle" color="red">
              <IconHeart size={16} />
            </ActionIcon>
            <Text size="xs" c="dimmed">8</Text>
            
            <Button variant="subtle" size="xs" leftSection={<IconArrowBack size={14} />}>
              Reply
            </Button>
          </Group>
        </Paper>
      </div>
    </Stack>
  )
}

// Comment Form
function CommentForm() {
  return (
    <Paper withBorder radius="md" p="lg">
      <Text size="lg" fw={500} mb="md">Leave a comment</Text>
      
      <Group mb="md">
        <Avatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
          alt="You"
          radius="xl"
        />
        <div>
          <Text size="sm" fw={500}>Your Name</Text>
          <Text size="xs" c="dimmed">you@example.com</Text>
        </div>
      </Group>
      
      <Textarea
        placeholder="Write your comment here..."
        minRows={4}
        mb="md"
      />
      
      <Group justify="space-between">
        <Text size="xs" c="dimmed">
          Comments are moderated and will appear after review
        </Text>
        <Button>Post Comment</Button>
      </Group>
    </Paper>
  )
}

export default function Comments() {
  return (
    <Page title="Comment Components">
      <PageHeader
        title="Comments"
      />
      
      <Stack gap="xl" mt="xl">
        {/* Comment Simple */}
        <div>
          <Title order={3} mb="md">Comment Simple</Title>
          <Text size="sm" c="dimmed" mb="lg">Basic comment layout with avatar, author, and text content</Text>
          <Container size="sm">
            <CommentSimple />
          </Container>
        </div>

        {/* Comment HTML */}
        <div>
          <Title order={3} mb="md">Comment with HTML Content</Title>
          <Text size="sm" c="dimmed" mb="lg">Comment component that supports rich HTML content with typography styles</Text>
          <Container size="sm">
            <CommentHtml />
          </Container>
        </div>

        {/* Comment with Actions */}
        <div>
          <Title order={3} mb="md">Comment with Actions</Title>
          <Text size="sm" c="dimmed" mb="lg">Interactive comment with like, reply, and share actions</Text>
          <Container size="sm">
            <CommentWithActions />
          </Container>
        </div>

        {/* Comment Thread */}
        <div>
          <Title order={3} mb="md">Comment Thread</Title>
          <Text size="sm" c="dimmed" mb="lg">Nested comment structure showing replies and threading</Text>
          <Container size="sm">
            <CommentThread />
          </Container>
        </div>

        {/* Comment Form */}
        <div>
          <Title order={3} mb="md">Comment Form</Title>
          <Text size="sm" c="dimmed" mb="lg">Form component for submitting new comments</Text>
          <Container size="sm">
            <CommentForm />
          </Container>
        </div>
      </Stack>
    </Page>
  )
}