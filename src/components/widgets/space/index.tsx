import styled from 'styled-components/native'

export interface SpaceProps {
  height?: number | string
  width?: number | string
}

export const Space = styled.View<SpaceProps>`
  display: flex;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '0'};
`
