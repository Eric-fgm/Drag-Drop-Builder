import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 28px;

  & > * {
    flex: 1;
  }
`

export const StyledWrapper = styled.div``

export const StyledInput = styled.input`
  display: block;
  margin: 0;
  padding: 0 6px;
  height: 28px;
  font-size: 12px;
  width: 100%;
  color: var(--text-color);
  border-radius: 2px;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px #e0e0e0;
  }

  &:disabled {
    background-color: #f7f7f7;
    box-shadow: none;
  }
`
