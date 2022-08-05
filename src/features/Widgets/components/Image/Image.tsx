import ConditionalWrapper from '@/components/LinkWrapper/ConditionalWrapper'
import React from 'react'
import { TWidgetBase } from '../../types'
import {
  StyledContainer,
  StyledFigure,
  StyledImage,
  StyledLink,
} from './styles'

export interface IImageProps extends TWidgetBase {
  src?: string
  alt?: string
  href?: string
}

const Image: React.FC<IImageProps> = ({
  css,
  src = 'https://www.materiaimpar.com/wp-content/uploads/2015/07/import_placeholder.png',
  alt = '',
  href = '',
}) => {
  const { justifyContent, ...restCss } = css
  return (
    <StyledContainer>
      <StyledFigure style={{ justifyContent }}>
        <ConditionalWrapper
          flag={!!href}
          wrapper={(children) => (
            <StyledLink href={href}>{children}</StyledLink>
          )}
        >
          <StyledImage style={restCss} src={src} alt={alt} />
        </ConditionalWrapper>
      </StyledFigure>
    </StyledContainer>
  )
}

export default Image
