import { useRef, useState } from 'react'
import { DropTargetMonitor, useDrag, useDrop, XYCoord } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { addTemplate, checkIsFocused, moveTemplate } from '@/store/slices/templatesSlice'
import { TDragItemProps } from '@/features/Sidebar/components/Widget/Widget'
import { RootState } from '@/store/store'
import { TWidgetProps } from '@/store/slices/widgetsSlice'

export interface IuseTemplateProps {
  id: number
  parentId: number
  index: number
  typename: TWidgetProps['typename']
}

const useTemplate = ({ id, parentId, index, typename }: IuseTemplateProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()

  const isFocused = useSelector((state: RootState) => checkIsFocused(state, id))

  const [anchor, setAnchor] = useState<'DOWNWARDS' | 'UPWARDS' | null>(null)

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'template',
      item: {
        action: 'MOVE',
        draggingRef: ref,
        payload: { id, parentId, typename },
      } as TDragItemProps,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, parentId, ref],
  )

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: 'template',
      drop: (item: TDragItemProps, monitor) => {
        setAnchor(null)
        !monitor.didDrop() && monitor.isOver({ shallow: true }) && handleDrop(item)
      },
      hover: (item: TDragItemProps, monitor) => {
        if (!ref.current || !monitor.canDrop() || !monitor.isOver({ shallow: true }))
          return setAnchor(null)
        handleHover(item, monitor)
      },
      canDrop: ({ draggingRef }) => !draggingRef?.current?.contains(ref.current),
      collect: (monitor) => ({
        isOverShallow: monitor.isOver({ shallow: true }),
        isOver: monitor.isOver(),
      }),
    }),
    [id, parentId, index, anchor, isDragging, ref],
  )

  function handleDrop({ action, payload }: TDragItemProps) {
    const formatedIndex = anchor === 'UPWARDS' ? index + 1 : index
    if (action === 'ADD') {
      dispatch(
        addTemplate({
          destinationId: parentId,
          index: formatedIndex,
          value: payload,
        }),
      )
    } else {
      dispatch(
        moveTemplate({
          destinationId: parentId,
          sourceId: payload.parentId,
          id: payload.id,
          index: formatedIndex,
        }),
      )
    }
  }

  function handleHover(item: TDragItemProps, monitor: DropTargetMonitor) {
    const collectionDOM = ref.current
    if (isDragging || !collectionDOM) return

    const hoverBoundingRect = collectionDOM.getBoundingClientRect()
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
    const clientOffset = monitor.getClientOffset()
    const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

    if (hoverClientY < hoverMiddleY) return setAnchor('DOWNWARDS')
    if (hoverClientY >= hoverMiddleY) return setAnchor('UPWARDS')
  }

  drag(drop(ref))

  return {
    ref,
    isFocused,
    // isDragging,
    // isOverShallow,
    isOverDownwards: isOver && anchor === 'DOWNWARDS',
    isOverUpwards: isOver && anchor === 'UPWARDS',
  }
}

export default useTemplate
