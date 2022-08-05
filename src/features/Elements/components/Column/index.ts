import Column from '@/features/Elements/components/Column/Column'
import ColumnTools from '@/features/Elements/components/Column/ColumnTools'
import SolidSections from '@/icons/SolidSections'
import { TElementBase } from '@/features/Elements/types'

export default {
  icon: SolidSections,
  name: 'Kolumna',
  node: Column,
  nodeTools: ColumnTools,
  props: {
    tag: 'div',
    containerCss: {
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
    },
    css: {},
    inner: [],
  } as Omit<TElementBase, 'id'> & { tag: string; inner: number[] },
}
