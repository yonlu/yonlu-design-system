import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@yonlu-ui/react'
import { fontSizes } from '@yonlu-ui/tokens'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores consequatur minima laudantium eius doloremque laborum natus debitis atque fugiat ea corrupti eligendi, quia id mollitia quasi ipsum commodi velit.',
  },
  argTypes: {
    size: {
      options: Object.keys(fontSizes),
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
