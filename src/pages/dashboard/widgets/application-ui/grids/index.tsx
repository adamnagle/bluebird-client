import { Container, Title, Text, Grid, Skeleton, SimpleGrid, Paper } from '@mantine/core'
import { Page, PageHeader } from '@/components'

function GridAsymmetrical() {
  const child = <Skeleton height={140} radius="md" animate={false} />

  return (
    <Container my="md">
      <Grid>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
      </Grid>
    </Container>
  )
}

function SimpleGridExample() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md">
      <Paper shadow="xs" p="md" withBorder>
        <Text size="sm" c="dimmed">Grid Item 1</Text>
        <Text fw={500}>Content goes here</Text>
      </Paper>
      <Paper shadow="xs" p="md" withBorder>
        <Text size="sm" c="dimmed">Grid Item 2</Text>
        <Text fw={500}>Content goes here</Text>
      </Paper>
      <Paper shadow="xs" p="md" withBorder>
        <Text size="sm" c="dimmed">Grid Item 3</Text>
        <Text fw={500}>Content goes here</Text>
      </Paper>
      <Paper shadow="xs" p="md" withBorder>
        <Text size="sm" c="dimmed">Grid Item 4</Text>
        <Text fw={500}>Content goes here</Text>
      </Paper>
    </SimpleGrid>
  )
}

function ResponsiveGrid() {
  return (
    <Grid gutter="md">
      <Grid.Col span={12}>
        <Paper p="md" withBorder>
          <Text fw={500}>Full Width Header</Text>
        </Paper>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
        <Paper p="md" withBorder h={120}>
          <Text size="sm">Sidebar</Text>
        </Paper>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
        <Paper p="md" withBorder h={120}>
          <Text size="sm">Main Content</Text>
        </Paper>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 12, lg: 3 }}>
        <Paper p="md" withBorder h={120}>
          <Text size="sm">Aside</Text>
        </Paper>
      </Grid.Col>
    </Grid>
  )
}

export default function Grids() {
  return (
    <Page title="Grids">
      <PageHeader
        title="Grids"
      />
      
      <Container size="xl" mt="xl">
        <Text size="sm" c="dimmed" mb="lg">
          Grid components with various layout options and responsive configurations.
        </Text>

        <Title order={3} mb="md">Asymmetrical Grid</Title>
        <Text size="sm" c="dimmed" mb="lg">Grid with different column sizes and responsive behavior</Text>
        <GridAsymmetrical />

        <Title order={3} mb="md" mt="xl">Simple Grid</Title>
        <Text size="sm" c="dimmed" mb="lg">Basic responsive grid with equal columns</Text>
        <SimpleGridExample />

        <Title order={3} mb="md" mt="xl">Responsive Grid Layout</Title>
        <Text size="sm" c="dimmed" mb="lg">Complex responsive grid with varying column spans</Text>
        <ResponsiveGrid />
      </Container>
    </Page>
  )
}