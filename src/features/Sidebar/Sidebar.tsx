import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '@/features/Sidebar/components/Header/Header'
import { StyledContainer, StyledWrapper } from '@/features/Sidebar/styles'
import SearchInput from '@/components/SearchInput/SearchInput'
import WidgetList from '@/features/Sidebar/components/WidgetList/WidgetList'
import { setSearch } from '@/store/slices/widgetsSlice'
import { selectFocusedTemplate } from '@/store/slices/templatesSlice'
import Tools from '@/features/Sidebar/components/Tools/Tools'

export interface ISidebarProps {}

const Sidebar: React.FC<ISidebarProps> = (props) => {
  const dispatch = useDispatch()

  const focusedTemplateProps = useSelector(selectFocusedTemplate)

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(target.value))
  }

  return (
    <StyledContainer>
      <Header title={focusedTemplateProps?.name} />
      <StyledWrapper>
        {focusedTemplateProps ? (
          <Tools {...focusedTemplateProps} />
        ) : (
          <>
            <SearchInput onChange={handleChange} /> <WidgetList />
          </>
        )}
      </StyledWrapper>
    </StyledContainer>
  )
}

export default Sidebar
