import { TWidgets } from '@/features/Widgets/rootWidgets'
import { TWidgetsSliceState } from '@/store/slices/widgetsSlice'

export const parseWidgets = (collections: TWidgets) => {
  const state: { widgets: TWidgetsSliceState } = {
    widgets: {
      search: '',
      list: [],
    },
  }
  for (const key in collections) {
    if (collections.hasOwnProperty(key)) {
      const property = key as keyof TWidgets
      const { name, props } = collections[property]
      state.widgets.list.push({ name, defaultProps: props, typename: property })
    }
  }
  return state
}
