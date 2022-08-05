import React, { useMemo } from 'react'
import useTools from '@/features/Presentation/hooks/useTools'
import Select from '@/components/Select/Select'
import { IColumnProps } from '@/features/Elements/components/Column/Column'

export interface IColumnToolsProps extends IColumnProps {
  tag: string
  css: React.CSSProperties
}

const ColumnTools: React.FC<IColumnToolsProps> = ({ id, tag, css = {} }) => {
  const { handleChange, handleCssChange } = useTools({ id })

  const { justifyContent = 'inherit' } = css

  const options = useMemo(
    () => ({
      justifyContent: [
        { value: 'inherit', label: 'Domyślne' },
        { value: 'flex-start', label: 'Góra' },
        { value: 'center', label: 'Środek' },
        { value: 'flex-end', label: 'Dół' },
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
        label='Pozycja w poziomie'
        name='justifyContent'
        value={justifyContent}
        options={options.justifyContent}
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

export default ColumnTools
