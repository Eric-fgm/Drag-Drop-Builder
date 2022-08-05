import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MenuItem } from '@/library/ContextMenu'
import useContextMenu from '@/library/ContextMenu/hooks/useContextMenu'
import useInitialColumns from '@/hooks/useInitialColumns'
import {
  StyledBadge,
  StyledContainer,
  StyledWrapper,
} from '@/features/Elements/components/Section/styles'
import Column from '@/features/Elements/components/Column/Column'
import {
  checkIsFocused,
  duplicateTemplate,
  removeTemplate,
  setFocusedTemplate,
} from '@/store/slices/templatesSlice'
import { TElementBase } from '@/features/Elements/types'
import { RootState } from '@/store/store'
import SolidCross from '@/icons/SolidCross'
import SolidDrag from '@/icons/SolidDrag'
import SolidPlus from '@/icons/SolidPlus'
import ElementContextMenu from '../ElementContextMenu/ElementContextMenu'

export interface ISectionProps extends TElementBase {
  tag: string
  inner: number[]
}

const Section: React.FC<ISectionProps> = ({
  id,
  ids = '',
  classes = '',
  css,
  containerCss,
  inner,
}) => {
  const dispatch = useDispatch()

  const { handleContextMenu, ...contextMenuProps } = useContextMenu()
  const { addColumn } = useInitialColumns({ id, array: inner })

  const isFocused = useSelector((state: RootState) => checkIsFocused(state, id))

  const style = useMemo(() => {
    const { backgroundImage, ...restCss } = css
    return {
      backgroundImage: `url(${backgroundImage})`,
      ...restCss,
      ...containerCss,
    }
  }, [css, containerCss])

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation()
      dispatch(setFocusedTemplate({ id }))
    },
    [dispatch, id],
  )

  const handleRemove = useCallback(() => {
    dispatch(removeTemplate({ id }))
  }, [dispatch, id])

  const handleDuplicate = useCallback(() => {
    dispatch(duplicateTemplate({ duplicateId: id }))
  }, [dispatch, id])

  return (
    <StyledContainer
      id={ids}
      className={classes}
      isFocused={isFocused || !!contextMenuProps.isOpened}
      onContextMenu={handleContextMenu}
    >
      <StyledWrapper style={style}>
        {!!inner.length &&
          inner.map((innerId) => <Column key={innerId} id={innerId} parentId={id} />)}
      </StyledWrapper>
      <StyledBadge>
        <span>
          <SolidPlus />
        </span>
        <span onClick={handleClick}>
          <SolidDrag />
        </span>
        <span onClick={handleRemove}>
          <SolidCross />
        </span>
      </StyledBadge>
      <ElementContextMenu
        {...contextMenuProps}
        onEdit={handleClick}
        onRemove={handleRemove}
        onDuplicate={handleDuplicate}
      >
        <MenuItem text='Dodaj kolumne' onClick={addColumn} />
      </ElementContextMenu>
    </StyledContainer>
  )
}

export default React.memo(Section)
