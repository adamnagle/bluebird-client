import { 
  Container, 
  Title, 
  Text, 
  Stack, 
  Card,
  Group,
  Table,
  ActionIcon,
  Badge,
  Avatar,
  Box
} from '@mantine/core'
import { 
  IconGripVertical,
  IconUser,
  IconMail,
  IconPhone,
  IconTrash,
  IconPlus
} from '@tabler/icons-react'
import { Page, PageHeader } from '@/components'
import { useState } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable'
import {
  CSS,
} from '@dnd-kit/utilities'
import classes from './drag-drop.module.css'

// 1. Sortable List Component
interface SortableItemProps {
  id: string
  children: React.ReactNode
}

function SortableItem({ id, children }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${classes.sortableItem} ${isDragging ? classes.isDragging : ''}`}
    >
      <div
        className={classes.dragHandle}
        {...attributes}
        {...listeners}
      >
        <IconGripVertical size={18} />
      </div>
      {children}
    </div>
  )
}

const initialItems = [
  { id: '1', name: 'Carbon', symbol: 'C', position: 6, mass: 12.011 },
  { id: '2', name: 'Nitrogen', symbol: 'N', position: 7, mass: 14.007 },
  { id: '3', name: 'Yttrium', symbol: 'Y', position: 39, mass: 88.906 },
  { id: '4', name: 'Barium', symbol: 'Ba', position: 56, mass: 137.33 },
  { id: '5', name: 'Cerium', symbol: 'Ce', position: 58, mass: 140.12 },
]

function SortableList() {
  const [items, setItems] = useState(initialItems)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over!.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <div>
      <Title order={4} mb="md">Sortable List</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Drag and drop items to reorder the list. Each item has a dedicated drag handle.
      </Text>
      
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items.map(item => item.id)} strategy={verticalListSortingStrategy}>
          <Stack gap="sm">
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id}>
                <Card withBorder padding="md" className={classes.listItem}>
                  <Group justify="space-between">
                    <div>
                      <Group gap="sm">
                        <Text fw={700} size="lg" className={classes.symbol}>
                          {item.symbol}
                        </Text>
                        <div>
                          <Text fw={500}>{item.name}</Text>
                          <Text size="sm" c="dimmed">
                            Position: {item.position} • Mass: {item.mass}
                          </Text>
                        </div>
                      </Group>
                    </div>
                  </Group>
                </Card>
              </SortableItem>
            ))}
          </Stack>
        </SortableContext>
      </DndContext>
    </div>
  )
}

// 2. Sortable Cards Grid
const cardItems = [
  { 
    id: 'card-1', 
    title: 'Task Management', 
    description: 'Organize and track your daily tasks',
    status: 'active',
    priority: 'high'
  },
  { 
    id: 'card-2', 
    title: 'Team Collaboration', 
    description: 'Work together on shared projects',
    status: 'pending',
    priority: 'medium'
  },
  { 
    id: 'card-3', 
    title: 'Data Analytics', 
    description: 'Analyze trends and generate insights',
    status: 'completed',
    priority: 'low'
  },
  { 
    id: 'card-4', 
    title: 'Customer Support', 
    description: 'Handle customer inquiries and issues',
    status: 'active',
    priority: 'high'
  },
]

function SortableCard({ id, children }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${classes.sortableCard} ${isDragging ? classes.isDragging : ''}`}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  )
}

function SortableCardsGrid() {
  const [cards, setCards] = useState(cardItems)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (active.id !== over?.id) {
      setCards((cards) => {
        const oldIndex = cards.findIndex((card) => card.id === active.id)
        const newIndex = cards.findIndex((card) => card.id === over!.id)

        return arrayMove(cards, oldIndex, newIndex)
      })
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'blue'
      case 'pending': return 'yellow'
      case 'completed': return 'green'
      default: return 'gray'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'red'
      case 'medium': return 'orange'
      case 'low': return 'green'
      default: return 'gray'
    }
  }

  return (
    <div>
      <Title order={4} mb="md">Sortable Cards</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Drag and drop cards to reorganize them. The entire card acts as a drag handle.
      </Text>
      
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={cards.map(card => card.id)} strategy={verticalListSortingStrategy}>
          <Stack gap="md">
            {cards.map((card) => (
              <SortableCard key={card.id} id={card.id}>
                <Card withBorder padding="lg" className={classes.cardItem}>
                  <Group justify="space-between" mb="md">
                    <Text fw={600} size="lg">{card.title}</Text>
                    <Group gap="xs">
                      <Badge color={getStatusColor(card.status)} size="sm">
                        {card.status}
                      </Badge>
                      <Badge color={getPriorityColor(card.priority)} variant="outline" size="sm">
                        {card.priority}
                      </Badge>
                    </Group>
                  </Group>
                  <Text size="sm" c="dimmed">
                    {card.description}
                  </Text>
                </Card>
              </SortableCard>
            ))}
          </Stack>
        </SortableContext>
      </DndContext>
    </div>
  )
}

// 3. Sortable Table Rows
const tableData = [
  { 
    id: 'user-1', 
    name: 'John Doe', 
    email: 'john@example.com', 
    role: 'Admin',
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png'
  },
  { 
    id: 'user-2', 
    name: 'Jane Smith', 
    email: 'jane@example.com', 
    role: 'User',
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png'
  },
  { 
    id: 'user-3', 
    name: 'Bob Johnson', 
    email: 'bob@example.com', 
    role: 'Moderator',
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png'
  },
  { 
    id: 'user-4', 
    name: 'Alice Brown', 
    email: 'alice@example.com', 
    role: 'User',
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png'
  },
]

function SortableTableRow({ id, children }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <Table.Tr
      ref={setNodeRef}
      style={style}
      className={isDragging ? classes.isDragging : ''}
    >
      <Table.Td>
        <div
          className={classes.tableDragHandle}
          {...attributes}
          {...listeners}
        >
          <IconGripVertical size={16} />
        </div>
      </Table.Td>
      {children}
    </Table.Tr>
  )
}

function SortableTable() {
  const [users, setUsers] = useState(tableData)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (active.id !== over?.id) {
      setUsers((users) => {
        const oldIndex = users.findIndex((user) => user.id === active.id)
        const newIndex = users.findIndex((user) => user.id === over!.id)

        return arrayMove(users, oldIndex, newIndex)
      })
    }
  }

  return (
    <div>
      <Title order={4} mb="md">Sortable Table</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Reorder table rows by dragging the grip handle in the first column.
      </Text>
      
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <Table withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th w={50}></Table.Th>
              <Table.Th>User</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Role</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <SortableContext items={users.map(user => user.id)} strategy={verticalListSortingStrategy}>
              {users.map((user) => (
                <SortableTableRow key={user.id} id={user.id}>
                  <Table.Td>
                    <Group gap="sm">
                      <Avatar src={user.avatar} size={30} radius="xl" />
                      <Text fw={500} size="sm">{user.name}</Text>
                    </Group>
                  </Table.Td>
                  <Table.Td>{user.email}</Table.Td>
                  <Table.Td>
                    <Badge variant="light" size="sm">
                      {user.role}
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    <Group gap="xs">
                      <ActionIcon variant="subtle" size="sm">
                        <IconMail size={14} />
                      </ActionIcon>
                      <ActionIcon variant="subtle" size="sm">
                        <IconPhone size={14} />
                      </ActionIcon>
                      <ActionIcon variant="subtle" color="red" size="sm">
                        <IconTrash size={14} />
                      </ActionIcon>
                    </Group>
                  </Table.Td>
                </SortableTableRow>
              ))}
            </SortableContext>
          </Table.Tbody>
        </Table>
      </DndContext>
    </div>
  )
}

// 4. Simple Draggable Items
const simpleItems = [
  { id: 'item-1', label: 'First Item', icon: IconUser },
  { id: 'item-2', label: 'Second Item', icon: IconMail },
  { id: 'item-3', label: 'Third Item', icon: IconPhone },
  { id: 'item-4', label: 'Fourth Item', icon: IconPlus },
]

function SimpleDragItem({ id, children }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <Box
      ref={setNodeRef}
      style={style}
      className={`${classes.simpleItem} ${isDragging ? classes.isDragging : ''}`}
      {...attributes}
      {...listeners}
    >
      {children}
    </Box>
  )
}

function SimpleDragList() {
  const [items, setItems] = useState(simpleItems)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over!.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <div>
      <Title order={4} mb="md">Simple Drag & Drop</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Basic drag and drop functionality with simple list items. Click and drag any item to reorder.
      </Text>
      
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items.map(item => item.id)} strategy={verticalListSortingStrategy}>
          <Stack gap="xs">
            {items.map((item) => {
              const Icon = item.icon
              return (
                <SimpleDragItem key={item.id} id={item.id}>
                  <Group gap="md">
                    <Icon size={18} />
                    <Text>{item.label}</Text>
                  </Group>
                </SimpleDragItem>
              )
            })}
          </Stack>
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default function DragDrop() {
  return (
    <Page title="Drag & Drop">
      <PageHeader
        title="Drag & Drop"
      />
      
      <Container size="xl" mt="xl">
        <Text size="sm" c="dimmed" mb="xl">
          Draggable and sortable components for interactive list management and reordering.
        </Text>
        
        <Stack gap="xl">
          <SortableList />
          <SortableCardsGrid />
          <SortableTable />
          <SimpleDragList />
        </Stack>
      </Container>
    </Page>
  )
}