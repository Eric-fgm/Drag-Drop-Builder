import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Textarea from '@/components/Textarea/Textarea'
import { updateTemplateProps } from '@/store/slices/templatesSlice'
import { StyledContainer } from '@/features/Widgets/components/Headline/styles'
import { TWidgetBase } from '@/features/Widgets/types'

export interface IHeadlineProps extends TWidgetBase {
  tag: string
  text: string
}

const Headline: React.FC<IHeadlineProps> = ({ id, css, text }) => {
  const dispatch = useDispatch()

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(updateTemplateProps({ id, props: { text: event.target.value } }))
    },
    []
  )

  return (
    <StyledContainer>
      <Textarea style={css} value={text} onChange={handleChange} />
    </StyledContainer>
  )
}

export default Headline
