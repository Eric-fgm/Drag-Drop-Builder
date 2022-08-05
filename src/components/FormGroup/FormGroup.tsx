import React from 'react'
import { StyledContainer, StyledLabel } from './styles'

export interface IFormGroupProps {
  label: string
  children: JSX.Element
}

const childrenStyle = { flex: 1 }

const FormGroup: React.FC<IFormGroupProps> = ({ label = '', children }) => (
    <StyledContainer>
      <StyledLabel style={childrenStyle}>{label}</StyledLabel>
      <span style={childrenStyle}>{children}</span>
    </StyledContainer>
  )

export default React.memo(FormGroup)
