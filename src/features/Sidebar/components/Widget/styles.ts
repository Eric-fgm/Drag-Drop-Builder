import styled from 'styled-components'

export const Wrapper = styled.div<{ isDragging: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 105px;
  height: 105px;
  color: var(--text-color);
  opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
  cursor: pointer;
`

export const Name = styled.span`
  margin-top: 9px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`
