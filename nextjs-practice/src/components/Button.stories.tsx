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
  return (
    <>
      <div>
        <Button>Default</Button>
        <br />

        <Button size="md" variant="primary" onClick={() => {}}>
          variant=&quot;primary&quot;
        </Button>
        <br />

        <Button size="md" variant="secondary" onClick={() => {}}>
          variant=&quot;secondary&quot;
        </Button>
        <br />

        <Button size="md" variant="border" onClick={() => {}}>
          variant=&quot;border&quot;
        </Button>
        <br />

        <Button size="md" variant="borderPrimary" onClick={() => {}}>
          variant=&quot;borderPrimary&quot;
        </Button>
        <br />

        <Button size="md" variant="borderSecondary" onClick={() => {}}>
          variant=&quot;borderSecondary&quot;
        </Button>
        <br />

        <Button size="md" variant="primary" disabled onClick={() => {}}>
          disabled
        </Button>
      </div>
    </>
  )
}

// size 정의
const SizeTemplate: StoryFn = () => {
  return (
    <>
      <div>
        <Button size="xs" variant="borderPrimary" onClick={() => {}}>
          size=&quot;xs&quot;
        </Button>
        <br />

        <Button size="sm" variant="borderPrimary" onClick={() => {}}>
          size=&quot;sm&quot;
        </Button>
        <br />

        <Button size="md" variant="borderPrimary" onClick={() => {}}>
          size=&quot;md&quot;
        </Button>
        <br />

        <Button size="lg" variant="borderPrimary" onClick={() => {}}>
          size=&quot;lg&quot;
        </Button>
        <br />

        <Button size="xl" variant="borderPrimary" onClick={() => {}}>
          size=&quot;xl&quot;
        </Button>
        <br />
      </div>
    </>
  )
}

// Primary 스토리
export const Styles = VariantTemplate.bind({})

// Size 스토리
export const Size = SizeTemplate.bind({})
