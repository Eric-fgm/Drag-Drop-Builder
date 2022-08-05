import React from 'react'
import { StyledContainer, StyledCaption } from './styles'

export interface IMenuItemProps {
  icon?: JSX.Element
  text: string
  isLast?: boolean
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

const MenuItem: React.FC<IMenuItemProps> = ({ icon, text, isLast = false, onClick, ...props }) => {
  return (
    <StyledContainer disabled={!onClick} onClick={onClick} {...props}>
      {icon && <span>{icon}</span>}
      <StyledCaption>{text}</StyledCaption>
    </StyledContainer>
  )
}

export default MenuItem
