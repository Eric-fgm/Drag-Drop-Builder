import React from 'react'
import {
  StyledContainer,
  StyledIframe,
} from '@/features/Widgets/components/Video/styles'
import { TWidgetBase } from '@/features/Widgets/types'

export interface IVideoProps extends TWidgetBase {
  platform: string
  src?: string
  startTime?: number
}

const Video: React.FC<IVideoProps> = ({
  css,
  startTime,
  src = 'https://youtu.be/NpEaa2P7qZI',
}) => (
    <StyledContainer style={css}>
      <StyledIframe
        width="100%"
        height="auto"
        src={`${src}${startTime && `?start=${startTime}`}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
       />
    </StyledContainer>
  )

export default Video
