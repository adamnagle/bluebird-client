import { 
  AspectRatio, 
  Button, 
  Card, 
  Container, 
  Grid, 
  Image, 
  Overlay, 
  SimpleGrid, 
  Skeleton, 
  Stack, 
  Text, 
  Title,
  px,
  useMantineTheme 
} from '@mantine/core'
import { Page, PageHeader } from '@/components'
import classes from './layouts.module.css'

// Mock data for blog articles
const blogData = [
  {
    title: 'Understanding Modern Web Development',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80',
    date: 'March 15, 2024',
    excerpt: 'Explore the latest trends and technologies shaping modern web development...'
  },
  {
    title: 'The Future of React Components',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80',
    date: 'March 12, 2024',
    excerpt: 'Learn about the evolution of React components and best practices...'
  },
  {
    title: 'Design Systems in Practice',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80',
    date: 'March 10, 2024',
    excerpt: 'How to build and maintain effective design systems for your team...'
  },
  {
    title: 'Performance Optimization Tips',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80',
    date: 'March 8, 2024',
    excerpt: 'Essential techniques for optimizing web application performance...'
  }
]

// Lead Layout - Hero with secondary content
function LeadLayout() {
  const PRIMARY_COL_HEIGHT = '300px'
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`

  return (
    <Container my="md">
      <Title order={3} mb="md">Lead Layout</Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Card padding="md" radius="md" className={classes.featuredCard}>
          <AspectRatio ratio={16/9} mb="sm">
            <Image 
              src={blogData[0].image} 
              alt={blogData[0].title}
              radius="md"
            />
          </AspectRatio>
          <Text size="xs" c="dimmed" mb="xs">{blogData[0].date}</Text>
          <Title order={4} className={classes.cardTitle}>{blogData[0].title}</Title>
          <Text size="sm" c="dimmed" mt="xs">{blogData[0].excerpt}</Text>
        </Card>
        
        <Grid gutter="md">
          <Grid.Col>
            <Card padding="sm" radius="md" h={SECONDARY_COL_HEIGHT} className={classes.smallCard}>
              <Text size="xs" c="dimmed">{blogData[1].date}</Text>
              <Title order={6} size="sm" lineClamp={2}>{blogData[1].title}</Title>
            </Card>
          </Grid.Col>
          <Grid.Col span={6}>
            <Card padding="sm" radius="md" h={SECONDARY_COL_HEIGHT} className={classes.smallCard}>
              <Text size="xs" c="dimmed">{blogData[2].date}</Text>
              <Title order={6} size="sm" lineClamp={2}>{blogData[2].title}</Title>
            </Card>
          </Grid.Col>
          <Grid.Col span={6}>
            <Card padding="sm" radius="md" h={SECONDARY_COL_HEIGHT} className={classes.smallCard}>
              <Text size="xs" c="dimmed">{blogData[3].date}</Text>
              <Title order={6} size="sm" lineClamp={2}>{blogData[3].title}</Title>
            </Card>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  )
}

// Articles Grid Layout
function ArticlesGridLayout() {
  const cards = blogData.map((article, index) => (
    <Card key={index} p="md" radius="md" component="a" href="#" className={classes.articleCard}>
      <AspectRatio ratio={16/9}>
        <Image src={article.image} radius="md" alt={article.title} />
      </AspectRatio>
      <Text className={classes.date}>{article.date}</Text>
      <Text className={classes.articleTitle}>{article.title}</Text>
      <Text size="sm" c="dimmed" mt="xs" lineClamp={2}>{article.excerpt}</Text>
    </Card>
  ))

  return (
    <Container py="xl">
      <Title order={3} mb="md">Articles Grid Layout</Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={{ base: 0, sm: 'md' }}>
        {cards}
      </SimpleGrid>
    </Container>
  )
}

// Asymmetrical Grid Layout
function AsymmetricalGridLayout() {
  return (
    <Container my="md">
      <Title order={3} mb="md">Asymmetrical Grid Layout</Title>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Card padding="md" radius="md" h={140} className={classes.gridCard}>
            <Text size="xs" c="dimmed">{blogData[0].date}</Text>
            <Title order={5} size="md" lineClamp={2}>{blogData[0].title}</Title>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <Card padding="md" radius="md" h={140} className={classes.gridCard}>
            <Text size="xs" c="dimmed">{blogData[1].date}</Text>
            <Title order={5} size="md" lineClamp={2}>{blogData[1].title}</Title>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <Card padding="md" radius="md" h={140} className={classes.gridCard}>
            <Text size="xs" c="dimmed">{blogData[2].date}</Text>
            <Title order={5} size="md" lineClamp={2}>{blogData[2].title}</Title>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Card padding="md" radius="md" h={140} className={classes.gridCard}>
            <Text size="xs" c="dimmed">{blogData[3].date}</Text>
            <Title order={5} size="md" lineClamp={2}>{blogData[3].title}</Title>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

// Sub-grid Stack Layout
function SubgridStackLayout() {
  const theme = useMantineTheme()
  const BASE_HEIGHT = 280
  const getSubHeight = (children: number, spacing: number) =>
    BASE_HEIGHT / children - spacing * ((children - 1) / children)

  return (
    <Container my="md">
      <Title order={3} mb="md">Sub-grid Stack Layout</Title>
      <SimpleGrid cols={{ base: 1, xs: 4 }}>
        <Card padding="md" radius="md" h={BASE_HEIGHT} className={classes.stackCard}>
          <AspectRatio ratio={16/9} mb="sm">
            <Image src={blogData[0].image} radius="md" alt={blogData[0].title} />
          </AspectRatio>
          <Text size="xs" c="dimmed">{blogData[0].date}</Text>
          <Title order={5} size="sm" lineClamp={2}>{blogData[0].title}</Title>
        </Card>
        
        <Stack>
          <Card 
            padding="sm" 
            radius="md" 
            h={getSubHeight(2, px(theme.spacing.md) as number)} 
            className={classes.stackCard}
          >
            <Text size="xs" c="dimmed">{blogData[1].date}</Text>
            <Title order={6} size="xs" lineClamp={2}>{blogData[1].title}</Title>
          </Card>
          <Card 
            padding="sm" 
            radius="md" 
            h={getSubHeight(2, px(theme.spacing.md) as number)} 
            className={classes.stackCard}
          >
            <Text size="xs" c="dimmed">{blogData[2].date}</Text>
            <Title order={6} size="xs" lineClamp={2}>{blogData[2].title}</Title>
          </Card>
        </Stack>
        
        <Stack>
          <Card 
            padding="xs" 
            radius="md" 
            h={getSubHeight(3, px(theme.spacing.md) as number)} 
            className={classes.stackCard}
          >
            <Text size="xs" c="dimmed">{blogData[1].date}</Text>
            <Title order={6} size="xs" lineClamp={1}>Quick Read</Title>
          </Card>
          <Card 
            padding="xs" 
            radius="md" 
            h={getSubHeight(3, px(theme.spacing.md) as number)} 
            className={classes.stackCard}
          >
            <Text size="xs" c="dimmed">{blogData[2].date}</Text>
            <Title order={6} size="xs" lineClamp={1}>Tutorial</Title>
          </Card>
          <Card 
            padding="xs" 
            radius="md" 
            h={getSubHeight(3, px(theme.spacing.md) as number)} 
            className={classes.stackCard}
          >
            <Text size="xs" c="dimmed">{blogData[3].date}</Text>
            <Title order={6} size="xs" lineClamp={1}>Guide</Title>
          </Card>
        </Stack>
        
        <Card padding="md" radius="md" h={BASE_HEIGHT} className={classes.stackCard}>
          <AspectRatio ratio={16/9} mb="sm">
            <Image src={blogData[3].image} radius="md" alt={blogData[3].title} />
          </AspectRatio>
          <Text size="xs" c="dimmed">{blogData[3].date}</Text>
          <Title order={5} size="sm" lineClamp={2}>{blogData[3].title}</Title>
        </Card>
      </SimpleGrid>
    </Container>
  )
}

// Hero Content Layout
function HeroContentLayout() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.heroContainer} size="md">
        <Title order={3} mb="md">Hero Content Layout</Title>
        <Title className={classes.heroTitle}>Featured Article</Title>
        <Text className={classes.heroDescription} size="xl" mt="xl">
          Build fully functional accessible web applications faster than ever – explore the latest 
          in modern development practices and component design patterns.
        </Text>
        <Button variant="gradient" size="xl" radius="xl" className={classes.heroControl}>
          Read More
        </Button>
      </Container>
    </div>
  )
}

export default function Layouts() {
  return (
    <Page title="Layouts">
      <PageHeader
        title="Layouts"
      />
      
      <Stack gap="xl">
        <LeadLayout />
        <ArticlesGridLayout />
        <AsymmetricalGridLayout />
        <SubgridStackLayout />
        <HeroContentLayout />
      </Stack>
    </Page>
  )
}