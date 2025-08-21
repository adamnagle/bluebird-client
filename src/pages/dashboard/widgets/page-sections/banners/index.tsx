import { 
  Button,
  CloseButton,
  Group,
  Paper,
  Text,
  TextInput,
  Title,
  Stack,
  Image,
  Container,
  Box,
  ActionIcon,
  Anchor
} from '@mantine/core'
import { IconX, IconCheck, IconAlertTriangle, IconInfoCircle } from '@tabler/icons-react'
import { Page, PageHeader } from '@/components'
import classes from './banners.module.css'

// 1. Cookies Banner
function CookiesBanner() {
  return (
    <Paper withBorder p="lg" radius="md" shadow="md">
      <Group justify="space-between" mb="xs">
        <Text fz="md" fw={500}>
          Allow cookies
        </Text>
        <CloseButton mr={-9} mt={-9} />
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

// 2. Email Newsletter Banner
function EmailBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Wait a minute...</Title>
        <Text fw={500} fz="lg" mb={5}>
          Subscribe to our newsletter!
        </Text>
        <Text fz="sm" c="dimmed">
          You will never miss important product updates, latest news and community QA sessions. Our
          newsletter is once a week, every Sunday.
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
            radius="md"
            size="md"
          />
          <Button className={classes.control} radius="md" size="md">
            Subscribe
          </Button>
        </div>
      </div>
      <div className={classes.image}>
        <div className={classes.imagePlaceholder}>
          <Text size="4rem" ta="center" c="dimmed">📧</Text>
        </div>
      </div>
    </div>
  )
}

// 3. Image Action Banner
function ImageActionBanner() {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      className={classes.card}
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80)',
      }}
    >
      <div>
        <Text className={classes.category} size="xs">
          technology
        </Text>
        <Title order={3} className={classes.cardTitle}>
          Best forests to visit in North America
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  )
}

// 4. Success Banner
function SuccessBanner() {
  return (
    <Paper withBorder radius="md" className={classes.successBanner}>
      <Group>
        <IconCheck size={24} className={classes.successIcon} />
        <div style={{ flex: 1 }}>
          <Text fw={500} className={classes.successTitle}>
            Payment completed successfully
          </Text>
          <Text size="sm" c="dimmed">
            Your order has been processed and will be shipped within 2-3 business days.
          </Text>
        </div>
        <CloseButton />
      </Group>
    </Paper>
  )
}

// 5. Warning Banner
function WarningBanner() {
  return (
    <Paper withBorder radius="md" className={classes.warningBanner}>
      <Group>
        <IconAlertTriangle size={24} className={classes.warningIcon} />
        <div style={{ flex: 1 }}>
          <Text fw={500} className={classes.warningTitle}>
            Your trial expires in 3 days
          </Text>
          <Text size="sm" c="dimmed">
            Upgrade your account to continue using all features. 
            <Anchor size="sm" ml={4}>Upgrade now</Anchor>
          </Text>
        </div>
        <CloseButton />
      </Group>
    </Paper>
  )
}

// 6. Info Banner
function InfoBanner() {
  return (
    <Paper withBorder radius="md" className={classes.infoBanner}>
      <Group>
        <IconInfoCircle size={24} className={classes.infoIcon} />
        <div style={{ flex: 1 }}>
          <Text fw={500} className={classes.infoTitle}>
            New features available
          </Text>
          <Text size="sm" c="dimmed">
            We've added some exciting new features to improve your experience.
            <Anchor size="sm" ml={4}>Learn more</Anchor>
          </Text>
        </div>
        <CloseButton />
      </Group>
    </Paper>
  )
}

// 7. Promotion Banner
function PromotionBanner() {
  return (
    <div className={classes.promotionBanner}>
      <Container size="lg">
        <Group justify="space-between" align="center">
          <div>
            <Text fw={600} size="lg" c="white">
              🎉 Special Offer: Get 50% off your first month!
            </Text>
            <Text size="sm" c="white" opacity={0.9}>
              Use code WELCOME50 at checkout. Offer expires soon.
            </Text>
          </div>
          <Group>
            <Button variant="white" color="dark" size="sm">
              Claim Offer
            </Button>
            <ActionIcon variant="transparent" c="white">
              <IconX size={16} />
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </div>
  )
}

// 8. App Download Banner
function AppDownloadBanner() {
  return (
    <Paper withBorder p="md" radius="md" className={classes.appBanner}>
      <Group>
        <div className={classes.appIcon}>
          <Text size="2rem">📱</Text>
        </div>
        <div style={{ flex: 1 }}>
          <Text fw={500} size="md">
            Get our mobile app
          </Text>
          <Text size="sm" c="dimmed">
            Download the app for a better experience on your mobile device.
          </Text>
        </div>
        <Group gap="xs">
          <Button size="xs" variant="light">
            Download
          </Button>
          <CloseButton size="sm" />
        </Group>
      </Group>
    </Paper>
  )
}

export default function Banners() {
  return (
    <Page title="Banners">
      <PageHeader
        title="Banners"
      />
      
      <Stack gap="xl" mt="xl">
        <div>
          <Title order={3} mb="md">Cookies Banner</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Cookie consent banner with privacy information and action buttons for user preferences.
          </Text>
          <CookiesBanner />
        </div>

        <div>
          <Title order={3} mb="md">Email Newsletter Banner</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Newsletter subscription banner with email input and compelling call-to-action.
          </Text>
          <EmailBanner />
        </div>

        <div>
          <Title order={3} mb="md">Image Action Banner</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Banner with background image, category tag, and prominent action button.
          </Text>
          <Box maw={400}>
            <ImageActionBanner />
          </Box>
        </div>

        <div>
          <Title order={3} mb="md">Status Banners</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Various status and notification banners for different message types.
          </Text>
          <Stack gap="md">
            <SuccessBanner />
            <WarningBanner />
            <InfoBanner />
          </Stack>
        </div>

        <div>
          <Title order={3} mb="md">Promotion Banner</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Full-width promotional banner with offer details and call-to-action.
          </Text>
          <PromotionBanner />
        </div>

        <div>
          <Title order={3} mb="md">App Download Banner</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Mobile app promotion banner with download call-to-action and dismissal option.
          </Text>
          <AppDownloadBanner />
        </div>
      </Stack>
    </Page>
  )
}