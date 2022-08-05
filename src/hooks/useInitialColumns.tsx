import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, batch } from 'react-redux'
import { addTemplate } from '@/store/slices/templatesSlice'
import column from '@/features/Elements/components/Column'

export interface IuseInitialColumnsProps {
  id: number
  array: any[]
  length?: number
}

const useInitialColumns = ({ id, array, length = 1 }: IuseInitialColumnsProps) => {
  const mounted = useRef(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    if (array.length === 0) {
      batch(() => {
        for (let i = 0; i < length; i++) {
          addColumn()
        }
      })
    }
  }, [array.length])

  const addColumn = useCallback(() => {
    dispatch(
      addTemplate({
        destinationId: id,
        value: { ...column.props, typename: 'column' },
      }),
    )
  }, [id])

  return { addColumn }
}

export default useInitialColumns
