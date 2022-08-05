import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 28px;

  & > * {
    flex: 1;
  }
`

export const StyledWrapper = styled.div`
  position: relative;
`

export const StyledInput = styled.input`
  display: block;
  margin: 0;
  padding: 2px 90px 2px 4px;
  height: 28px;
  font-size: 12px;
  width: 100%;
  color: var(--text-color);
  border-radius: 2px;

  &::-webkit-color-swatch {
    border: 1px solid #f5f5f5;
    border-radius: 1px;
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px #e0e0e0;
  }
`

export const StyledValue = styled.span<{ isPlaceholder: boolean }>`
  position: absolute;
  margin-top: -7px;
  top: 50%;
  left: 32px;
  font-size: 12px;
  color: ${({ isPlaceholder }) =>
    isPlaceholder ? 'var(--placeholder-color)' : 'var(--text-color)'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
