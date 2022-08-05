import React, { useMemo } from 'react'
import Select from '@/components/Select/Select'
import Input from '@/components/Input/Input'
import useTools from '@/features/Presentation/hooks/useTools'
import { IVideoProps } from '@/features/Widgets/components/Video/Video'

export interface IVideoToolsProps extends IVideoProps {}

const VideoTools: React.FC<IVideoToolsProps> = ({ id, platform, src, startTime }) => {
  const { handleChange } = useTools({ id })

  const options = useMemo(
    () => ({
      platform: [
        { value: 'youtube', label: 'YouTube' },
        { value: 'prime-video', label: 'Prime Video' },
      ],
    }),
    [],
  )

  return (
    <>
      <Select
        label='Źródło'
        name='platform'
        value={platform}
        options={options.platform}
        onChange={handleChange}
      />
      <Input
        label='Odnośnik'
        name='src'
        type='text'
        placeholder='—'
        value={src}
        onChange={handleChange}
      />
      <Input
        label='Zacznij od (sek)'
        name='startTime'
        type='number'
        placeholder='—'
        value={startTime}
        onChange={handleChange}
      />
    </>
  )
}

export default VideoTools
