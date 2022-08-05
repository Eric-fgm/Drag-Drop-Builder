import React from 'react'
import { useDispatch } from 'react-redux'
import Textarea from '@/components/Textarea/Textarea'
import { updateTemplateProps } from '@/store/slices/templatesSlice'
import { TWidgetBase } from '@/features/Widgets/types'

export interface IParagraphProps extends TWidgetBase {
  tag: string
  text: string
}

const Paragraph: React.FC<IParagraphProps> = ({ id, css, text }) => {
  const dispatch = useDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateTemplateProps({ id, props: { text: event.target.value } }))
  }

  return <Textarea style={css} value={text} onChange={handleChange} />
}

export default Paragraph
