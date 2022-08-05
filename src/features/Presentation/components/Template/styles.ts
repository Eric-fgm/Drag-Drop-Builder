import styled from 'styled-components'

export const StyledBadge = styled.div`
  position: absolute;
  padding: 2px;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  color: #fff;
  background-color: var(--modifier-color);
  opacity: 0;
  cursor: pointer;
`

export const StyledContainer = styled.div<{ isFocused: boolean }>`
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
    border: 1px solid var(--modifier-color);
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
  display: block;
  width: 100%;
`
