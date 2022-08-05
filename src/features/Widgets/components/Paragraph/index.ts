import Paragraph, {
  IParagraphProps,
} from '@/features/Widgets/components/Paragraph/Paragraph'
import ParagraphTools from '@/features/Widgets/components/Paragraph/ParagraphTools'
import SolidTextInput from '@/icons/SolidTextInput'

export default {
  icon: SolidTextInput,
  name: 'Paragraf',
  node: Paragraph,
  nodeTools: ParagraphTools,
  props: {
    tag: 'p',
    containerCss: {},
    css: {
      fontSize: 15,
      fontWeight: '400',
    },
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  } as Omit<IParagraphProps, 'id'>,
}
