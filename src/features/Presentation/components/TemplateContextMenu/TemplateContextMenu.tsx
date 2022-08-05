import React from 'react'
import ContextMenu, { IContextMenuBaseProps, MenuItem } from '@/library/ContextMenu'

export interface ITemplateContextMenuProps extends IContextMenuBaseProps {
  onDuplicate: () => void
  onRemove: () => void
}

const TemplateContextMenu: React.FC<ITemplateContextMenuProps> = ({
  children,
  onDuplicate,
  onRemove,
  ...props
}) => {
  return (
    <ContextMenu {...props}>
      {children}
      <MenuItem text='Duplikuj' onClick={onDuplicate} />
      <MenuItem text='Usuń' onClick={onRemove} />
    </ContextMenu>
  )
}

export default TemplateContextMenu
