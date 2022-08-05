import React from 'react'
import isEqual from 'react-fast-compare'
import Input from '../Input/Input'
import { StyledContainer, StyledWrapper, StyledContent, StyledLabel } from './styles'

export interface IBoundingInputPayload {
  name: string
  value: number
}

export interface IBoundingInputProps {
  label: string
  name?: string
  value: {
    top?: number | string
    bottom?: number | string
    left?: number | string
    right?: number | string
  }
  disabled?: {
    top?: boolean
    bottom?: boolean
    left?: boolean
    right?: boolean
  }
  onChange?: (payload: IBoundingInputPayload) => void
}

const BoundingInput: React.FC<IBoundingInputProps> = ({
  name = '',
  label,
  value = {},
  disabled = {},
  onChange,
}) => {
  const { top = 'inherit', bottom = 'inherit', left = 'inherit', right = 'inherit' } = value

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange({ name: name + target.name, value: +target.value })
  }

  console.log(top, bottom, left, right)

  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledWrapper>
        <StyledContent>
          <Input
            name='Top'
            type='number'
            max={999}
            placeholder='—'
            value={top}
            disabled={disabled.top}
            onChange={handleChange}
          />
          <span>Top</span>
        </StyledContent>
        <StyledContent>
          <Input
            name='Right'
            type='number'
            max={999}
            placeholder='—'
            value={right}
            disabled={disabled.right}
            onChange={handleChange}
          />
          <span>Right</span>
        </StyledContent>
        <StyledContent>
          <Input
            name='Bottom'
            type='number'
            max={999}
            placeholder='—'
            value={bottom}
            disabled={disabled.bottom}
            onChange={handleChange}
          />
          <span>Bottom</span>
        </StyledContent>
        <StyledContent>
          <Input
            name='Left'
            type='number'
            max={999}
            placeholder='—'
            value={left}
            disabled={disabled.left}
            onChange={handleChange}
          />
          <span>Left</span>
        </StyledContent>
      </StyledWrapper>
    </StyledContainer>
  )
}

export default React.memo(BoundingInput, isEqual)
