import React, { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDrop } from 'react-dnd'
import { TDragItemProps } from '@/features/Sidebar/components/Widget/Widget'
import {
  addTemplate,
  checkIsFocused,
  duplicateTemplate,
  moveTemplate,
  removeTemplate,
  selectTemplateById,
  setFocusedTemplate,
} from '@/store/slices/templatesSlice'
import {
  StyledContainer,
  StyledWrapper,
  StyledContent,
  StyledDroparea,
  StyledBadge,
} from '@/features/Elements/components/Column/styles'
import Template from '@/features/Presentation/components/Template/Template'
import { RootState } from '@/store/store'
import { TElementsProps } from '@/features/Elements/rootElements'
import SolidColumn from '@/icons/SolidColumn'
import useContextMenu from '@/library/ContextMenu/hooks/useContextMenu'
import ElementContextMenu from '../ElementContextMenu/ElementContextMenu'

export interface IColumnProps {
  id: number
  parentId: number
}

const Column: React.FC<IColumnProps> = ({ id, parentId }) => {
  const columnRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()

  const {
    css,
    containerCss,
    inner,
    ids = '',
    classes = '',
  } = useSelector((state: RootState) => selectTemplateById(state, id)) as TElementsProps['column']

  const { inner: parentInner } = useSelector((state: RootState) =>
    selectTemplateById(state, parentId),
  ) as TElementsProps['section']

  const isFocused = useSelector((state: RootState) => checkIsFocused(state, id))

  const { handleContextMenu, ...contextMenuProps } = useContextMenu()

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: 'template',
      drop: handleDrop,
      canDrop: ({ draggingRef }) => !draggingRef?.current?.contains(columnRef.current),
      collect: (monitor) => ({
        isOver: monitor.canDrop() && monitor.isOver(),
      }),
    }),
    [id, columnRef],
  )

  function handleDrop({ action, payload }: TDragItemProps) {
    if (action === 'ADD') {
      dispatch(
        addTemplate({
          destinationId: id,
          value: payload,
        }),
      )
    } else {
      dispatch(
        moveTemplate({
          destinationId: id,
          sourceId: payload.parentId,
          id: payload.id,
          index: 0,
        }),
      )
    }
  }

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation()
      dispatch(setFocusedTemplate({ id }))
    },
    [dispatch, id],
  )

  const handleRemove = useCallback(() => {
    dispatch(removeTemplate({ sourceId: parentId, id }))
  }, [dispatch, id, parentId])

  const handleDuplicate = useCallback(() => {
    dispatch(duplicateTemplate({ destinationId: parentId, duplicateId: id }))
  }, [dispatch, id, parentId])

  drop(columnRef)

  return (
    <StyledContainer
      isFocused={isFocused || !!contextMenuProps.isOpened}
      onContextMenu={handleContextMenu}
    >
      <StyledWrapper style={containerCss} id={ids} className={classes}>
        <StyledContent style={css}>
          {!!inner.length &&
            inner.map((innerId, index) => (
              <Template key={innerId} id={innerId} parentId={id} index={index} />
            ))}
          <StyledDroparea ref={columnRef} hasContent={!!inner.length} isOver={isOver}>
            +
          </StyledDroparea>
        </StyledContent>
      </StyledWrapper>
      <StyledBadge onClick={handleClick}>
        <SolidColumn />
      </StyledBadge>
      <ElementContextMenu
        {...contextMenuProps}
        {...(parentInner.length > 1 && { onRemove: handleRemove })}
        onEdit={handleClick}
        onDuplicate={handleDuplicate}
      />
    </StyledContainer>
  )
}

export default React.memo(Column)
