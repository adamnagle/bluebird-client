import { 
  Card,
  Container,
  Stack,
  Text,
  Title,
  SimpleGrid,
  Group,
  ThemeIcon,
  RingProgress,
  Center,
  Progress,
  Paper,
  Flex,
  ActionIcon
} from '@mantine/core'
import { 
  IconTrendingUp,
  IconTrendingDown,
  IconUsers,
  IconShoppingCart,
  IconCoin,
  IconEye,
  IconClick,
  IconDownload,
  IconHeart,
  IconStar,
  IconArrowUpRight,
  IconArrowDownRight
} from '@tabler/icons-react'
import { Page, PageHeader } from '@/components'
import classes from './index.module.css'

// 1. Simple Stat Card
function SimpleStatCard({ title, value, icon, color, trend, trendValue }: any) {
  const Icon = icon
  const TrendIcon = trend === 'up' ? IconArrowUpRight : IconArrowDownRight
  
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between">
        <div>
          <Text size="sm" c="dimmed" mb={5}>
            {title}
          </Text>
          <Text size="xl" fw={700}>
            {value}
          </Text>
          {trendValue && (
            <Group gap="xs" mt="xs">
              <TrendIcon size={16} color={trend === 'up' ? 'green' : 'red'} />
              <Text size="sm" c={trend === 'up' ? 'green' : 'red'}>
                {trendValue}%
              </Text>
            </Group>
          )}
        </div>
        <ThemeIcon color={color} size={60} radius="md">
          <Icon size={30} />
        </ThemeIcon>
      </Group>
    </Card>
  )
}

// 2. Ring Progress Stat Card
function RingProgressStatCard({ title, value, percentage, color }: any) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.statCard}>
      <Group>
        <RingProgress
          size={80}
          roundCaps
          thickness={8}
          sections={[{ value: percentage, color }]}
          label={
            <Center>
              <Text size="xs" fw={700}>
                {percentage}%
              </Text>
            </Center>
          }
        />
        <div>
          <Text size="sm" c="dimmed">
            {title}
          </Text>
          <Text size="xl" fw={700}>
            {value}
          </Text>
        </div>
      </Group>
    </Card>
  )
}

// 3. Progress Stat Card
function ProgressStatCard({ title, value, progress, target, color }: any) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text size="sm" c="dimmed" mb={5}>
        {title}
      </Text>
      <Text size="xl" fw={700} mb="md">
        {value}
      </Text>
      <Progress value={progress} color={color} mb="xs" />
      <Group justify="space-between">
        <Text size="xs" c="dimmed">
          Progress: {progress}%
        </Text>
        <Text size="xs" c="dimmed">
          Target: {target}
        </Text>
      </Group>
    </Card>
  )
}

// 4. Detailed Stat Card
function DetailedStatCard({ title, value, subtitle, change, changeType, icon, color }: any) {
  const Icon = icon
  
  return (
    <Paper shadow="sm" p="lg" radius="md" className={classes.detailedCard}>
      <Group justify="space-between" mb="md">
        <ThemeIcon color={color} variant="light" size={40}>
          <Icon size={20} />
        </ThemeIcon>
        <Group gap="xs">
          <Text size="sm" fw={500} c={changeType === 'positive' ? 'green' : 'red'}>
            {change}
          </Text>
          {changeType === 'positive' ? (
            <IconTrendingUp size={16} color="green" />
          ) : (
            <IconTrendingDown size={16} color="red" />
          )}
        </Group>
      </Group>
      
      <Text size="sm" c="dimmed" mb={5}>
        {title}
      </Text>
      <Text size="xl" fw={700} mb="xs">
        {value}
      </Text>
      <Text size="xs" c="dimmed">
        {subtitle}
      </Text>
    </Paper>
  )
}

// 5. Compact Stat Card
function CompactStatCard({ title, value, icon, color }: any) {
  const Icon = icon
  
  return (
    <Card shadow="sm" p="md" radius="md" withBorder className={classes.compactCard}>
      <Flex align="center" gap="sm">
        <ThemeIcon color={color} size={36} variant="light">
          <Icon size={18} />
        </ThemeIcon>
        <div>
          <Text size="xs" c="dimmed">
            {title}
          </Text>
          <Text size="lg" fw={700}>
            {value}
          </Text>
        </div>
      </Flex>
    </Card>
  )
}

export default function Stats() {
  return (
    <Page title="Stats">
      <PageHeader
        title="Stats Components"
      />
      
      <Container size="xl" mt="xl">
        <Stack gap="xl">
          <div>
            <Title order={4} mb="md">Simple Stats Cards</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Basic statistical cards with icons, values, and trend indicators.
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
              <SimpleStatCard
                title="Total Users"
                value="12,543"
                icon={IconUsers}
                color="blue"
                trend="up"
                trendValue="12.5"
              />
              <SimpleStatCard
                title="Sales"
                value="$45,210"
                icon={IconShoppingCart}
                color="green"
                trend="up"
                trendValue="8.2"
              />
              <SimpleStatCard
                title="Revenue"
                value="$89,432"
                icon={IconCoin}
                color="yellow"
                trend="down"
                trendValue="3.1"
              />
              <SimpleStatCard
                title="Page Views"
                value="234K"
                icon={IconEye}
                color="violet"
                trend="up"
                trendValue="15.7"
              />
            </SimpleGrid>
          </div>

          <div>
            <Title order={4} mb="md">Ring Progress Stats</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Statistical cards with circular progress indicators showing completion percentages.
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
              <RingProgressStatCard
                title="Project Completion"
                value="847"
                percentage={75}
                color="blue"
              />
              <RingProgressStatCard
                title="Goal Achievement"
                value="92%"
                percentage={92}
                color="green"
              />
              <RingProgressStatCard
                title="User Engagement"
                value="68%"
                percentage={68}
                color="orange"
              />
            </SimpleGrid>
          </div>

          <div>
            <Title order={4} mb="md">Progress Stats</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Stats cards with linear progress bars showing progress towards targets.
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
              <ProgressStatCard
                title="Monthly Sales"
                value="$32,450"
                progress={65}
                target="$50,000"
                color="blue"
              />
              <ProgressStatCard
                title="New Customers"
                value="1,234"
                progress={82}
                target="1,500"
                color="green"
              />
              <ProgressStatCard
                title="Support Tickets"
                value="89"
                progress={45}
                target="200"
                color="red"
              />
            </SimpleGrid>
          </div>

          <div>
            <Title order={4} mb="md">Detailed Stats Cards</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Comprehensive stat cards with detailed information and change indicators.
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
              <DetailedStatCard
                title="Website Traffic"
                value="45,210"
                subtitle="Unique visitors this month"
                change="+12.5%"
                changeType="positive"
                icon={IconEye}
                color="blue"
              />
              <DetailedStatCard
                title="Click Through Rate"
                value="3.24%"
                subtitle="Average CTR this week"
                change="+0.8%"
                changeType="positive"
                icon={IconClick}
                color="green"
              />
              <DetailedStatCard
                title="Downloads"
                value="8,432"
                subtitle="Total downloads"
                change="-5.2%"
                changeType="negative"
                icon={IconDownload}
                color="orange"
              />
              <DetailedStatCard
                title="Favorites"
                value="2,341"
                subtitle="Items favorited"
                change="+18.7%"
                changeType="positive"
                icon={IconHeart}
                color="red"
              />
            </SimpleGrid>
          </div>

          <div>
            <Title order={4} mb="md">Compact Stats</Title>
            <Text size="sm" c="dimmed" mb="lg">
              Small, compact statistical cards perfect for sidebars or dense layouts.
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 6 }} spacing="md">
              <CompactStatCard
                title="Users"
                value="1.2K"
                icon={IconUsers}
                color="blue"
              />
              <CompactStatCard
                title="Sales"
                value="$45K"
                icon={IconShoppingCart}
                color="green"
              />
              <CompactStatCard
                title="Views"
                value="234K"
                icon={IconEye}
                color="violet"
              />
              <CompactStatCard
                title="Clicks"
                value="5.7K"
                icon={IconClick}
                color="orange"
              />
              <CompactStatCard
                title="Stars"
                value="892"
                icon={IconStar}
                color="yellow"
              />
              <CompactStatCard
                title="Likes"
                value="1.4K"
                icon={IconHeart}
                color="red"
              />
            </SimpleGrid>
          </div>
        </Stack>
      </Container>
    </Page>
  )
}