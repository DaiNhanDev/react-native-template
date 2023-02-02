import styled from 'styled-components/native'

export interface CenterProps {
  flexDirection?: 'column' | 'row'
  children: React.ReactNode
}

export const Center = styled.View<{ flexDirection?: 'column' | 'row' }>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ flexDirection }) => (flexDirection === 'column' ? 'center' : 'flex-start')};
  align-items: ${({ flexDirection }) => (flexDirection !== 'column' ? 'center' : 'flex-start')};
`
