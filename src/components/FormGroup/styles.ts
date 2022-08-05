import styled from 'styled-components'

export const StyledContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 28px;
`

export const StyledLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
