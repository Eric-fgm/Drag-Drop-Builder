import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 28px;

  & > * {
    flex: 1;
  }
`

export const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 2px;
  width: 100%;

  &:hover {
    box-shadow: 0 0 0 1px #e0e0e0;
  }
`

export const StyledIndicator = styled.span`
  position: absolute;
  top: 50%;
  right: 4px;
  height: 16px;
  color: var(--text-color);
  transform: translateY(-50%);
  pointer-events: none;
`

export const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    paddingRight: 16,
    fontSize: 12,
    background: 'transparent',
    border: 'none',
    minHeight: 'auto',
    boxShadow: 'none',
    height: 28,
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    padding: '0 6px',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    margin: 0,
    color: 'var(--text-color)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
  menu: (provided: any) => ({
    ...provided,
    margin: '4px 0',
    color: '#fff',
    background: 'var(--primary-color)',
    borderRadius: 2,
  }),
  option: (provided: any, { isSelected, isFocused }: any) => ({
    ...provided,
    padding: '6px',
    fontSize: 13,
    background: isSelected ? '#0d99ff' : isFocused ? '#6d7080' : 'transparent',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    display: 'none',
  }),
  indicatorSeparator: () => ({ display: 'none' }),
}
