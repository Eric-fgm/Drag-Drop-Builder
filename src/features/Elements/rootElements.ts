import section from '@/features/Elements/components/Section'
import column from '@/features/Elements/components/Column'

export type TElements = typeof elements

export type TElementsProps = {
  [key in keyof TElements]: TElements[key]['props'] & {
    typename: key
  }
}

export type TElementsPropsValues = TElementsProps[keyof TElementsProps]

const elements = {
  section,
  column,
}

export default elements
