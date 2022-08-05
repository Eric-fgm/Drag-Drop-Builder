import React from 'react'
import {
  StyledContainer,
  StyledButton,
  StyledLink,
} from '@/features/Widgets/components/Button/styles'
import { TWidgetBase } from '@/features/Widgets/types'

export interface IButtonProps extends TWidgetBase {
  src?: string
  text: string
  href?: string
  size: string
  borderRadiusTop?: number
  borderRadiusBottom?: number
  borderRadiusLeft?: number
  borderRadiusRight?: number
}

const Button: React.FC<IButtonProps> = ({
  href,
  text,
  borderRadiusTop = 0,
  borderRadiusBottom = 0,
  borderRadiusLeft = 0,
  borderRadiusRight = 0,
  css = {},
}) => {
  const { justifyContent, ...restCss } = css
  const borderRadius = `${borderRadiusTop}px ${borderRadiusRight}px ${borderRadiusBottom}px ${borderRadiusLeft}px`

  return (
    <StyledContainer style={{ justifyContent }}>
      <StyledButton style={{ borderRadius, ...restCss }}>
        {text}
        {href && <StyledLink href={href} />}
      </StyledButton>
    </StyledContainer>
  )
}

export default React.memo(Button)
