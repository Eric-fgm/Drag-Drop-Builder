import styled from 'styled-components'

export const StyledContainer = styled.div`
  position: relative;
  padding-bottom: 8px;
`

export const StyledWrapper = styled.div`
  display: flex;
  column-gap: 12px;
`

export const StyledContent = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  span {
    margin-top: 4px;
    font-size: 10px;
    color: var(--placeholder-color);
    text-transform: uppercase;
  }

  input {
    text-align: center;
    -moz-appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }
`

export const StyledLabel = styled.h5`
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
