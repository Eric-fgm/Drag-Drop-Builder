import React, { useMemo } from 'react'
import useTools from '@/features/Presentation/hooks/useTools'
import { IButtonProps } from '@/features/Widgets/components/Button/Button'
import BoundingInput from '@/components/BoundingInput/BoundingInput'
import Select from '@/components/Select/Select'
import ColorInput from '@/components/ColorInput/ColorInput'
import Input from '@/components/Input/Input'

export interface IButtonToolsProps extends IButtonProps {}

const ButtonTools: React.FC<IButtonToolsProps> = ({
  id,
  css,
  href = '',
  text,
  borderRadiusTop,
  borderRadiusBottom,
  borderRadiusLeft,
  borderRadiusRight,
}) => {
  const { handleChange, handleCssChange } = useTools({ id })

  const {
    paddingTop = 'inherit',
    paddingBottom = 'inherit',
    paddingLeft = 'inherit',
    paddingRight = 'inherit',
    justifyContent = 'inherit',
    fontSize = 13,
    color = '',
    borderStyle = '',
    borderColor = '',
    borderWidth = 3,
    backgroundColor = '',
  } = css

  const options = useMemo(
    () => ({
      borderStyles: [
        { label: 'Brak', value: '' },
        { label: 'Solid', value: 'solid' },
        { label: 'Dashed', value: 'dashed' },
      ],
      tags: [
        { label: 'Domyślna', value: 'inherit' },
        { label: 'Początek', value: 'flex-start' },
        { label: 'Środek', value: 'center' },
        { label: 'Koniec', value: 'flex-end' },
      ],
    }),
    [],
  )

  return (
    <>
      <BoundingInput
        name='padding'
        label='Wypełnienie'
        value={{
          top: paddingTop,
          bottom: paddingBottom,
          left: paddingLeft,
          right: paddingRight,
        }}
        onChange={handleCssChange}
      />
      <BoundingInput
        name='borderRadius'
        label='Zaokrąglenie'
        value={{
          top: borderRadiusTop,
          bottom: borderRadiusBottom,
          left: borderRadiusLeft,
          right: borderRadiusRight,
        }}
        onChange={handleChange}
      />
      <Select
        name='borderStyle'
        label='Obramowanie'
        options={options.borderStyles}
        value={borderStyle}
        onChange={handleCssChange}
      />
      {borderStyle && (
        <>
          <Input
            label='Grubość obramowania'
            type='number'
            name='borderWidth'
            value={borderWidth}
            onChange={handleCssChange}
          />
          <ColorInput
            label='Kolor obramowania'
            name='borderColor'
            value={borderColor}
            onChange={handleCssChange}
          />
        </>
      )}
      <Input label='Text' name='text' value={text} onChange={handleChange} />
      <Input
        label='Wielkość czcionki'
        type='number'
        name='fontSize'
        value={fontSize}
        onChange={handleCssChange}
      />
      <ColorInput label='Kolor' name='color' value={color} onChange={handleCssChange} />
      <ColorInput
        label='Tło'
        name='backgroundColor'
        value={backgroundColor}
        onChange={handleCssChange}
      />
      <Input label='Odnośnik' name='href' placeholder='—' value={href} onChange={handleChange} />
      <Select
        label='Pozycja w poziomie'
        name='justifyContent'
        options={options.tags}
        value={justifyContent}
        onChange={handleCssChange}
      />
    </>
  )
}

export default React.memo(ButtonTools)
