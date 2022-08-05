import React, { useEffect } from 'react'
import { StyledContainer } from './styles'

export interface IWrapperProps {
  children?: React.ReactNode
  refObject: React.RefObject<HTMLDivElement>
  style?: React.CSSProperties
  onBlur?: () => void
}

const Wrapper: React.FC<IWrapperProps> = ({ refObject, children, ...props }) => {
  useEffect(() => {
    const contextDomElement = refObject?.current
    if (!contextDomElement) return
    contextDomElement.style.transition = 'height 0.35s ease, opacity 0.3s ease'
    contextDomElement.style.height = `${contextDomElement.scrollHeight}px`
    contextDomElement.style.opacity = '1'
  }, [])

  return (
    <StyledContainer ref={refObject} tabIndex={1} {...props}>
      {children}
    </StyledContainer>
  )
}

export default Wrapper
