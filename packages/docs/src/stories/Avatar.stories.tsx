import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@yonlu-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/yonlu.png',
    alt: 'Yonlu',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
