import { useState } from 'react'
import { IconHeart, IconHeartBroken, IconGripVertical, IconPoint } from '@tabler/icons-react'
import { Container, Title, Text, Slider, RangeSlider, NumberInput } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import { Page, PageHeader } from '@/components'
import classes from './sliders.module.css'

function SliderHover() {
  const { hovered, ref } = useHover()

  return (
    <Slider
      defaultValue={40}
      min={10}
      max={90}
      ref={ref}
      label={null}
      styles={{
        thumb: {
          transition: 'opacity 150ms ease',
          opacity: hovered ? 1 : 0,
        },
      }}
    />
  )
}

function SliderIcon() {
  const styles = { thumb: { borderWidth: 2, height: 26, width: 26, padding: 3 } }

  return (
    <>
      <Slider
        thumbChildren={<IconHeart size={16} stroke={1.5} />}
        color="red"
        label={null}
        defaultValue={40}
        styles={styles}
      />

      <RangeSlider
        mt="xl"
        styles={styles}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbChildren={[
          <IconHeart size={16} stroke={1.5} key="1" />,
          <IconHeartBroken size={16} stroke={1.5} key="2" />,
        ]}
      />
    </>
  )
}

function SliderInput() {
  const [value, setValue] = useState<number | string>(2200)
  return (
    <div className={classes.wrapper}>
      <NumberInput
        value={value}
        onChange={setValue}
        label="Your daily kcal consumption"
        placeholder="2200 is an average value"
        step={50}
        min={0}
        max={8000}
        hideControls
        classNames={{ input: classes.input, label: classes.label }}
      />
      <Slider
        max={8000}
        step={50}
        min={0}
        label={null}
        value={typeof value === 'string' ? 0 : value}
        onChange={setValue}
        size={2}
        className={classes.slider}
        classNames={classes}
      />
    </div>
  )
}

function SliderLabel() {
  return <RangeSlider labelAlwaysOn defaultValue={[20, 60]} classNames={classes} />
}

function SliderMarks() {
  const point = <IconPoint size={10} style={{ marginTop: 6 }} stroke={1.5} />

  return (
    <RangeSlider
      mt="xl"
      mb="xl"
      classNames={classes}
      defaultValue={[30, 60]}
      thumbChildren={<IconGripVertical size={20} stroke={1.5} />}
      marks={[
        { value: 0, label: '0' },
        { value: 12.5, label: point },
        { value: 25, label: '25' },
        { value: 37.5, label: point },
        { value: 50, label: '50' },
        { value: 62.5, label: point },
        { value: 75, label: '75' },
        { value: 87.5, label: point },
        { value: 100, label: '100' },
      ]}
    />
  )
}

export default function Sliders() {
  return (
    <Page title="Sliders">
      <PageHeader
        title="Sliders"
      />
      
      <Container size="xl" mt="xl">
        <Text size="sm" c="dimmed" mb="lg">
          Slider components with various range options and custom styling.
        </Text>

        <Title order={3} mb="md">Slider with Hover Effect</Title>
        <Text size="sm" c="dimmed" mb="lg">Slider thumb appears only on hover</Text>
        <SliderHover />

        <Title order={3} mb="md" mt="xl">Slider with Custom Icons</Title>
        <Text size="sm" c="dimmed" mb="lg">Single and range sliders with custom thumb icons</Text>
        <SliderIcon />

        <Title order={3} mb="md" mt="xl">Slider with Input</Title>
        <Text size="sm" c="dimmed" mb="lg">Slider combined with number input for precise control</Text>
        <SliderInput />

        <Title order={3} mb="md" mt="xl">Slider with Custom Labels</Title>
        <Text size="sm" c="dimmed" mb="lg">Range slider with always visible labels</Text>
        <SliderLabel />

        <Title order={3} mb="md" mt="xl">Slider with Marks</Title>
        <Text size="sm" c="dimmed" mb="lg">Range slider with custom marks and grip handles</Text>
        <SliderMarks />
      </Container>
    </Page>
  )
}