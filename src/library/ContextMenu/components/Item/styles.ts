import styled from 'styled-components'

export const StyledContainer = styled.div<{ disabled: boolean }>`
  position: relative;
  padding: 9px 12px 9px 24px;
  display: flex;
  align-items: center;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
    opacity: 0;
    z-index: -1;
  }

  &:hover::after {
    opacity: ${({ disabled }) => (disabled ? 0 : 1)};
  }
`

export const StyledCaption = styled.span`
  font-size: 14px;
  color: var(--text-color);
`
