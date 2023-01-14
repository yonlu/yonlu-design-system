import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@yonlu-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testing Box Element</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
