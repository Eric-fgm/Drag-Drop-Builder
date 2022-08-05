import React, { useMemo } from 'react'
import useTools from '@/features/Presentation/hooks/useTools'
import Select from '@/components/Select/Select'
import Input from '@/components/Input/Input'
import { IImageProps } from '@/features/Widgets/components/Image/Image'

export interface IImageToolsProps extends IImageProps {}

const ImageTools: React.FC<IImageToolsProps> = ({
  id,
  alt = '',
  href = '',
  src = '',
  css = {},
}) => {
  const { handleChange, handleCssChange } = useTools({ id })

  const { objectFit = 'inherit', justifyContent = 'inherit' } = css

  const options = useMemo(
    () => ({
      objectFit: [
        { value: 'inherit', label: 'Domyślne' },
        { value: 'fill', label: 'Fill' },
        { value: 'contain', label: 'Contain' },
        { value: 'cover', label: 'Cover' },
        { value: 'scale-down', label: 'Scaledown' },
        { value: 'none', label: 'Brak' },
      ],
      justifyContent: [
        { value: 'inherit', label: 'Domyślne' },
        { value: 'flex-start', label: 'Lewo' },
        { value: 'center', label: 'Środek' },
        { value: 'flex-end', label: 'Prawo' },
      ],
    }),
    []
  )

  return (
    <>
      <Select
        label="Dopasowanie"
        name="objectFit"
        value={objectFit}
        options={options.objectFit}
        onChange={handleCssChange}
      />
      <Input
        label="Url"
        name="src"
        type="text"
        placeholder="—"
        value={src}
        onChange={handleChange}
      />
      <Input
        label="Podpis"
        name="alt"
        type="text"
        placeholder="—"
        value={alt}
        onChange={handleChange}
      />
      <Input
        label="Odnośnik"
        name="href"
        type="text"
        placeholder="—"
        value={href}
        onChange={handleChange}
      />
      <Select
        label="Pozycja w poziomie"
        name="justifyContent"
        options={options.justifyContent}
        value={justifyContent}
        onChange={handleCssChange}
      />
    </>
  )
}

export default ImageTools
