import styled from 'styled-components'

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 46px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  z-index: 1;
`

export const Input = styled.input`
  margin: 0;
  padding: 0 12px 0 0;
  height: 100%;
  flex: 1;
`

export const Icon = styled.span`
  margin: 0 10px 0 12px;
  width: 20px;
  height: 20px;
  color: var(--primary-color);
`
