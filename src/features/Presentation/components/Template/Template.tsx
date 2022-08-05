import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useTemplate from '@/features/Presentation/hooks/useTemplate'
import { widgets, TWidgetsPropsValues } from '@/features/Widgets/rootWidgets'
import {
  StyledContainer,
  StyledWrapper,
  StyledBadge,
} from '@/features/Presentation/components/Template/styles'
import DropPlaceholder from '@/components/DropPlaceholder/DropPlaceholder'
import {
  duplicateTemplate,
  removeTemplate,
  selectTemplateById,
  setFocusedTemplate,
} from '@/store/slices/templatesSlice'
import { RootState } from '@/store/store'
import TemplateContextMenu from '@/features/Presentation/components/TemplateContextMenu/TemplateContextMenu'
import useContextMenu from '@/library/ContextMenu/hooks/useContextMenu'
import SolidEdit from '@/icons/SolidEdit'

export interface ITemplateProps {
  id: number
  parentId: number
  index: number
}

const Template: React.FC<ITemplateProps> = ({ id, parentId, index }) => {
  const dispatch = useDispatch()

  const { handleContextMenu, ...contextMenuProps } = useContextMenu()

  const templateProps = useSelector((state: RootState) =>
    selectTemplateById(state, id),
  ) as TWidgetsPropsValues

  const { ref, isFocused, isOverDownwards, isOverUpwards } = useTemplate({
    id,
    parentId,
    index,
    typename: templateProps.typename,
  })

  const Node = useMemo(() => widgets[templateProps.typename].node, [templateProps.typename]) as any

  const ContextMenu = useMemo(() => {
    const currentWidget = widgets[templateProps.typename]
    if ('contextMenu' in currentWidget) return currentWidget.contextMenu
  }, [templateProps.typename])

  const handleRemove = useCallback(() => {
    dispatch(removeTemplate({ sourceId: parentId, id }))
  }, [])

  const handleDuplicate = useCallback(() => {
    dispatch(duplicateTemplate({ destinationId: parentId, duplicateId: id }))
  }, [])

  const handleFocus = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
    event.preventDefault()
    dispatch(setFocusedTemplate({ id }))
  }, [])

  return (
    <StyledContainer
      ref={ref}
      id={templateProps.ids}
      className={templateProps.classes}
      isFocused={isFocused || !!contextMenuProps.isOpened}
      onContextMenu={handleContextMenu}
    >
      <StyledWrapper style={templateProps.containerCss}>
        {isOverDownwards && <DropPlaceholder />}

        <Node id={id} {...templateProps} />
        {isOverUpwards && <DropPlaceholder />}
      </StyledWrapper>
      <StyledBadge onClick={handleFocus}>
        <SolidEdit />
      </StyledBadge>
      <TemplateContextMenu
        {...contextMenuProps}
        onRemove={handleRemove}
        onDuplicate={handleDuplicate}
      >
        {ContextMenu && <ContextMenu id={id} />}
      </TemplateContextMenu>
    </StyledContainer>
  )
}

export default React.memo(Template)
