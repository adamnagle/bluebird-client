import { 
  Container, 
  Title, 
  Text, 
  Stack, 
  Card,
  Group,
  Image,
  Button,
  Paper,
  Badge,
  Avatar,
  ActionIcon,
  Divider,
  rem
} from '@mantine/core'
import { 
  IconStarFilled,
  IconHeart,
  IconShare,
  IconBookmark,
  IconChevronLeft,
  IconChevronRight,
  IconDots
} from '@tabler/icons-react'
import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'
import { Page, PageHeader } from '@/components'
import classes from './carousels.module.css'

// 1. Image Carousel Card
function ImageCarouselCard() {
  const images = [
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
  ]

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ))

  return (
    <div>
      <Title order={4} mb="md">Image Carousel Card</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Carousel component integrated within a card layout, perfect for product galleries and image showcases.
      </Text>
      
      <Card radius="md" withBorder padding="xl" maw={400}>
        <Card.Section>
          <Carousel
            withIndicators
            emblaOptions={{ loop: true }}
            classNames={{
              root: classes.carousel,
              controls: classes.carouselControls,
              indicator: classes.carouselIndicator,
            }}
          >
            {slides}
          </Carousel>
        </Card.Section>

        <Group justify="space-between" mt="lg">
          <Text fw={500} fz="lg">
            Forde, Norway
          </Text>

          <Group gap={5}>
            <IconStarFilled size={16} color="var(--mantine-color-yellow-6)" />
            <Text fz="sm" fw={600}>
              4.78
            </Text>
          </Group>
        </Group>

        <Text fz="sm" c="dimmed" mt="sm">
          Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel close to nature in
          ultimate comfort. Enjoy the view of the epic mountain range.
        </Text>

        <Group justify="space-between" mt="md">
          <div>
            <Text fz="xl" span fw={500} className={classes.price}>
              $397
            </Text>
            <Text span fz="sm" c="dimmed">
              {' '}
              / night
            </Text>
          </div>

          <Button radius="md">Book now</Button>
        </Group>
      </Card>
    </div>
  )
}

// 2. Cards Carousel
interface CardProps {
  image: string
  title: string
  category: string
}

function CarouselCard({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  )
}

const cardsData = [
  {
    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image: 'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
]

function CardsCarousel() {
  const mobile = useMediaQuery('(max-width: 768px)')
  
  const slides = cardsData.map((item) => (
    <Carousel.Slide key={item.title}>
      <CarouselCard {...item} />
    </Carousel.Slide>
  ))

  return (
    <div>
      <Title order={4} mb="md">Cards Carousel</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Horizontal scrolling carousel for displaying multiple cards with rich content and background images.
      </Text>
      
      <Carousel
        slideSize={{ base: '100%', sm: '50%' }}
        slideGap={2}
        emblaOptions={{ align: 'start', slidesToScroll: mobile ? 1 : 2 }}
        controlsOffset="xs"
        controlSize={28}
      >
        {slides}
      </Carousel>
    </div>
  )
}

// 3. Product Carousel
const productData = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 199,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 299,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
    rating: 4.8,
    reviews: 256
  },
  {
    id: 3,
    name: 'Laptop Stand',
    price: 89,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80',
    rating: 4.3,
    reviews: 89
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: 149,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80',
    rating: 4.6,
    reviews: 192
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    price: 129,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&q=80',
    rating: 4.7,
    reviews: 145
  }
]

function ProductCarousel() {
  const mobile = useMediaQuery('(max-width: 768px)')

  const slides = productData.map((product) => (
    <Carousel.Slide key={product.id}>
      <Card shadow="sm" padding="lg" radius="md" withBorder h={350}>
        <Card.Section>
          <Image
            src={product.image}
            height={160}
            alt={product.name}
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{product.name}</Text>
          <ActionIcon variant="subtle" color="red">
            <IconHeart size={18} />
          </ActionIcon>
        </Group>

        <Group gap="xs" mb="md">
          <Group gap={4}>
            <IconStarFilled size={14} color="var(--mantine-color-yellow-6)" />
            <Text size="sm" fw={500}>{product.rating}</Text>
          </Group>
          <Text size="sm" c="dimmed">({product.reviews} reviews)</Text>
        </Group>

        <Group justify="space-between" align="center">
          <Text size="xl" fw={700} c="blue">
            ${product.price}
          </Text>
          <Button size="xs" radius="md">
            Add to cart
          </Button>
        </Group>
      </Card>
    </Carousel.Slide>
  ))

  return (
    <div>
      <Title order={4} mb="md">Product Carousel</Title>
      <Text size="sm" c="dimmed" mb="lg">
        E-commerce style product carousel with ratings, pricing, and interactive elements.
      </Text>
      
      <Carousel
        slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
        slideGap="md"
        emblaOptions={{ align: 'start', slidesToScroll: mobile ? 1 : 3 }}
        controlsOffset="xs"
        controlSize={28}
      >
        {slides}
      </Carousel>
    </div>
  )
}

// 4. Testimonial Carousel
const testimonialData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&q=80',
    content: 'This product has completely transformed how we work. The team productivity has increased by 40% since we started using it.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Designer, Creative Studio',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    content: 'The user interface is incredibly intuitive. Even our non-technical team members picked it up immediately.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager, StartupXYZ',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    content: 'Outstanding customer support and regular feature updates. This is exactly what we needed for our growing team.',
    rating: 4
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'CTO, DevCorp',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    content: 'The API integration was seamless and the documentation is top-notch. Highly recommend for any development team.',
    rating: 5
  }
]

function TestimonialCarousel() {
  const slides = testimonialData.map((testimonial) => (
    <Carousel.Slide key={testimonial.id}>
      <Card shadow="sm" padding="xl" radius="md" withBorder h={280}>
        <Group gap="md" mb="lg">
          <Avatar src={testimonial.avatar} size={60} radius="xl" />
          <div>
            <Text fw={500}>{testimonial.name}</Text>
            <Text size="sm" c="dimmed">{testimonial.role}</Text>
            <Group gap={2} mt={4}>
              {Array.from({ length: 5 }).map((_, index) => (
                <IconStarFilled
                  key={index}
                  size={14}
                  color={index < testimonial.rating ? 'var(--mantine-color-yellow-6)' : 'var(--mantine-color-gray-3)'}
                />
              ))}
            </Group>
          </div>
        </Group>
        
        <Text size="sm" style={{ lineHeight: 1.6 }}>
          "{testimonial.content}"
        </Text>
      </Card>
    </Carousel.Slide>
  ))

  return (
    <div>
      <Title order={4} mb="md">Testimonial Carousel</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Customer testimonials carousel with avatars, ratings, and rotating reviews.
      </Text>
      
      <Carousel
        slideSize={{ base: '100%', md: '50%' }}
        slideGap="lg"
        emblaOptions={{ align: 'start', loop: true }}
        controlsOffset="xs"
        controlSize={28}
        withIndicators
      >
        {slides}
      </Carousel>
    </div>
  )
}

export default function Carousels() {
  return (
    <Page title="Carousels">
      <PageHeader
        title="Carousels"
      />
      
      <Container size="xl" mt="xl">
        <Text size="sm" c="dimmed" mb="xl">
          Carousel and slider components for showcasing content in an interactive slideshow format.
        </Text>
        
        <Stack gap="xl">
          <ImageCarouselCard />
          <CardsCarousel />
          <ProductCarousel />
          <TestimonialCarousel />
        </Stack>
      </Container>
    </Page>
  )
}