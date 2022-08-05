import styled from 'styled-components'

export const StyledContainer = styled.div`
  position: relative;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  height: 48px;
  color: var(--white-color);
  background-color: var(--primary-color);
`

export const StyledLogo = styled.h2`
  position: absolute;
  left: 50%;
  font-size: 17px;
  transform: translateX(-50%);
  user-select: none;
`

export const StyledTitle = styled.h2`
  padding: 0 8px;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
`

export const StyledIcon = styled.span<{ ltr?: boolean }>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
`
