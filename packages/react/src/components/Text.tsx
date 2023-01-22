import { ComponentProps, ElementType } from 'react'
import { fontSizes } from '@yonlu-ui/tokens'
import { styled } from '../styles'

const fontSizesArray = Object.keys(fontSizes).map((token) => token.toString())
const fontSizesObject = Object.fromEntries(
  fontSizesArray.map((token) => [token, { fontSize: `$${token}` }]),
)

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size: fontSizesObject,
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'
