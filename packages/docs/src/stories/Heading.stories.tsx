import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@yonlu-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Title Example',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default tag is `h2`. This can be changed by passing `as` prop.',
      },
    },
  },
}
