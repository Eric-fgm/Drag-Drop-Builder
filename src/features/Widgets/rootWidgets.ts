import { parseWidgets } from '@/features/Widgets/utils'
import innerSection from '@/features/Widgets/components/InnerSection'
import image from '@/features/Widgets/components/Image'
import headline from '@/features/Widgets/components/Headline'
import paragraph from '@/features/Widgets/components/Paragraph'
import video from '@/features/Widgets/components/Video'
import button from '@/features/Widgets/components/Button'

export type TWidgets = typeof widgets

export type TWidgetsProps = {
  [key in keyof TWidgets]: TWidgets[key]['props'] & {
    typename: key
  }
}

export type TWidgetsPropsValues = TWidgetsProps[keyof TWidgetsProps]

export const widgets = {
  innerSection,
  image,
  headline,
  paragraph,
  video,
  button,
}

export default parseWidgets(widgets)
