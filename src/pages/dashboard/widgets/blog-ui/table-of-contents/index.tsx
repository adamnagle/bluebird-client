import { Text, Title, Stack, Box, Anchor, Group, Paper } from '@/components';
import { Page, PageHeader } from '@/components';
import { IconList, IconHash, IconCircleDot } from '@tabler/icons-react';
import classes from './index.module.css';

function SimpleTableOfContents() {
  return (
    <Paper withBorder p="md" className={classes.toc}>
      <Title order={4} mb="md">Table of Contents</Title>
      <Stack gap="xs">
        <Anchor href="#introduction" className={classes.tocItem}>
          1. Introduction
        </Anchor>
        <Anchor href="#getting-started" className={classes.tocItem}>
          2. Getting Started
        </Anchor>
        <Anchor href="#components" className={classes.tocItem}>
          3. Components
        </Anchor>
        <Anchor href="#examples" className={classes.tocItem}>
          4. Examples
        </Anchor>
        <Anchor href="#conclusion" className={classes.tocItem}>
          5. Conclusion
        </Anchor>
      </Stack>
    </Paper>
  );
}

function NestedTableOfContents() {
  return (
    <Paper withBorder p="md" className={classes.toc}>
      <Title order={4} mb="md">Table of Contents</Title>
      <Stack gap="xs">
        <Anchor href="#introduction" className={classes.tocItem}>
          <Group gap="xs">
            <IconCircleDot size={16} />
            1. Introduction
          </Group>
        </Anchor>
        <Stack gap="xs" ml="md">
          <Anchor href="#overview" className={classes.tocSubItem}>
            1.1 Overview
          </Anchor>
          <Anchor href="#features" className={classes.tocSubItem}>
            1.2 Features
          </Anchor>
        </Stack>
        
        <Anchor href="#installation" className={classes.tocItem}>
          <Group gap="xs">
            <IconCircleDot size={16} />
            2. Installation
          </Group>
        </Anchor>
        <Stack gap="xs" ml="md">
          <Anchor href="#requirements" className={classes.tocSubItem}>
            2.1 Requirements
          </Anchor>
          <Anchor href="#setup" className={classes.tocSubItem}>
            2.2 Setup
          </Anchor>
        </Stack>

        <Anchor href="#usage" className={classes.tocItem}>
          <Group gap="xs">
            <IconCircleDot size={16} />
            3. Usage
          </Group>
        </Anchor>
      </Stack>
    </Paper>
  );
}

function FloatingTableOfContents() {
  return (
    <Paper shadow="md" p="md" className={classes.floatingToc}>
      <Group gap="xs" mb="md">
        <IconList size={20} />
        <Title order={5}>Contents</Title>
      </Group>
      <Stack gap="xs">
        <Anchor href="#section1" className={classes.floatingItem}>
          Introduction
        </Anchor>
        <Anchor href="#section2" className={classes.floatingItem}>
          Main Content
        </Anchor>
        <Anchor href="#section3" className={classes.floatingItem}>
          Examples
        </Anchor>
        <Anchor href="#section4" className={classes.floatingItem}>
          Conclusion
        </Anchor>
      </Stack>
    </Paper>
  );
}

function HashTableOfContents() {
  return (
    <Box className={classes.hashToc}>
      <Title order={4} mb="md">
        <Group gap="xs">
          <IconHash size={20} />
          Quick Navigation
        </Group>
      </Title>
      <Group gap="md">
        <Anchor href="#intro" className={classes.hashItem}>
          #intro
        </Anchor>
        <Anchor href="#docs" className={classes.hashItem}>
          #docs
        </Anchor>
        <Anchor href="#api" className={classes.hashItem}>
          #api
        </Anchor>
        <Anchor href="#examples" className={classes.hashItem}>
          #examples
        </Anchor>
        <Anchor href="#faq" className={classes.hashItem}>
          #faq
        </Anchor>
      </Group>
    </Box>
  );
}

function StickyTableOfContents() {
  return (
    <Paper className={classes.stickyToc} p="md" withBorder>
      <Title order={5} mb="md">On This Page</Title>
      <Stack gap="xs">
        <Anchor href="#overview" className={classes.stickyItem}>
          Overview
        </Anchor>
        <Anchor href="#installation" className={classes.stickyItem}>
          Installation
        </Anchor>
        <Anchor href="#basic-usage" className={classes.stickyItem}>
          Basic Usage
        </Anchor>
        <Anchor href="#advanced" className={classes.stickyItem}>
          Advanced Features
        </Anchor>
        <Anchor href="#troubleshooting" className={classes.stickyItem}>
          Troubleshooting
        </Anchor>
      </Stack>
    </Paper>
  );
}

export default function TableOfContentsPage() {
  return (
    <Page title="Table of Contents">
      <PageHeader title="Table of Contents" />
      
      <Stack gap="xl">
        <div>
          <Title order={3} mb="md">Simple Table of Contents</Title>
          <Text c="dimmed" mb="lg">
            A basic table of contents with simple navigation links.
          </Text>
          <SimpleTableOfContents />
        </div>

        <div>
          <Title order={3} mb="md">Nested Table of Contents</Title>
          <Text c="dimmed" mb="lg">
            Hierarchical table of contents with nested sections and subsections.
          </Text>
          <NestedTableOfContents />
        </div>

        <div>
          <Title order={3} mb="md">Floating Table of Contents</Title>
          <Text c="dimmed" mb="lg">
            A compact floating table of contents with shadow styling.
          </Text>
          <FloatingTableOfContents />
        </div>

        <div>
          <Title order={3} mb="md">Hash-style Navigation</Title>
          <Text c="dimmed" mb="lg">
            Quick navigation links using hash-style formatting.
          </Text>
          <HashTableOfContents />
        </div>

        <div>
          <Title order={3} mb="md">Sticky Table of Contents</Title>
          <Text c="dimmed" mb="lg">
            A sidebar-style table of contents that can be positioned as sticky.
          </Text>
          <StickyTableOfContents />
        </div>
      </Stack>
    </Page>
  );
}