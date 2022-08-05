import React, { useCallback, useEffect, useRef } from 'react'
import { StyledTextarea } from '@/components/Textarea/styles'

export interface ITextareaProps {}

const Textarea: React.FC<
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & ITextareaProps
> = ({ spellCheck = false, onChange, ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const updateBoundings = useCallback(() => {
    if (!textareaRef.current) return
    textareaRef.current.style.height = 'auto'
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight  }px`
  }, [textareaRef])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      updateBoundings()
      onChange && onChange(event)
    },
    []
  )

  useEffect(() => {
    updateBoundings()
  }, [props])

  return (
    <StyledTextarea
      ref={textareaRef}
      rows={1}
      spellCheck={spellCheck}
      onChange={handleChange}
      {...props}
    />
  )
}

export default Textarea
