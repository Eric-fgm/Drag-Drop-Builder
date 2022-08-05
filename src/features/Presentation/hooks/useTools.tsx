import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { IBoundingInputPayload } from '@/components/BoundingInput/BoundingInput'
import { ISelectPayload } from '@/components/Select/Select'
import { updateTemplateProps } from '@/store/slices/templatesSlice'

export interface IuseToolsProps {
  id: number
}

const useTools = ({ id }: IuseToolsProps) => {
  const dispatch = useDispatch()

  const handleChange = useCallback(
    (payload: React.ChangeEvent<HTMLInputElement> | ISelectPayload | IBoundingInputPayload) => {
      const name = 'target' in payload ? payload.target.name : payload.name
      const value =
        'target' in payload
          ? payload.target.type === 'number'
            ? +payload.target.value
            : payload.target.value
          : payload.value
      dispatch(updateTemplateProps({ id, props: { [name]: value } }))
    },
    [id, dispatch],
  )

  const handleCssChange = useCallback(
    (
      payload: React.ChangeEvent<HTMLInputElement> | ISelectPayload | IBoundingInputPayload,
      key?: 'css' | 'containerCss',
    ) => {
      const name = 'target' in payload ? payload.target.name : payload.name
      const value =
        'target' in payload
          ? payload.target.type === 'number'
            ? +payload.target.value
            : payload.target.value
          : payload.value
      dispatch(updateTemplateProps({ id, props: { css: { [name]: value } } }))
    },
    [id, dispatch],
  )

  const handleContainerCssChange = useCallback(
    (payload: React.ChangeEvent<HTMLInputElement> | ISelectPayload | IBoundingInputPayload) => {
      const name = 'target' in payload ? payload.target.name : payload.name
      const value =
        'target' in payload
          ? payload.target.type === 'number'
            ? +payload.target.value
            : payload.target.value
          : payload.value
      dispatch(updateTemplateProps({ id, props: { containerCss: { [name]: value } } }))
    },
    [id, dispatch],
  )

  return { handleChange, handleCssChange, handleContainerCssChange }
}

export default useTools
