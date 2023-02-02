import styled from 'styled-components/native'
import { Typography } from '../../../theme'

interface IText {
  variant?: Typography
}
export const Text = styled.Text<IText>`
  font-size: ${({ theme, variant = 'normal' }) => theme.typography[variant].fontSize};
  color: ${({ theme, variant = 'normal' }) => theme.typography[variant].color};
  font-weight: ${({ theme, variant = 'normal' }) => theme.typography[variant].fontWeight};
  font-family: ${({ theme, variant = 'normal' }) => theme.typography[variant].fontFamily};
`
