import React, { useMemo } from 'react'
import useTools from '@/features/Presentation/hooks/useTools'
import Select from '@/components/Select/Select'
import { IInnerSectionProps } from '@/features/Widgets/components/InnerSection/InnerSection'

export interface IInnerSectionToolsProps extends IInnerSectionProps {}

const InnerSectionTools: React.FC<IInnerSectionToolsProps> = ({ id, tag, css = {} }) => {
  const { handleChange, handleCssChange } = useTools({ id })

  const { maxWidth = '', justifyContent = 'inherit', overflow = 'inherit' } = css

  const options = useMemo(
    () => ({
      maxWidth: [
        { value: '1186px', label: 'Stała szerokość' },
        { value: '100%', label: 'Pełna szerokość' },
      ],
      justifyContent: [
        { value: 'inherit', label: 'Domyślne' },
        { value: 'flex-start', label: 'Góra' },
        { value: 'center', label: 'Środek' },
        { value: 'flex-end', label: 'Dół' },
      ],
      overflow: [
        { value: 'inherit', label: 'Domyślne' },
        { value: 'visible', label: 'Widoczne' },
        { value: 'hidden', label: 'Ukryte' },
        { value: 'auto', label: 'Auto' },
      ],
      tags: [
        { value: 'div', label: 'div' },
        { value: 'main', label: 'main' },
        { value: 'article', label: 'article' },
        { value: 'figure', label: 'figure' },
        { value: 'span', label: 'span' },
      ],
    }),
    [],
  )

  return (
    <>
      <Select
        label='Szerokość'
        name='maxWidth'
        value={maxWidth}
        options={options.maxWidth}
        onChange={handleCssChange}
      />
      <Select
        label='Pozycja w poziomie'
        name='justifyContent'
        value={justifyContent}
        options={options.justifyContent}
        onChange={handleCssChange}
      />
      <Select
        label='Overflow'
        name='overflow'
        value={overflow}
        options={options.overflow}
        onChange={handleCssChange}
      />
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

export default InnerSectionTools
