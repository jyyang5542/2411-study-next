import { Meta, StoryFn } from '@storybook/react'
import Typography from './Typography'

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    // onClick: { action: 'clicked' },
  },
} as Meta<typeof Typography>

// variant 템플릿 정의
const VariantTemplate: StoryFn = () => {
  return (
    <div>
      <Typography variant="h1">variant=&quot;h1&quot;</Typography>
      <Typography variant="h2">variant=&quot;h2&quot;</Typography>
      <Typography variant="h3">variant=&quot;h3&quot;</Typography>
      <Typography variant="h4">variant=&quot;h4&quot;</Typography>
      <Typography variant="h5">variant=&quot;h5&quot;</Typography>
      <Typography variant="h6">variant=&quot;h6&quot;</Typography>
      <Typography variant="subtitle1">variant=&quot;subtitle1&quot;</Typography>
      <Typography variant="subtitle2">variant=&quot;subtitle2&quot;</Typography>
      <Typography variant="body1">variant=&quot;body1&quot;</Typography>
      <Typography variant="body2">variant=&quot;body2&quot;</Typography>
    </div>
  )
}

// color 템플릿 정의
const ColorTemplate: StoryFn = () => {
  return (
    <div>
      <Typography color="primary">color=&quot;primary&quot;</Typography>
      <Typography color="secondary">color=&quot;secondary&quot;</Typography>
    </div>
  )
}

// FontSize 스토리
export const FontSize = VariantTemplate.bind({})

// Color 스토리
export const Color = ColorTemplate.bind({})
