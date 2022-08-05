import React, { useCallback, useState } from 'react'
import { IContextMenuBaseProps } from '@/library/ContextMenu'

export interface IuseContextMenuProps {}

const useContextMenu = (): IContextMenuBaseProps & {
  handleContextMenu: (event: React.MouseEvent<HTMLElement>) => void
} => {
  const [isOpened, setOpened] = useState<React.MouseEvent<HTMLElement> | null>(
    null
  )

  const handleContextMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault()
      event.stopPropagation()
      setOpened(event)
    },
    []
  )

  return { isOpened, setOpened, handleContextMenu }
}

export default useContextMenu
