import React, { useMemo } from 'react'
import useTools from '@/features/Presentation/hooks/useTools'
import Select from '@/components/Select/Select'
import Input from '@/components/Input/Input'
import ColorInput from '@/components/ColorInput/ColorInput'
import { IHeadlineProps } from './Headline'

export interface IHeadlineToolsProps extends IHeadlineProps {}

const HeadlineTools: React.FC<IHeadlineToolsProps> = ({ id, css, tag }) => {
  const { handleChange, handleCssChange } = useTools({ id })

  const {
    fontFamily = 'inherit',
    fontWeight = 'inherit',
    fontSize = 16,
    textAlign = 'inherit',
    color = '',
  } = css

  const options = useMemo(
    () => ({
      font: [
        { value: 'inherit', label: 'Domyślna' },
        { value: 'Arial', label: 'Arial' },
        { value: 'Roboto', label: 'Roboto' },
        { value: 'sans-serif', label: 'Sans Serif' },
      ],
      fontWeight: [
        { value: 'inherit', label: 'Domyślne' },
        { value: '300', label: 'Light' },
        { value: '400', label: 'Regular' },
        { value: '500', label: 'Medium' },
        { value: '600', label: 'Bold' },
      ],
      textAlign: [
        { label: 'Domyślne', value: 'inherit' },
        { label: 'Do lewej', value: 'left' },
        { label: 'Do środka', value: 'center' },
        { label: 'Do prawej', value: 'right' },
      ],
      tags: [
        { value: 'h1', label: 'h1' },
        { value: 'h2', label: 'h2' },
        { value: 'h3', label: 'h3' },
        { value: 'h4', label: 'h4' },
        { value: 'h5', label: 'h5' },
        { value: 'h6', label: 'h6' },
      ],
    }),
    [],
  )

  return (
    <>
      <Select
        label='Czcionka'
        name='fontFamily'
        value={fontFamily}
        options={options.font}
        onChange={handleCssChange}
      />
      <Select
        label='Grubość czcionki'
        name='fontWeight'
        value={fontWeight}
        options={options.fontWeight}
        onChange={handleCssChange}
      />
      <Input
        label='Wielkość czcionki'
        name='fontSize'
        type='number'
        placeholder='Default'
        value={fontSize}
        onChange={handleCssChange}
      />
      <Select
        label='Wyrównanie'
        name='textAlign'
        options={options.textAlign}
        value={textAlign}
        onChange={handleCssChange}
      />
      <ColorInput label='Kolor czcionki' name='color' value={color} onChange={handleCssChange} />
      <Select
        label='HTML Tag'
        name='tag'
        value={tag}
        options={options.tags}
        onChange={handleChange}
      />
    </>
  )
}

export default React.memo(HeadlineTools)
