import { Meta, StoryFn } from '@storybook/react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Button>

// variant 정의
const VariantTemplate: StoryFn = () => {
  const variants = ['primary', 'secondary', 'border', 'borderPrimary', 'borderSecondary']
  return (
    <>
      <div>
        <Button>Default</Button>
        <br />

        {variants.map(variant => (
          <>
            <Button key={variant} size="md" variant={variant} onClick={() => {}}>
              variant=&quot;{variant}&quot;
            </Button>
            <br />
          </>
        ))}

        <Button size="md" variant="primary" disabled onClick={() => {}}>
          Disabled
        </Button>
      </div>
    </>
  )
}

// size 정의
const SizeTemplate: StoryFn = () => {
  const sizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']
  return (
    <>
      <div>
        {sizes.map(size => (
          <>
            <Button key={size} size={size} variant="borderPrimary" onClick={() => {}}>
              size=&quot;{size}&quot;
            </Button>
            <br />
          </>
        ))}
      </div>
    </>
  )
}

// Primary 스토리
export const Styles = VariantTemplate.bind({})

// Size 스토리
export const Size = SizeTemplate.bind({})
