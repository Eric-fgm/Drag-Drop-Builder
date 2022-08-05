import { CSSProperties } from 'react'

export type TElementBase = {
  id: number
  css: CSSProperties
  containerCss: CSSProperties
  ids?: string
  classes?: string
}
