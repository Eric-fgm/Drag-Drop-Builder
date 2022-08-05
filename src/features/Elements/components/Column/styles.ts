import styled from 'styled-components'

export const StyledBadge = styled.div`
  position: absolute;
  padding: 2px;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  color: #fff;
  background-color: var(--primary-color);
  opacity: 0;
  cursor: pointer;
`

export const StyledContainer = styled.div<{
  isFocused: boolean
}>`
  position: relative;
  display: flex;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border: 1px dashed var(--primary-color);
    border-radius: 2px;
    pointer-events: none;
    opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
  }

  & > ${StyledBadge} {
    opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
  }

  &:hover::after,
  &:hover > ${StyledBadge} {
    opacity: 1;
  }
`

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const StyledDroparea = styled.div<{
  hasContent: boolean
  isOver: boolean
}>`
  position: relative;
  display: ${({ hasContent }) => (hasContent ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  padding: 9px 16px;
  border: ${({ isOver }) =>
    isOver ? '1px solid var(--modifier-color)' : '1px dashed #e0e0e0'};
  border-radius: 2px;
  text-align: center;
  height: 100%;
  width: 100%;
`
