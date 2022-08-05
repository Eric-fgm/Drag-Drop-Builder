import React, { RefObject, useMemo, useRef } from 'react'
import { useDrag } from 'react-dnd'
import { Wrapper, Name } from '@/features/Sidebar/components/Widget/styles'
import { widgets , TWidgetsPropsValues } from '@/features/Widgets/rootWidgets'
import { TWidgetProps } from '@/store/slices/widgetsSlice'

export type TDragItemProps =
  | {
      action: 'ADD'
      draggingRef: RefObject<HTMLDivElement>
      payload: TWidgetsPropsValues
    }
  | {
      action: 'MOVE'
      draggingRef: RefObject<HTMLDivElement>
      payload: {
        id: number
        parentId: number
        typename: TWidgetProps['typename']
      }
    }

const Widget: React.FC<TWidgetProps> = (props) => {
  const widgetRef = useRef<HTMLDivElement>(null)
  const { name, typename, defaultProps } = props

  const Icon = useMemo(() => widgets[typename].icon, [typename])

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'template',
      item: {
        action: 'ADD',
        draggingRef: widgetRef,
        payload: { ...defaultProps, typename },
      } as TDragItemProps,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [widgetRef]
  )

  drag(widgetRef)

  return (
    <Wrapper ref={widgetRef} isDragging={isDragging}>
      <Icon />
      <Name>{name}</Name>
    </Wrapper>
  )
}

export default React.memo(Widget)
