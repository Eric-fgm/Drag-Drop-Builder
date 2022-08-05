import React from 'react'
import { useDispatch } from 'react-redux'
import { useDrop } from 'react-dnd'
import {
  Container,
  Wrapper,
  Circle,
  Paragraph,
} from '@/features/Presentation/components/DropArea/styles'
import { addTemplate, moveTemplate } from '@/store/slices/templatesSlice'
import { TDragItemProps } from '@/features/Sidebar/components/Widget/Widget'

export interface IDropAreaProps {}

const DropArea: React.FC<IDropAreaProps> = () => {
  const dispatch = useDispatch()

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'template',
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }))

  function handleDrop({ action, payload }: TDragItemProps) {
    if (action === 'ADD') {
      dispatch(
        addTemplate({
          value: payload,
        }),
      )
    } else {
      dispatch(
        moveTemplate({
          sourceId: payload.parentId,
          id: payload.id,
        }),
      )
    }
  }

  return (
    <Container>
      <Wrapper ref={drop} isOver={isOver}>
        <Circle>+</Circle>
        <Paragraph>UPUŚĆ KOMPONENTY</Paragraph>
      </Wrapper>
    </Container>
  )
}

export default React.memo(DropArea)
