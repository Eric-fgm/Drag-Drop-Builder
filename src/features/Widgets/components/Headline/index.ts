import Headline, {
  IHeadlineProps,
} from '@/features/Widgets/components/Headline/Headline'
import HeadlineTools from '@/features/Widgets/components/Headline/HeadlineTools'
import SolidHeadline from '@/icons/SolidHeadline'

export default {
  icon: SolidHeadline,
  name: 'Nagłówek',
  node: Headline,
  nodeTools: HeadlineTools,
  props: {
    tag: 'h2',
    containerCss: {},
    css: {
      fontSize: 21,
      fontWeight: '500',
    },
    text: 'Nagłówek',
  } as Omit<IHeadlineProps, 'id'>,
}
