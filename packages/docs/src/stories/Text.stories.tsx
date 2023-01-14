import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@yonlu-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores consequatur minima laudantium eius doloremque laborum natus debitis atque fugiat ea corrupti eligendi, quia id mollitia quasi ipsum commodi velit.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
