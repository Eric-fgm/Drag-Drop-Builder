import React, { useMemo } from 'react'
import { useDragLayer } from 'react-dnd'
// @ts-ignore: Unreachable code error
import { usePreview } from 'react-dnd-preview'
import { widgets } from '@/features/Widgets/rootWidgets'
import { StyledName, StyledWrapper } from '@/components/DragPreview/styles'
import { TDragItemProps } from '@/features/Sidebar/components/Widget/Widget'

const DragPreview: React.FC = () => {
  const { display, item, style } = usePreview() as {
    display: boolean
    item?: TDragItemProps
    style: React.CSSProperties
  }

  const { x, y } = useDragLayer((monitor) => {
    const coords = monitor.getClientOffset()
    if (!coords) return { x: 0, y: 0 }
    const DRAG_PREVIEW_BOUNDING = 105
    return {
      x: coords.x - DRAG_PREVIEW_BOUNDING / 2,
      y: coords.y - DRAG_PREVIEW_BOUNDING / 2,
    }
  })

  const { payload } = item || {}
  const dragPreviewProps = useMemo(() => {
    if (!payload) return
    const { typename } = payload
    return widgets[typename]
  }, [payload?.typename])

  if (!display || !dragPreviewProps) {
    return null
  }

  const { name, icon: Icon } = dragPreviewProps

  return (
    <StyledWrapper
      style={{
        ...style,
        pointerEvents: 'none',
        WebkitTransform: `translate(${x}px, ${y}px)`,
        transform: `translate(${x}px, ${y}px)`,
        zIndex: 999,
      }}
    >
      <Icon />
      <StyledName>{name}</StyledName>
    </StyledWrapper>
  )
}

export default React.memo(DragPreview)
