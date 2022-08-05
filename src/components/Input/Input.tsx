import React from 'react'
import Label from '../Label/Label'
import { StyledContainer, StyledWrapper, StyledInput } from './styles'

export interface IInputProps {
  label?: string
}

const Input: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & IInputProps
> = ({ label, ...props }) => (
    <StyledContainer>
      {label && <Label text={label} />}
      <StyledWrapper>
        <StyledInput {...props} />
      </StyledWrapper>
    </StyledContainer>
  )

export default React.memo(Input)
