import { 
  Container, 
  Title, 
  Text, 
  Stack, 
  Table,
  ScrollArea,
  TextInput,
  UnstyledButton,
  Group,
  Center,
  keys,
  Avatar,
  Checkbox,
  Anchor,
  Progress,
  ActionIcon,
  Badge,
  Button
} from '@mantine/core'
import { 
  IconChevronDown, 
  IconChevronUp, 
  IconSearch, 
  IconSelector,
  IconEdit,
  IconTrash,
  IconEye
} from '@tabler/icons-react'
import { Page, PageHeader } from '@/components'
import { useState } from 'react'
import cx from 'clsx'
import classes from './tables.module.css'

// 1. Sortable Table Component
interface RowData {
  name: string
  email: string
  company: string
}

interface ThProps {
  children: React.ReactNode
  reversed: boolean
  sorted: boolean
  onSort: () => void
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon size={16} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  )
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim()
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  )
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload

  if (!sortBy) {
    return filterData(data, payload.search)
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy])
      }
      return a[sortBy].localeCompare(b[sortBy])
    }),
    payload.search
  )
}

const tableData = [
  {
    name: 'Athena Weissnat',
    company: 'Little - Rippin',
    email: 'Elouise.Prohaska@yahoo.com',
  },
  {
    name: 'Deangelo Runolfsson',
    company: 'Greenfelder - Krajcik',
    email: 'Kadin_Trantow87@yahoo.com',
  },
  {
    name: 'Danny Carter',
    company: 'Kohler and Sons',
    email: 'Marina3@hotmail.com',
  },
  {
    name: 'Trace Tremblay PhD',
    company: 'Crona, Aufderhar and Senger',
    email: 'Antonina.Pouros@yahoo.com',
  },
  {
    name: 'Derek Dibbert',
    company: 'Gottlieb LLC',
    email: 'Abagail29@hotmail.com',
  },
  {
    name: 'Viola Bernhard',
    company: 'Funk, Rohan and Kreiger',
    email: 'Jamie23@hotmail.com',
  },
]

function SortableTable() {
  const [search, setSearch] = useState('')
  const [sortedData, setSortedData] = useState(tableData)
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null)
  const [reverseSortDirection, setReverseSortDirection] = useState(false)

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false
    setReverseSortDirection(reversed)
    setSortBy(field)
    setSortedData(sortData(tableData, { sortBy: field, reversed, search }))
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearch(value)
    setSortedData(sortData(tableData, { sortBy, reversed: reverseSortDirection, search: value }))
  }

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.email}</Table.Td>
      <Table.Td>{row.company}</Table.Td>
    </Table.Tr>
  ))

  return (
    <div>
      <Title order={4} mb="md">Sortable Table</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Interactive table with sorting functionality and search capability across all columns.
      </Text>
      
      <ScrollArea>
        <TextInput
          placeholder="Search by any field"
          mb="md"
          leftSection={<IconSearch size={16} stroke={1.5} />}
          value={search}
          onChange={handleSearchChange}
        />
        <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
          <Table.Thead>
            <Table.Tr>
              <Th
                sorted={sortBy === 'name'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('name')}
              >
                Name
              </Th>
              <Th
                sorted={sortBy === 'email'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('email')}
              >
                Email
              </Th>
              <Th
                sorted={sortBy === 'company'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('company')}
              >
                Company
              </Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.length > 0 ? (
              rows
            ) : (
              <Table.Tr>
                <Table.Td colSpan={Object.keys(tableData[0]).length}>
                  <Text fw={500} ta="center">
                    Nothing found
                  </Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </div>
  )
}

// 2. Table with Selection
const selectionData = [
  {
    id: '1',
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    name: 'Robert Wolfkisser',
    job: 'Engineer',
    email: 'rob_wolf@gmail.com',
  },
  {
    id: '2',
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    name: 'Jill Jailbreaker',
    job: 'Engineer',
    email: 'jj@breaker.com',
  },
  {
    id: '3',
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    name: 'Henry Silkeater',
    job: 'Designer',
    email: 'henry@silkeater.io',
  },
  {
    id: '4',
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    name: 'Bill Horsefighter',
    job: 'Designer',
    email: 'bhorsefighter@gmail.com',
  },
  {
    id: '5',
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    job: 'Manager',
    email: 'jeremy@foot.dev',
  },
]

function SelectionTable() {
  const [selection, setSelection] = useState(['1'])
  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    )
  const toggleAll = () =>
    setSelection((current) => (current.length === selectionData.length ? [] : selectionData.map((item) => item.id)))

  const rows = selectionData.map((item) => {
    const selected = selection.includes(item.id)
    return (
      <Table.Tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <Table.Td>
          <Checkbox checked={selection.includes(item.id)} onChange={() => toggleRow(item.id)} />
        </Table.Td>
        <Table.Td>
          <Group gap="sm">
            <Avatar size={26} src={item.avatar} radius={26} />
            <Text size="sm" fw={500}>
              {item.name}
            </Text>
          </Group>
        </Table.Td>
        <Table.Td>{item.email}</Table.Td>
        <Table.Td>{item.job}</Table.Td>
      </Table.Tr>
    )
  })

  return (
    <div>
      <Title order={4} mb="md">Table with Selection</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Table with row selection capabilities, including individual and bulk selection options.
      </Text>
      
      <ScrollArea>
        <Table miw={800} verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th w={40}>
                <Checkbox
                  onChange={toggleAll}
                  checked={selection.length === selectionData.length}
                  indeterminate={selection.length > 0 && selection.length !== selectionData.length}
                />
              </Table.Th>
              <Table.Th>User</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Job</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </div>
  )
}

// 3. Reviews Table with Progress
const reviewsData = [
  {
    title: 'Foundation',
    author: 'Isaac Asimov',
    year: 1951,
    reviews: { positive: 2223, negative: 259 },
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    year: 1818,
    reviews: { positive: 5677, negative: 1265 },
  },
  {
    title: 'Solaris',
    author: 'Stanislaw Lem',
    year: 1961,
    reviews: { positive: 3487, negative: 1845 },
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    year: 1965,
    reviews: { positive: 8576, negative: 663 },
  },
  {
    title: 'The Left Hand of Darkness',
    author: 'Ursula K. Le Guin',
    year: 1969,
    reviews: { positive: 6631, negative: 993 },
  },
]

function ReviewsTable() {
  const rows = reviewsData.map((row) => {
    const totalReviews = row.reviews.negative + row.reviews.positive
    const positiveReviews = (row.reviews.positive / totalReviews) * 100
    const negativeReviews = (row.reviews.negative / totalReviews) * 100

    return (
      <Table.Tr key={row.title}>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.title}
          </Anchor>
        </Table.Td>
        <Table.Td>{row.year}</Table.Td>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.author}
          </Anchor>
        </Table.Td>
        <Table.Td>{Intl.NumberFormat().format(totalReviews)}</Table.Td>
        <Table.Td>
          <Group justify="space-between">
            <Text fz="xs" c="teal" fw={700}>
              {positiveReviews.toFixed(0)}%
            </Text>
            <Text fz="xs" c="red" fw={700}>
              {negativeReviews.toFixed(0)}%
            </Text>
          </Group>
          <Progress.Root>
            <Progress.Section
              className={classes.progressSection}
              value={positiveReviews}
              color="teal"
            />
            <Progress.Section
              className={classes.progressSection}
              value={negativeReviews}
              color="red"
            />
          </Progress.Root>
        </Table.Td>
      </Table.Tr>
    )
  })

  return (
    <div>
      <Title order={4} mb="md">Reviews Table with Progress</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Data table featuring progress bars and statistical information with interactive elements.
      </Text>
      
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="xs">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Book title</Table.Th>
              <Table.Th>Year</Table.Th>
              <Table.Th>Author</Table.Th>
              <Table.Th>Reviews</Table.Th>
              <Table.Th>Reviews distribution</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </div>
  )
}

// 4. Action Table
const actionTableData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'inactive'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Moderator',
    status: 'active'
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice@example.com',
    role: 'User',
    status: 'pending'
  }
]

function ActionTable() {
  const [data, setData] = useState(actionTableData)

  const handleDelete = (id: number) => {
    setData(data.filter(item => item.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'green'
      case 'inactive': return 'red'
      case 'pending': return 'yellow'
      default: return 'gray'
    }
  }

  const rows = data.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>{item.name}</Table.Td>
      <Table.Td>{item.email}</Table.Td>
      <Table.Td>{item.role}</Table.Td>
      <Table.Td>
        <Badge color={getStatusColor(item.status)} variant="light">
          {item.status}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ActionIcon variant="subtle" color="blue">
            <IconEye size={16} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="gray">
            <IconEdit size={16} />
          </ActionIcon>
          <ActionIcon 
            variant="subtle" 
            color="red"
            onClick={() => handleDelete(item.id)}
          >
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ))

  return (
    <div>
      <Title order={4} mb="md">Action Table</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Table with action buttons, status badges, and interactive row operations.
      </Text>
      
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Role</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      
      {data.length === 0 && (
        <Group justify="center" p="xl">
          <Text c="dimmed">No data available</Text>
          <Button size="sm" onClick={() => setData(actionTableData)}>
            Restore Data
          </Button>
        </Group>
      )}
    </div>
  )
}

export default function Tables() {
  return (
    <Page title="Tables">
      <PageHeader
        title="Tables"
      />
      
      <Container size="xl" mt="xl">
        <Text size="sm" c="dimmed" mb="xl">
          Table components for displaying structured data with sorting, filtering, and pagination.
        </Text>
        
        <Stack gap="xl">
          <SortableTable />
          <SelectionTable />
          <ReviewsTable />
          <ActionTable />
        </Stack>
      </Container>
    </Page>
  )
}