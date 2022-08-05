import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 105px;
  height: 105px;
  color: var(--text-color);
  background-color: var(--white-color);
  box-shadow: 0 0 16px -10px #000;
  border-radius: 4px;
  cursor: pointer;
`

export const StyledName = styled.span`
  margin-top: 9px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`
