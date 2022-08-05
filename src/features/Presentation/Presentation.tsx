import React from 'react'
import { useSelector } from 'react-redux'
import DropArea from '@/features/Presentation/components/DropArea/DropArea'
import { StyledContainer } from '@/features/Presentation/styles'
import { selectRootTemplates } from '@/store/slices/templatesSlice'
import Section from '@/features/Elements/components/Section/Section'
import DragPreview from '@/components/DragPreview/DragPreview'

export interface IPresentationProps {}

const Presentation: React.FC<IPresentationProps> = (props) => {
  const rootTemplates = useSelector(selectRootTemplates)

  return (
    <StyledContainer>
      {!!rootTemplates.length &&
        rootTemplates.map((sectionProps) => <Section key={sectionProps.id} {...sectionProps} />)}
      <DropArea />
      <DragPreview />
    </StyledContainer>
  )
}

export default Presentation
