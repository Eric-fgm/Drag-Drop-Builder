import styled from 'styled-components'

export const StyledBadge = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  height: 20px;
  color: #fff;
  background-color: var(--modifier-color);
  transform: translateX(-50%);
  opacity: 0;
  z-index: 1;

  & > span {
    display: inline-block;
    padding: 2px 3px;
    height: 100%;
    cursor: pointer;

    &:hover {
      background-color: var(--dark-modifier-color);
    }
  }
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
  display: flex;
  width: 100%;
`
