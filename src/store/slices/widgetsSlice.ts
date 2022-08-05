import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TWidgets } from '@/features/Widgets/rootWidgets'
import { RootState } from '../store'

export type TWidgetProps = {
  name: string
  defaultProps: TWidgets[keyof TWidgets]['props']
  typename: keyof TWidgets
}

export type TWidgetsSliceState = {
  search: string
  list: TWidgetProps[]
}

const initialState: TWidgetsSliceState = {
  search: '',
  list: [],
}

const widgetsSice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload
    },
  },
})

export const selectWidgets = createSelector(
  ({ widgets }: RootState) => widgets,
  (widgets) => {
    const output = []
    const { list, search } = widgets
    for (let i = 0; i < list.length; i++) {
      const currWidget = list[i]
      if (currWidget.name.toLowerCase().includes(search)) {
        output.push(currWidget)
      }
    }
    return output
  }
)

export const { setSearch } = widgetsSice.actions

export default widgetsSice.reducer
