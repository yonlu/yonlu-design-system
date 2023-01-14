import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@yonlu-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testing Box Element</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
