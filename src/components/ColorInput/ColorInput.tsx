import React from 'react'
import Label from '../Label/Label'
import {
  StyledContainer,
  StyledWrapper,
  StyledInput,
  StyledValue,
} from './styles'

export interface IColorInputProps {
  label?: string
}

const ColorInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & IColorInputProps
> = ({ label, value = '', ...props }) => (
    <StyledContainer>
      {label && <Label text={label} />}
      <StyledWrapper>
        <StyledInput type="color" value={value} {...props} />
        <StyledValue isPlaceholder={!value}>{value || 'Default'}</StyledValue>
      </StyledWrapper>
    </StyledContainer>
  )

export default React.memo(ColorInput)
