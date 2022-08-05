import React from 'react'
import ContextMenu, { IContextMenuBaseProps, MenuItem } from '@/library/ContextMenu'

export interface IElementContextMenuProps extends IContextMenuBaseProps {
  onEdit?: (event: React.MouseEvent<HTMLDivElement>) => void
  onDuplicate?: () => void
  onRemove?: () => void
}

const ElementContextMenu: React.FC<IElementContextMenuProps> = ({
  children,
  onEdit,
  onDuplicate,
  onRemove,
  ...props
}) => {
  return (
    <ContextMenu {...props}>
      <MenuItem text='Edytuj' onClick={onEdit} />
      {children}
      <MenuItem text='Duplikuj' onClick={onDuplicate} />
      <MenuItem text='Usuń' onClick={onRemove} />
    </ContextMenu>
  )
}

export default ElementContextMenu
