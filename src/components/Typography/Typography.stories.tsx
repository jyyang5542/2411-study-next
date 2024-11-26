import { Meta, StoryObj } from '@storybook/react'
import Typography from './Typography'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // onClick: { action: 'clicked' },
  },
  tags: ['autodocs'],
  args: {
    // onClick: fn(),
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

// variant 템플릿 정의
export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'Lorem Ipsum',
  },
}
H1.storyName = 'Variant: H1'

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'Lorem Ipsum',
  },
}
H2.storyName = 'Variant: H2'

export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'Lorem Ipsum',
  },
}
H3.storyName = 'Variant: H3'

export const H4: Story = {
  args: {
    variant: 'h4',
    children: 'Lorem Ipsum',
  },
}
H4.storyName = 'Variant: H4'

export const H5: Story = {
  args: {
    variant: 'h5',
    children: 'Lorem Ipsum',
  },
}
H5.storyName = 'Variant: H5'

export const H6: Story = {
  args: {
    variant: 'h6',
    children: 'Lorem Ipsum',
  },
}
H6.storyName = 'Variant: H6'

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'Lorem Ipsum',
  },
}
Subtitle1.storyName = 'Variant: Subtitle1'

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'Lorem Ipsum',
  },
}
Subtitle2.storyName = 'Variant: Subtitle2'

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Lorem Ipsum',
  },
}
Body1.storyName = 'Variant: Body1'

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Lorem Ipsum',
  },
}
Body2.storyName = 'Variant: Body2'

// color 템플릿 정의
export const Primary: Story = {
  args: {
    variant: 'h1',
    color: 'primary',
    children: 'Lorem Ipsum',
  },
}
Primary.storyName = 'Color: Primary'

export const Secondary: Story = {
  args: {
    variant: 'h1',
    color: 'secondary',
    children: 'Lorem Ipsum',
  },
}
Secondary.storyName = 'Color: Secondary'
