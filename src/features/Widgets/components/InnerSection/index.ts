import InnerSection, {
  IInnerSectionProps,
} from '@/features/Widgets/components/InnerSection/InnerSection'
import InnerSectionTools from '@/features/Widgets/components/InnerSection/InnerSectionTools'
import SolidSections from '@/icons/SolidSections'
import InnerSectionContextMenu from '@/features/Widgets/components/InnerSection/InnerSectionContextMenu'

export default {
  icon: SolidSections,
  name: 'Sekcja wewnętrzna',
  node: InnerSection,
  nodeTools: InnerSectionTools,
  contextMenu: InnerSectionContextMenu,
  props: {
    tag: 'div',
    containerCss: {
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
    },
    css: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '1186px',
    },
    inner: [],
  } as Omit<IInnerSectionProps, 'id'>,
}
