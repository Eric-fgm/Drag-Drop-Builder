import { CSSProperties } from 'react'

export type TWidgetBase = {
  id: number
  css: CSSProperties
  containerCss: CSSProperties
  ids?: string
  classes?: string
}
