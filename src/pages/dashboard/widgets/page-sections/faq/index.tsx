import { Page, PageHeader } from '@/components'
import { Stack, Title, Text, Accordion, Container, ThemeIcon, SimpleGrid, UnstyledButton, Overlay, Grid, Image } from '@mantine/core'
import { IconPlus, IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react'
import classes from './faq.module.css'

// FAQ Simple Component
function FaqSimple() {
  const placeholder =
    'It can\'t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren\'t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can\'t multiply, and it dies.It has no eyeballs, so it can\'t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.'

  return (
    <Container size="sm">
      <Title ta="center" mb="xl">
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        <Accordion.Item value="reset-password">
          <Accordion.Control>How can I reset my password?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="another-account">
          <Accordion.Control>Can I create more that one account?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="newsletter">
          <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="credit-card">
          <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="payment">
          <Accordion.Control>What payment systems to you work with?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

// FAQ with Background Component
function FaqWithBg() {
  const placeholder =
    'It can\'t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren\'t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can\'t multiply, and it dies.It has no eyeballs, so it can\'t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.'

  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Title ta="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion
          chevronPosition="right"
          defaultValue="reset-password"
          chevronSize={26}
          variant="separated"
          disableChevronRotation
          styles={{ label: { color: 'var(--mantine-color-black)' }, item: { border: 0 } }}
          chevron={
            <ThemeIcon radius="xl" className={classes.gradient} size={26}>
              <IconPlus size={18} stroke={1.5} />
            </ThemeIcon>
          }
        >
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>How can I reset my password?</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>Can I create more that one account?</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="payment">
            <Accordion.Control>What payment systems to you work with?</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  )
}

// Contact Icons Component for FAQ with Header
interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun
  title: React.ReactNode
  description: React.ReactNode
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.contactWrapper} {...others}>
      <ThemeIcon size={40} radius="md" className={classes.contactIcon}>
        <Icon size={24} />
      </ThemeIcon>

      <div>
        <Text size="xs" className={classes.contactTitle}>
          {title}
        </Text>
        <Text className={classes.contactDescription}>{description}</Text>
      </div>
    </div>
  )
}

const MOCKDATA = [
  { title: 'Email', description: 'hello@mantine.dev', icon: IconAt },
  { title: 'Phone', description: '+49 (800) 335 35 35', icon: IconPhone },
  { title: 'Address', description: '844 Morris Park avenue', icon: IconMapPin },
  { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: IconSun },
]

function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />)
  return <Stack>{items}</Stack>
}

// FAQ with Header Component
function FaqWithHeader() {
  const categories = [
    {
      label: 'Customer Support',
      image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    },
    {
      label: 'User Guides',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    },
    {
      label: 'Sales Questions',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    },
  ]

  const items = categories.map((category) => (
    <UnstyledButton
      style={{ backgroundImage: `url(${category.image})` }}
      className={classes.categoryCard}
      key={category.label}
    >
      <Overlay color="#000" opacity={0.6} zIndex={1} />
      <Text size="xl" ta="center" fw={700} className={classes.categoryLabel}>
        {category.label}
      </Text>
    </UnstyledButton>
  ))

  return (
    <Container className={classes.headerWrapper} size="lg">
      <div className={classes.header}>
        <div>
          <Title className={classes.headerTitle}>Frequently Asked Questions</Title>
          <Title className={classes.titleOverlay} role="presentation">
            FAQ
          </Title>
        </div>

        <div className={classes.contact}>
          <Text size="xl" fw={500} className={classes.contactTitle}>
            Contact us
          </Text>

          <ContactIconsList />
        </div>
      </div>

      <SimpleGrid cols={{ base: 1, sm: 3 }}>{items}</SimpleGrid>
    </Container>
  )
}

// FAQ with Image Component
function FaqWithImage() {
  const placeholder =
    'It can\'t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren\'t many people or Pokémon.'

  return (
    <div className={classes.imageWrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <div className={classes.imagePlaceholder}>
              <Text size="sm" c="dimmed">FAQ Illustration</Text>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.imageTitle}>
              Frequently Asked Questions
            </Title>

            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
              <Accordion.Item className={classes.imageItem} value="reset-password">
                <Accordion.Control>How can I reset my password?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.imageItem} value="another-account">
                <Accordion.Control>Can I create more that one account?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.imageItem} value="newsletter">
                <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.imageItem} value="credit-card">
                <Accordion.Control>
                  Do you store credit card information securely?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  )
}

export default function FAQ() {
  return (
    <Page title="FAQ Components">
      <PageHeader
        title="FAQ"
      />
      
      <Stack gap="xl" mt="xl">
        {/* FAQ Simple */}
        <div>
          <Title order={3} mb="md">FAQ Simple</Title>
          <Text size="sm" c="dimmed" mb="lg">Clean and simple accordion-based FAQ component with minimal styling</Text>
          <FaqSimple />
        </div>

        {/* FAQ with Background */}
        <div>
          <Title order={3} mb="md">FAQ with Background</Title>
          <Text size="sm" c="dimmed" mb="lg">FAQ component with gradient background and custom chevron icons</Text>
          <FaqWithBg />
        </div>

        {/* FAQ with Header */}
        <div>
          <Title order={3} mb="md">FAQ with Header</Title>
          <Text size="sm" c="dimmed" mb="lg">FAQ header with categories and contact information section</Text>
          <FaqWithHeader />
        </div>

        {/* FAQ with Image */}
        <div>
          <Title order={3} mb="md">FAQ with Image</Title>
          <Text size="sm" c="dimmed" mb="lg">FAQ component with side-by-side layout including image placeholder</Text>
          <FaqWithImage />
        </div>
      </Stack>
    </Page>
  )
}