import Section, {
  ISectionProps,
} from '@/features/Elements/components/Section/Section'
import SectionTools from '@/features/Elements/components/Section/SectionTools'
import SolidGrid from '@/icons/SolidGrid'

export default {
  icon: SolidGrid,
  name: 'Sekcja',
  node: Section,
  nodeTools: SectionTools,
  props: {
    tag: 'div',
    containerCss: {},
    css: { marginLeft: 'auto', marginRight: 'auto', maxWidth: '1220px' },
    inner: [],
  } as Omit<ISectionProps, 'id'>,
}
