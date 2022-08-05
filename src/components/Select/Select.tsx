import React, { useMemo } from 'react'
import { default as ReactSelect, SingleValue } from 'react-select'
import SolidArrow from '@/icons/SolidArrow'
import { selectStyles, StyledContainer, StyledWrapper, StyledIndicator } from './styles'
import Label from '../Label/Label'

export interface ISelectPayload {
  name: string
  value: string
}

export interface ISelectProps {
  label?: string
  options: { value: string; label: string }[]
  name?: string
  value: string | number
  onChange?: (payload: ISelectPayload) => void
}

const Select: React.FC<ISelectProps> = ({
  label,
  options = [],
  name = '',
  value = '',
  onChange,
}) => {
  const getValue = useMemo(() => {
    for (let i = 0; i < options.length; i++) {
      const currOption = options[i]
      if (currOption.value === value) return currOption
    }
  }, [value])

  const handleChange = (
    payload: SingleValue<{
      value: string
      label: string
    }>,
  ) => {
    onChange && onChange({ name, value: payload?.value || '' })
  }

  return (
    <StyledContainer>
      {label && <Label text={label} />}
      <StyledWrapper>
        <ReactSelect
          options={options as any}
          styles={selectStyles}
          value={getValue}
          isSearchable={false}
          placeholder='Wybierz'
          onChange={handleChange}
        />
        <StyledIndicator>
          <SolidArrow width={14} height={14} />
        </StyledIndicator>
      </StyledWrapper>
    </StyledContainer>
  )
}

export default React.memo(Select)
