import React from 'react'
import { useSelector } from 'react-redux'
import { selectWidgets } from '@/store/slices/widgetsSlice'
import {
  StyledContainer,
  StyledWrapper,
} from '@/features/Sidebar/components/WidgetList/styles'
import Widget from '@/features/Sidebar/components/Widget/Widget'
import CollapsableSection from '@/components/CollapsableSection/CollapsableSection'

export interface IWidgetListProps {}

const WidgetList: React.FC<IWidgetListProps> = (props) => {
  const widgets = useSelector(selectWidgets)

  return (
    <StyledContainer>
      {!!widgets.length && (
        <CollapsableSection headline="Główne">
          <StyledWrapper>
            {widgets.map((widgetProps) => (
              <Widget key={widgetProps.typename} {...widgetProps} />
            ))}
          </StyledWrapper>
        </CollapsableSection>
      )}
    </StyledContainer>
  )
}

export default WidgetList
