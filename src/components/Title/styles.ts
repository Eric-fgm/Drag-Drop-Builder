import styled from 'styled-components'

export interface IHeadlineProps {
  size?: string
}

export const Headline = styled.h2<IHeadlineProps>`
  font-size: ${(props) => props.size || '16px'};
`
