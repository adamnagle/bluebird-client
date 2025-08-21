import { 
  ActionIcon,
  Button,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
  Stack,
  ThemeIcon,
  Box,
  Container
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { 
  IconBrandInstagram, 
  IconBrandTwitter, 
  IconBrandYoutube,
  IconPhone,
  IconMapPin,
  IconAt,
  IconSun
} from '@tabler/icons-react'
import { Page, PageHeader } from '@/components'

// Contact Icons List Component
function ContactIconsList() {
  const contactData = [
    { title: 'Email', description: 'hello@mantine.dev', icon: IconAt },
    { title: 'Phone', description: '+49 (800) 335 35 35', icon: IconPhone },
    { title: 'Address', description: '844 Morris Park avenue', icon: IconMapPin },
    { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: IconSun },
  ]

  const items = contactData.map((item, index) => (
    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
      <ThemeIcon size={30} radius="md" variant="light" style={{ marginRight: '1rem' }}>
        <item.icon size={18} stroke={1.5} />
      </ThemeIcon>
      <div>
        <Text size="sm" fw={500}>
          {item.title}
        </Text>
        <Text c="dimmed" size="sm">
          {item.description}
        </Text>
      </div>
    </div>
  ))

  return <div>{items}</div>
}

// 1. Contact Us Component
const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram]

function ContactUs() {
  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} variant="subtle" radius="sm">
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ))

  return (
    <Container size="lg" py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title order={2} style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
            Contact us
          </Title>
          <Text size="lg" c="dimmed" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          <ContactIconsList />

          <Group mt="xl">{icons}</Group>
        </div>

        <Paper withBorder p="xl" radius="md">
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            radius="md"
          />
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
            radius="md"
          />
          <Textarea
            required
            label="Your message"
            placeholder="I want to order your goods"
            minRows={4}
            mt="md"
            radius="md"
          />

          <Group justify="flex-end" mt="md">
            <Button radius="md">
              Send message
            </Button>
          </Group>
        </Paper>
      </SimpleGrid>
    </Container>
  )
}

// 2. Get In Touch Component (with background)
function GetInTouch() {
  return (
    <Paper shadow="md" radius="lg" style={{ overflow: 'hidden' }}>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={0}>
        <div
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '2rem',
            color: 'white',
            minHeight: 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Text fz="lg" fw={700} mb="xl">
            Contact information
          </Text>

          <div style={{ marginBottom: '2rem' }}>
            <ContactIconsList />
          </div>
        </div>

        <form
          style={{ padding: '2rem' }}
          onSubmit={(event) => event.preventDefault()}
        >
          <Text fz="lg" fw={700} mb="xl">
            Get in touch
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <TextInput label="Your name" placeholder="Your name" />
            <TextInput label="Your email" placeholder="hello@mantine.dev" required />
          </SimpleGrid>

          <TextInput mt="md" label="Subject" placeholder="Subject" required />

          <Textarea
            mt="md"
            label="Your message"
            placeholder="Please include all relevant information"
            minRows={3}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">
              Send message
            </Button>
          </Group>
        </form>
      </SimpleGrid>
    </Paper>
  )
}

// 3. Get In Touch Simple Component
function GetInTouchSimple() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2 ? 'Name must be at least 2 characters' : null,
      email: (value) => !/^\S+@\S+$/.test(value) ? 'Invalid email' : null,
      subject: (value) => value.trim().length === 0 ? 'Subject is required' : null,
    },
  })

  return (
    <Container size="sm" py="xl">
      <form onSubmit={form.onSubmit(() => {})}>
        <Title
          order={2}
          size="h1"
          style={{ fontFamily: 'var(--mantine-font-family)' }}
          fw={900}
          ta="center"
          mb="xl"
        >
          Get in touch
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <TextInput
            label="Name"
            placeholder="Your name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          variant="filled"
          {...form.getInputProps('subject')}
        />
        
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          variant="filled"
          {...form.getInputProps('message')}
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md">
            Send message
          </Button>
        </Group>
      </form>
    </Container>
  )
}

// 4. Contact Card Component
function ContactCard() {
  return (
    <Container size="md" py="xl">
      <Paper withBorder radius="lg" p="xl" style={{ textAlign: 'center' }}>
        <Title order={2} mb="md">
          Contact our team
        </Title>
        <Text c="dimmed" size="lg" mb="xl">
          We're here to help you with any questions or concerns you may have.
        </Text>
        
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
          <div style={{ textAlign: 'center' }}>
            <ThemeIcon size={50} radius="md" variant="light" mx="auto" mb="md">
              <IconAt size={24} stroke={1.5} />
            </ThemeIcon>
            <Text fw={500} mb="xs">Email us</Text>
            <Text size="sm" c="dimmed">hello@company.com</Text>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <ThemeIcon size={50} radius="md" variant="light" mx="auto" mb="md">
              <IconPhone size={24} stroke={1.5} />
            </ThemeIcon>
            <Text fw={500} mb="xs">Call us</Text>
            <Text size="sm" c="dimmed">+1 (555) 123-4567</Text>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <ThemeIcon size={50} radius="md" variant="light" mx="auto" mb="md">
              <IconMapPin size={24} stroke={1.5} />
            </ThemeIcon>
            <Text fw={500} mb="xs">Visit us</Text>
            <Text size="sm" c="dimmed">123 Business Ave</Text>
          </div>
        </SimpleGrid>
        
        <Button size="lg" mt="xl">
          Get in touch
        </Button>
      </Paper>
    </Container>
  )
}

export default function Contact() {
  return (
    <Page title="Contact">
      <PageHeader
        title="Contact"
      />
      
      <Stack gap="xl" mt="xl">
        <div>
          <Title order={3} mb="md">Contact Us Form</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Two-column layout with contact information and form, including social media links.
          </Text>
          <ContactUs />
        </div>

        <div>
          <Title order={3} mb="md">Get In Touch with Background</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Split layout with gradient background contact info and clean form section.
          </Text>
          <GetInTouch />
        </div>

        <div>
          <Title order={3} mb="md">Simple Contact Form</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Centered simple contact form with filled input variants and form validation.
          </Text>
          <GetInTouchSimple />
        </div>

        <div>
          <Title order={3} mb="md">Contact Information Card</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Clean contact information display with icons and call-to-action button.
          </Text>
          <ContactCard />
        </div>
      </Stack>
    </Page>
  )
}