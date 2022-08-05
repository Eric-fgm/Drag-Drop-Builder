import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
  StyledContainer,
  StyledTitle,
  StyledIcon,
} from '@/features/Sidebar/components/Header/styles'
import SolidMenu from '@/icons/SolidMenu'
import SolidGrid from '@/icons/SolidGrid'
import { setFocusedTemplate } from '@/store/slices/templatesSlice'

export interface IHeaderProps {
  title?: string
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  const dispatch = useDispatch()

  const handleGridClick = useCallback(() => {
    dispatch(setFocusedTemplate({ id: undefined }))
  }, [])

  return (
    <StyledContainer>
      <StyledIcon>
        <SolidMenu />
      </StyledIcon>
      <StyledTitle> {title ? `Edytuj ${title}` : 'Builder'}</StyledTitle>
      <StyledIcon ltr onClick={handleGridClick}>
        <SolidGrid />
      </StyledIcon>
    </StyledContainer>
  )
}

export default React.memo(Header)
