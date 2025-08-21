import { 
  Anchor,
  Button,
  Checkbox,
  Container,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
  SimpleGrid,
  Box
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { upperFirst, useToggle } from '@mantine/hooks'
import { Page, PageHeader } from '@/components'
import classes from './authentication.module.css'

// Google Icon Component
function GoogleIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 262"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      <path
        fill="#4285F4"
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      />
      <path
        fill="#34A853"
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      />
      <path
        fill="#FBBC05"
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      />
      <path
        fill="#EB4335"
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      />
    </svg>
  )
}

function GoogleButton(props: any) {
  return <Button leftSection={<GoogleIcon />} variant="default" {...props} />
}

function TwitterButton(props: any) {
  return (
    <Button 
      leftSection={
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#1DA1F2">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      } 
      variant="default" 
      {...props} 
    />
  )
}

// 1. Authentication Form with Social Login
function AuthenticationForm() {
  const [type, toggle] = useToggle(['login', 'register'])
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  })

  return (
    <Paper radius="md" p="lg" withBorder maw={420} mx="auto">
      <Text size="lg" fw={500}>
        Welcome to Mantine, {type} with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />

          {type === 'register' && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  )
}

// 2. Authentication Title (Centered Login)
function AuthenticationTitle() {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>

      <Text className={classes.subtitle}>
        Do not have an account yet? <Anchor>Create account</Anchor>
      </Text>

      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required radius="md" />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" radius="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" radius="md">
          Sign in
        </Button>
      </Paper>
    </Container>
  )
}

// 3. Authentication Image (Side by Side)
function AuthenticationImage() {
  return (
    <Box className={classes.wrapper}>
      <div className={classes.form}>
        <Text size="lg" fw={500} className={classes.title}>
          Welcome to Mantine, login with
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
          <TwitterButton radius="xl">Twitter</TwitterButton>
        </Group>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
          radius="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          radius="md"
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md" radius="md">
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor fw={500} size="sm">
            Register
          </Anchor>
        </Text>
      </div>

      <div className={classes.image}>
        <div className={classes.imagePlaceholder}>
          <Text size="xl" ta="center" c="dimmed">
            🔐
          </Text>
        </div>
      </div>
    </Box>
  )
}

// 4. Simple Authentication (Minimal)
function SimpleAuthentication() {
  return (
    <Container size={460} my={30}>
      <Title className={classes.simpleTitle}>Sign in to your account</Title>
      <Text c="dimmed" fz="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Group justify="space-between" mt="lg" className={classes.controls}>
          <Checkbox label="Remember me" />
          <Anchor size="sm">Forgot password?</Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  )
}

export default function Authentication() {
  return (
    <Page title="Authentication">
      <PageHeader
        title="Authentication"
      />
      
      <Stack gap="xl" mt="xl">
        <div>
          <Title order={3} mb="md">Authentication Form with Social Login</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Complete authentication form with social login buttons, validation, and toggle between login/register modes.
          </Text>
          <AuthenticationForm />
        </div>

        <div>
          <Title order={3} mb="md">Authentication Title (Centered)</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Clean and simple centered authentication form with minimal styling.
          </Text>
          <AuthenticationTitle />
        </div>

        <div>
          <Title order={3} mb="md">Authentication with Image</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Side-by-side authentication layout with form on left and decorative image on right.
          </Text>
          <AuthenticationImage />
        </div>

        <div>
          <Title order={3} mb="md">Simple Authentication</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Minimal authentication form with essential elements and clean design.
          </Text>
          <SimpleAuthentication />
        </div>
      </Stack>
    </Page>
  )
}