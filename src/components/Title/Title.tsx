import React from 'react'
import { Headline } from '@/components/Title/styles'

export interface ITitleProps {
  children: string
  size?: string
}

const Title: React.FC<ITitleProps> = ({ children, ...props }) => <Headline {...props}>{children}</Headline>

export default Title
