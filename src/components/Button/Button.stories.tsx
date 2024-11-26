import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
  tags: ['autodocs'],
  args: {
    // onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// variant 정의
export const Default: Story = {
  args: {
    size: undefined,
    variant: undefined,
    disabled: false,
    onClick: () => {},
    children: 'Button',
  },
}

export const SizeXS: Story = {
  args: {
    size: 'xs',
    variant: 'primary',
    disabled: false,
    onClick: () => {},
    children: 'Button',
  },
}
SizeXS.storyName = 'Size: XS'

export const SizeSM: Story = {
  args: {
    size: 'sm',
    variant: 'primary',
    disabled: false,
    onClick: () => {},
    children: 'Button',
  },
}
SizeSM.storyName = 'Size: SM'

export const SizeMD: Story = {
  args: {
    size: 'md',
    variant: 'primary',
    disabled: false,
    onClick: () => {},
    children: 'Button',
  },
}
SizeMD.storyName = 'Size: MD'

export const SizeLG: Story = {
  args: {
    size: 'lg',
    variant: 'primary',
    disabled: false,
    onClick: () => {},
    children: 'Button',
  },
}
SizeLG.storyName = 'Size: LG'

export const SizeXL: Story = {
  args: {
    size: 'xl',
    variant: 'primary',
    disabled: false,
    onClick: () => {},
    children: 'Button',
  },
}
SizeXL.storyName = 'Size: XL'

export const Primary: Story = {
  args: {
    size: 'md',
    variant: 'primary',
    disabled: false,
    onClick: () => {},
    children: 'Button',
  },
}
Primary.storyName = 'Variant: Primary'

export const Secondary: Story = {
  args: {
    size: 'md',
    variant: 'secondary',
    disabled: false,
    onClick: () => {},
    children: 'Button',
  },
}
Secondary.storyName = 'Variant: Secondary'

export const Border: Story = {
  args: {
    size: 'md',
    variant: 'border',
    disabled: false,
    onClick: () => {},
    children: 'Button',
  },
}
Border.storyName = 'Variant: Border'

export const BorderPrimary: Story = {
  args: {
    size: 'md',
    variant: 'borderPrimary',
    disabled: false,
    onClick: () => {},
    children: 'Button',
  },
}
BorderPrimary.storyName = 'Variant: BorderPrimary'

export const BorderSecondary: Story = {
  args: {
    size: 'md',
    variant: 'borderSecondary',
    disabled: false,
    onClick: () => {},
    children: 'Button',
  },
}
BorderSecondary.storyName = 'Variant: BorderSecondary'

export const Disabled: Story = {
  args: {
    size: 'md',
    variant: 'primary',
    disabled: true,
    onClick: () => {},
    children: 'Button',
  },
}

// size 정의
// const SizeTemplate: StoryFn = () => {
//   return (
//     <>
//       <div>
//         <Button size="xs" Variant: borderPrimary" onClick={() => {}}>
//           size=&quot;xs&quot;
//         </Button>
//         <br />

//         <Button size="sm" Variant: borderPrimary" onClick={() => {}}>
//           size=&quot;sm&quot;
//         </Button>
//         <br />

//         <Button size="md" Variant: borderPrimary" onClick={() => {}}>
//           size=&quot;md&quot;
//         </Button>
//         <br />

//         <Button size="lg" Variant: borderPrimary" onClick={() => {}}>
//           size=&quot;lg&quot;
//         </Button>
//         <br />

//         <Button size="xl" Variant: borderPrimary" onClick={() => {}}>
//           size=&quot;xl&quot;
//         </Button>
//         <br />
//       </div>
//     </>
//   )
// }
