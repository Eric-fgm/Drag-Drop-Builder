import React, { useMemo } from 'react'
import Select from '@/components/Select/Select'
import Input from '@/components/Input/Input'
import ColorInput from '@/components/ColorInput/ColorInput'
import useTools from '@/features/Presentation/hooks/useTools'
import { IParagraphProps } from './Paragraph'

export interface IParagraphToolsProps extends IParagraphProps {}

const ParagraphTools: React.FC<IParagraphToolsProps> = ({ id, css = {}, tag = '' }) => {
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
      fontFamily: [
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
        { value: 'p', label: 'p' },
        { value: 'span', label: 'span' },
        { value: 'div', label: 'div' },
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
        options={options.fontFamily}
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

export default ParagraphTools
