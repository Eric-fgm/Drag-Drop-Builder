import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { MenuItem } from '@/library/ContextMenu'
import { addTemplate } from '@/store/slices/templatesSlice'
import column from '@/features/Elements/components/Column'

export interface IInnerSectionContextMenuProps {
  id: number
}

const InnerSectionContextMenu: React.FC<IInnerSectionContextMenuProps> = ({
  id,
}) => {
  const dispatch = useDispatch()

  const handleAddColumn = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
    dispatch(
      addTemplate({
        destinationId: id,
        value: { ...column.props, typename: 'column' },
      })
    )
  }, [])

  return (
    <MenuItem text="Dodaj kolumne" onClick={handleAddColumn} />
  )
}

export default InnerSectionContextMenu
