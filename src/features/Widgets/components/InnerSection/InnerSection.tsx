import React from 'react'
import { StyledContainer } from '@/features/Widgets/components/InnerSection/styles'
import Column from '@/features/Elements/components/Column/Column'
import { TWidgetBase } from '@/features/Widgets/types'
import useInitialColumns from '@/hooks/useInitialColumns'

export interface IInnerSectionProps extends TWidgetBase {
  tag: string
  inner: number[]
}

const InnerSection: React.FC<IInnerSectionProps> = ({ id, css, inner }) => {
  useInitialColumns({ id, array: inner, length: 2 })

  return (
    <StyledContainer style={css}>
      {!!inner.length &&
        inner.map((innerId) => <Column key={innerId} id={innerId} parentId={id} />)}
    </StyledContainer>
  )
}

export default React.memo(InnerSection)
