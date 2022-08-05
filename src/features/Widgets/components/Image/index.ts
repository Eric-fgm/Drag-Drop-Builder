import Image, { IImageProps } from '@/features/Widgets/components/Image/Image'
import ImageTools from '@/features/Widgets/components/Image/ImageTools'
import SolidImagePlaceholder from '@/icons/SolidImagePlaceholder'

export default {
  icon: SolidImagePlaceholder,
  name: 'Zdjęcie',
  node: Image,
  nodeTools: ImageTools,
  props: {
    containerCss: {},
    css: {},
  } as Omit<IImageProps, 'id'>,
}
