import React, { useMemo } from 'react'
import useTools from '@/features/Presentation/hooks/useTools'
import Select from '@/components/Select/Select'
import Input from '@/components/Input/Input'
import { ISectionProps } from '@/features/Elements/components/Section/Section'

export interface ISectionToolsProps extends ISectionProps {}

const SectionTools: React.FC<ISectionToolsProps> = ({ id, tag, css = {} }) => {
  const { handleChange, handleCssChange } = useTools({ id })

  const {
    maxWidth = '',
    justifyContent = 'inherit',
    overflow = 'inherit',
    backgroundImage = '',
  } = css

  const options = useMemo(
    () => ({
      maxWidth: [
        { value: '1220px', label: 'Stała szerokość' },
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
    []
  )

  return (
    <>
      <Select
        label="Szerokość"
        name="maxWidth"
        value={maxWidth}
        options={options.maxWidth}
        onChange={handleCssChange}
      />
      <Select
        label="Pozycja w pionie"
        name="justifyContent"
        value={justifyContent}
        options={options.justifyContent}
        onChange={handleCssChange}
      />
      <Select
        label="Overflow"
        name="overflow"
        value={overflow}
        options={options.overflow}
        onChange={handleCssChange}
      />
      <Input
        label="Obrazek w tle"
        placeholder="—"
        name="backgroundImage"
        value={backgroundImage}
        onChange={handleCssChange}
      />
      <Select
        label="HTML Tag"
        name="tag"
        value={tag}
        options={options.tags}
        onChange={handleChange}
      />
    </>
  )
}

export default React.memo(SectionTools)
