import { Page, PageHeader } from '@/components'
import {
  Stack,
  Title,
  Text,
  Card,
  Group,
  Image,
  Avatar,
  Badge,
  ActionIcon,
  Paper,
  Button,
  Container,
  SimpleGrid,
  AspectRatio,
  Center,
  useMantineTheme
} from '@mantine/core'
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react'
import classes from './article-cards.module.css'

// Article Card with Actions
function ArticleCard() {
  const linkProps = { href: '#', onClick: (e: React.MouseEvent) => e.preventDefault() }
  const theme = useMantineTheme()

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <a {...linkProps}>
          <Image
            src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            height={180}
            alt="Article image"
          />
        </a>
      </Card.Section>

      <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        outstanding
      </Badge>

      <Text className={classes.title} fw={500} component="a" {...linkProps}>
        Resident Evil Village review
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        Resident Evil Village is a direct sequel to 2017's Resident Evil 7, but takes a very
        different direction to its predecessor, namely the fact that this time round instead of
        fighting against various mutated zombies, you're now dealing with more occult enemies like
        werewolves and vampires.
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Avatar
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
            size={24}
            radius="xl"
            mr="xs"
          />
          <Text fz="sm" inline>
            Bill Wormeater
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart size={16} color={theme.colors.red[6]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark size={16} color={theme.colors.yellow[7]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare size={16} color={theme.colors.blue[6]} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  )
}

// Article Card with Footer
function ArticleCardFooter() {
  return (
    <Card withBorder padding="lg" radius="md" className={classes.cardFooter}>
      <Card.Section mb="sm">
        <Image
          src="https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          alt="Top 50 underrated plants for house decoration"
          height={180}
        />
      </Card.Section>

      <Badge variant="light">decorations</Badge>
      <Text className={classes.titleFooter}>Top 50 underrated plants for house decoration</Text>

      <Group mt="lg">
        <Avatar
          src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
          radius="sm"
        />
        <div>
          <Text fw={500}>Elsa Gardenowl</Text>
          <Text fz="xs" c="dimmed">
            posted 34 minutes ago
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.footerSection}>
        <Group justify="space-between">
          <Text fz="xs" c="dimmed">
            733 people liked this
          </Text>
          <Group gap={0}>
            <ActionIcon variant="subtle" color="gray">
              <IconHeart size={20} color="var(--mantine-color-red-6)" stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray">
              <IconBookmark size={20} color="var(--mantine-color-yellow-6)" stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray">
              <IconShare size={20} color="var(--mantine-color-blue-6)" stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  )
}

// Article Card with Background Image
function ArticleCardImage() {
  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.cardImage}>
      <div>
        <Text className={classes.category} size="xs">
          nature
        </Text>
        <Title order={3} className={classes.titleImage}>
          Best forests to visit in North America
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  )
}

// Article Card Vertical
function ArticleCardVertical() {
  return (
    <Card withBorder radius="md" p={0} className={classes.cardVertical}>
      <Image
        src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        className={classes.imageVertical}
        alt="Article image"
      />

      <div className={classes.bodyVertical}>
        <Text tt="uppercase" c="dimmed" fw={700} size="xs">
          technology
        </Text>
        <Text className={classes.titleVertical} mt="xs" mb="md">
          The best laptop for Frontend engineers in 2022
        </Text>
        <Group wrap="nowrap" gap="xs">
          <Group gap="xs" wrap="nowrap">
            <Avatar
              size={20}
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
            />
            <Text size="xs">Elsa Typechecker</Text>
          </Group>
          <Text size="xs" c="dimmed">
            •
          </Text>
          <Text size="xs" c="dimmed">
            Feb 6th
          </Text>
        </Group>
      </div>
    </Card>
  )
}

// Articles Cards Grid
function ArticlesCardsGrid() {
  const mockdata = [
    {
      title: 'Top 10 places to visit in Norway this summer',
      image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
      date: 'August 18, 2022',
    },
    {
      title: 'Best forests to visit in North America',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
      date: 'August 27, 2022',
    },
    {
      title: 'Hawaii beaches review: better than you think',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
      date: 'September 9, 2022',
    },
    {
      title: 'Mountains at night: 12 best locations to enjoy the view',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
      date: 'September 12, 2022',
    },
  ]

  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.cardGrid}
          onClick={(e) => e.preventDefault()}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} radius="md" alt={article.title} />
      </AspectRatio>
      <Text className={classes.dateGrid}>{article.date}</Text>
      <Text className={classes.titleGrid}>{article.title}</Text>
    </Card>
  ))

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={{ base: 0, sm: 'md' }}>
        {cards}
      </SimpleGrid>
    </Container>
  )
}

export default function ArticleCards() {
  return (
    <Page title="Article Card Components">
      <PageHeader
        title="Article Cards"
      />
      
      <Stack gap="xl" mt="xl">
        {/* Article Card with Actions */}
        <div>
          <Title order={3} mb="md">Article Card with Actions</Title>
          <Text size="sm" c="dimmed" mb="lg">Article card with rating badge, author info, and action buttons</Text>
          <Container size="sm">
            <ArticleCard />
          </Container>
        </div>

        {/* Article Card with Footer */}
        <div>
          <Title order={3} mb="md">Article Card with Footer</Title>
          <Text size="sm" c="dimmed" mb="lg">Article card with dedicated footer section containing stats and actions</Text>
          <Container size="sm">
            <ArticleCardFooter />
          </Container>
        </div>

        {/* Article Card with Background Image */}
        <div>
          <Title order={3} mb="md">Article Card with Background Image</Title>
          <Text size="sm" c="dimmed" mb="lg">Article card overlay on background image with category and title</Text>
          <Container size="sm">
            <ArticleCardImage />
          </Container>
        </div>

        {/* Article Card Vertical */}
        <div>
          <Title order={3} mb="md">Article Card Vertical</Title>
          <Text size="sm" c="dimmed" mb="lg">Compact vertical article card with image, category, and author info</Text>
          <Container size="sm">
            <ArticleCardVertical />
          </Container>
        </div>

        {/* Articles Cards Grid */}
        <div>
          <Title order={3} mb="md">Articles Cards Grid</Title>
          <Text size="sm" c="dimmed" mb="lg">Grid layout of simple article cards with images and dates</Text>
          <ArticlesCardsGrid />
        </div>
      </Stack>
    </Page>
  )
}