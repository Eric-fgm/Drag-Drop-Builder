import React from 'react'
import { TTempalatePropsValues } from '@/store/slices/templatesSlice'
import CollapsableSection from '@/components/CollapsableSection/CollapsableSection'
import BoundingInput from '@/components/BoundingInput/BoundingInput'
import ColorInput from '@/components/ColorInput/ColorInput'
import useTools from '@/features/Presentation/hooks/useTools'
import Input from '@/components/Input/Input'
import { StyledContainer, StyledWrapper } from './styles'

export type TToolsProps = TTempalatePropsValues & {
  id: number
  nodeTools: React.FC<any>
}

const Tools: React.FC<TToolsProps> = ({
  nodeTools: NodeTools,
  classes = '',
  ids = '',
  ...props
}) => {
  const { handleChange, handleContainerCssChange } = useTools({ id: props.id })

  const {
    marginTop = 'inherit',
    marginBottom = 'inherit',
    marginLeft = 'inherit',
    marginRight = 'inherit',
    paddingTop = 'inherit',
    paddingBottom = 'inherit',
    paddingLeft = 'inherit',
    paddingRight = 'inherit',
    backgroundColor = '',
    zIndex = 'auto',
  } = props.containerCss

  return (
    <StyledContainer>
      <CollapsableSection headline="Główne">
        <StyledWrapper>
          <NodeTools {...props} />
        </StyledWrapper>
      </CollapsableSection>

      <CollapsableSection headline="Inne">
        <StyledWrapper>
          <BoundingInput
            name="margin"
            label="Margines"
            value={{
              top: marginTop,
              bottom: marginBottom,
              left: marginLeft,
              right: marginRight,
            }}
            // disabled={{
            //   left: maxWidth === "1220px",
            //   right: maxWidth === "1220px",
            // }}
            onChange={handleContainerCssChange}
          />
          <BoundingInput
            name="padding"
            label="Padding"
            value={{
              top: paddingTop,
              bottom: paddingBottom,
              left: paddingLeft,
              right: paddingRight,
            }}
            onChange={handleContainerCssChange}
          />
          <ColorInput
            label="Tło"
            name="backgroundColor"
            value={backgroundColor}
            onChange={handleContainerCssChange}
          />
        </StyledWrapper>
      </CollapsableSection>
      <CollapsableSection headline="Zaawansowane">
        <StyledWrapper>
          <Input
            label="Z-Index"
            name="zIndex"
            type="number"
            placeholder="Default"
            value={zIndex}
            onChange={handleContainerCssChange}
          />
          <Input
            label="CSS ID"
            name="ids"
            type="text"
            placeholder="—"
            value={ids}
            onChange={handleChange}
          />
          <Input
            label="CSS Classes"
            name="classes"
            type="text"
            placeholder="—"
            value={classes}
            onChange={handleChange}
          />
        </StyledWrapper>
      </CollapsableSection>
    </StyledContainer>
  )
}

export default React.memo(Tools)
