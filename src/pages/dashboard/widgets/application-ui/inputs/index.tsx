import { useState } from 'react'
import { IconInfoCircle, IconAlertTriangle, IconArrowRight, IconSearch, IconCheck, IconX } from '@tabler/icons-react'
import { Container, Title, Text, TextInput, PasswordInput, Tooltip, Center, ActionIcon, useMantineTheme, Box, Group, Progress } from '@mantine/core'
import { useInputState } from '@mantine/hooks'
import { Page, PageHeader } from '@/components'
import classes from './inputs.module.css'

function FloatingLabelInput() {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const floating = value.trim().length !== 0 || focused || undefined

  return (
    <TextInput
      label="Floating label"
      placeholder="OMG, it also has a placeholder"
      required
      classNames={classes}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mt="md"
      autoComplete="nope"
      data-floating={floating}
      labelProps={{ 'data-floating': floating }}
    />
  )
}

function TooltipIcon() {
  const rightSection = (
    <Tooltip
      label="We store your data securely"
      position="top-end"
      withArrow
      transitionProps={{ transition: 'pop-bottom-right' }}
    >
      <Text component="div" c="dimmed" style={{ cursor: 'help' }}>
        <Center>
          <IconInfoCircle size={18} stroke={1.5} />
        </Center>
      </Text>
    </Tooltip>
  )

  return (
    <TextInput
      rightSection={rightSection}
      label="Tooltip shown on icon hover"
      placeholder="Your email"
    />
  )
}

function TooltipFocus() {
  const [opened, setOpened] = useState(false)
  const [value, setValue] = useState('')
  const valid = value.trim().length >= 6
  return (
    <Tooltip
      label={valid ? 'All good!' : 'Password must include at least 6 characters'}
      position="bottom-start"
      withArrow
      opened={opened}
      color={valid ? 'teal' : undefined}
      withinPortal
    >
      <PasswordInput
        label="Tooltip shown onFocus"
        required
        placeholder="Your password"
        onFocus={() => setOpened(true)}
        onBlur={() => setOpened(false)}
        mt="md"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </Tooltip>
  )
}

function InputTooltip() {
  return (
    <>
      <TooltipIcon />
      <TooltipFocus />
    </>
  )
}

function InputValidation() {
  return (
    <TextInput
      label="Custom validation styles"
      error="Invalid email"
      defaultValue="hello!gmail.com"
      classNames={{ input: classes.invalid }}
      rightSection={<IconAlertTriangle stroke={1.5} size={18} className={classes.icon} />}
    />
  )
}

function InputWithButton() {
  const theme = useMantineTheme()

  return (
    <TextInput
      radius="xl"
      size="md"
      placeholder="Search questions"
      rightSectionWidth={42}
      leftSection={<IconSearch size={18} stroke={1.5} />}
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
          <IconArrowRight size={18} stroke={1.5} />
        </ActionIcon>
      }
    />
  )
}

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text component="div" c={meets ? 'teal' : 'red'} mt={5} size="sm">
      <Center inline>
        {meets ? <IconCheck size={14} stroke={1.5} /> : <IconX size={14} stroke={1.5} />}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
  )
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
]

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1
    }
  })

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0)
}

function PasswordStrength() {
  const [value, setValue] = useInputState('')
  const strength = getStrength(value)
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ))
  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ section: { transitionDuration: '0ms' } }}
        value={
          value.length > 0 && index === 0 ? 100 : strength >= ((index + 1) / 4) * 100 ? 100 : 0
        }
        color={strength > 80 ? 'teal' : strength > 50 ? 'yellow' : 'red'}
        key={index}
        size={4}
      />
    ))

  return (
    <div>
      <PasswordInput
        value={value}
        onChange={setValue}
        placeholder="Your password"
        label="Password"
        required
      />

      <Group gap={5} grow mt="xs" mb="md">
        {bars}
      </Group>

      <PasswordRequirement label="Has at least 6 characters" meets={value.length > 5} />
      {checks}
    </div>
  )
}

export default function Inputs() {
  return (
    <Page title="Inputs">
      <PageHeader
        title="Inputs"
      />
      
      <Container size="xl" mt="xl">
        <Text size="sm" c="dimmed" mb="lg">
          Input components with various form controls and validation options.
        </Text>

        <Title order={3} mb="md">Floating Label Input</Title>
        <Text size="sm" c="dimmed" mb="lg">Input with animated floating label</Text>
        <FloatingLabelInput />

        <Title order={3} mb="md" mt="xl">Input with Tooltips</Title>
        <Text size="sm" c="dimmed" mb="lg">Inputs with information tooltips and validation feedback</Text>
        <InputTooltip />

        <Title order={3} mb="md" mt="xl">Input Validation</Title>
        <Text size="sm" c="dimmed" mb="lg">Input with custom validation styling and error indicators</Text>
        <InputValidation />

        <Title order={3} mb="md" mt="xl">Input with Button</Title>
        <Text size="sm" c="dimmed" mb="lg">Search input with action button</Text>
        <InputWithButton />

        <Title order={3} mb="md" mt="xl">Password Strength</Title>
        <Text size="sm" c="dimmed" mb="lg">Password input with strength indicator and requirements</Text>
        <PasswordStrength />
      </Container>
    </Page>
  )
}