import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Wrapper from '@/library/ContextMenu/components/Wrapper/Wrapper'

export interface IPortalProps {
  isOpened: React.MouseEvent<HTMLElement> | null
  children?: React.ReactNode
  setOpened: (payload: React.MouseEvent<HTMLElement> | null) => void
}

const baseStyles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  maxHeight: 'calc(100% - 32px)',
  zIndex: 99,
}

const Portal: React.FC<IPortalProps> = ({ children, isOpened, setOpened }) => {
  const refObject = useRef<HTMLDivElement>(null)

  const [mounted, setMounted] = useState(false)
  const [styles, setStyles] = useState(baseStyles)

  useEffect(() => {
    setMounted(true)
    return () => {
      setMounted(false)
    }
  }, [])

  useEffect(() => {
    const SPACING = 16
    const CONTEXT_MENU_WIDTH = 215
    const contextDomElement = refObject?.current
    if (!contextDomElement || !isOpened) return
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const { scrollHeight } = contextDomElement
    const { clientX, clientY } = isOpened
    const isOuterX = clientX + CONTEXT_MENU_WIDTH > windowWidth - SPACING
    const isOuterY = clientY + scrollHeight > windowHeight - SPACING
    const diffX = isOuterX ? windowWidth - CONTEXT_MENU_WIDTH - SPACING : clientX
    let diffY = isOuterY ? windowHeight - scrollHeight - SPACING : clientY
    if (diffY < SPACING) {
      contextDomElement.style.overflow = 'auto'
      diffY = SPACING
    }

    setStyles({
      ...baseStyles,
      top: diffY,
      left: diffX,
    })
    if (isOpened) contextDomElement.focus()
  }, [isOpened])

  const handleClickOutside = () => {
    setOpened(null)
  }

  return mounted && isOpened
    ? createPortal(
        <Wrapper refObject={refObject} style={styles} onBlur={handleClickOutside}>
          {children}
        </Wrapper>,
        document.querySelector('#context-menu-portal') as Element,
      )
    : null
}

export default Portal
