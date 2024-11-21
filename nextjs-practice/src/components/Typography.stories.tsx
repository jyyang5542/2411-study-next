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
  const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2']
  return (
    <>
      <div>
        {variants.map(variant => (
          <Typography key={variant} variant={variant}>
            variant=&quot;{variant}&quot;
          </Typography>
        ))}
      </div>
    </>
  )
}

// color 템플릿 정의
const ColorTemplate: StoryFn = () => {
  const colors = ['primary', 'secondary']
  return (
    <>
      <div>
        {colors.map(color => (
          <Typography key={color} color={color}>
            color=&quot;{color}&quot;
          </Typography>
        ))}
      </div>
    </>
  )
}

// FontSize 스토리
export const FontSize = VariantTemplate.bind({})

// Color 스토리
export const Color = ColorTemplate.bind({})
