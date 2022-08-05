import React from 'react'
import { StyledLabel } from './style'

export interface ILabelProps {
  text: string
}

const Label: React.FC<ILabelProps> = ({ text = '' }) => <StyledLabel>{text}</StyledLabel>

export default React.memo(Label)
