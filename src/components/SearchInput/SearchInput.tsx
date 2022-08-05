import React, { forwardRef } from 'react'
import { Icon, Input, Label } from '@/components/SearchInput/styles'
import SolidSearch from '@/icons/SolidSearch'

export interface ISearchInputProps {}

const SearchInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & ISearchInputProps
>((props, ref) => (
  <Label htmlFor=''>
    <Icon>
      <SolidSearch width={18} height={18} />
    </Icon>
    <Input ref={ref} placeholder='Szukaj Widgetu' {...props} />
  </Label>
))

SearchInput.displayName = 'SearchInput'

export default SearchInput
