import Video, { IVideoProps } from '@/features/Widgets/components/Video/Video'
import VideoTools from '@/features/Widgets/components/Video/VideoTools'
import SolidVideo from '@/icons/SolidVideo'

export default {
  icon: SolidVideo,
  name: 'Video',
  node: Video,
  nodeTools: VideoTools,
  props: {
    containerCss: {},
    css: {},
    platform: 'youtube',
  } as Omit<IVideoProps, 'id'>,
}
