import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { widgets, TWidgetsPropsValues } from '@/features/Widgets/rootWidgets'
import elements, { TElementsPropsValues } from '@/features/Elements/rootElements'
import { ISectionProps } from '@/features/Elements/components/Section/Section'
import { getIdsToRemove, getUniqueId } from '@/utils'
import { RootState } from '@/store/store'

export type TTempalatePropsValues = TWidgetsPropsValues | TElementsPropsValues

const initialState: {
  byId: {
    root: { inner: number[]; typename: 'root' }
    [key: number]: TTempalatePropsValues
  }
  focused?: number
} = {
  byId: {
    root: { inner: [], typename: 'root' },
  },
}

type OmittedTemplatePropsValues = Omit<TTempalatePropsValues, 'typename'>

const templatesSlice = createSlice({
  name: 'templates',
  initialState,
  reducers: {
    addTemplate: (
      state,
      {
        payload,
      }: PayloadAction<{
        destinationId?: number
        index?: number
        value: TTempalatePropsValues
      }>,
    ) => {
      const { destinationId, index = -1, value } = payload
      const id = getUniqueId()
      if (destinationId) {
        const destinationTemplate = state.byId[destinationId]
        if (!('inner' in destinationTemplate)) return
        if (index > -1) {
          destinationTemplate.inner.splice(index, 0, id)
        } else {
          destinationTemplate.inner.push(id)
        }
      } else {
        const sectionId = getUniqueId()
        const columnId = getUniqueId()
        state.byId[sectionId] = {
          ...elements.section.props,
          typename: 'section',
          inner: [columnId],
        }
        state.byId[columnId] = {
          ...elements.column.props,
          typename: 'column',
          inner: [id],
        }
        state.byId.root.inner.push(sectionId)
      }
      state.byId[id] = value
    },
    duplicateTemplate: (
      state,
      {
        payload,
      }: PayloadAction<{
        destinationId?: number
        duplicateId: number
      }>,
    ) => {},
    moveTemplate: (
      state,
      {
        payload,
      }: PayloadAction<{
        destinationId?: number
        sourceId: number
        id: number
        index?: number
      }>,
    ) => {
      const { destinationId, sourceId, id } = payload
      let { index } = payload
      if (destinationId) {
        const destinationTemplate = state.byId[destinationId]
        if (!('inner' in destinationTemplate)) return
        if (index === undefined) index = destinationTemplate.inner.length
        if (destinationId === sourceId) {
          let destinationInnerCopy = [...destinationTemplate.inner]
          let spliceIndex = index
          const currentIndex = destinationInnerCopy.indexOf(id)
          destinationInnerCopy = destinationInnerCopy.filter((currId) => currId !== id)
          if (currentIndex < spliceIndex) spliceIndex -= 1
          destinationInnerCopy.splice(spliceIndex, 0, id)
          destinationTemplate.inner = destinationInnerCopy
        } else {
          const sourceTemplate = state.byId[sourceId]
          if (!('inner' in sourceTemplate)) return
          sourceTemplate.inner = sourceTemplate.inner.filter((currId) => currId !== id)
          destinationTemplate.inner.splice(index, 0, id)
        }
      } else {
        const sourceTemplate = state.byId[sourceId]
        if (!('inner' in sourceTemplate)) return
        sourceTemplate.inner = sourceTemplate.inner.filter((currId) => currId !== id)
        const sectionId = getUniqueId()
        const columnId = getUniqueId()
        state.byId[sectionId] = {
          ...elements.section.props,
          typename: 'section',
          inner: [columnId],
        }
        state.byId[columnId] = {
          ...elements.column.props,
          typename: 'column',
          inner: [id],
        }
        state.byId.root.inner.push(sectionId)
      }
    },
    removeTemplate: (
      state,
      {
        payload,
      }: PayloadAction<{
        sourceId?: number
        id: number
      }>,
    ) => {
      const { sourceId = 'root', id } = payload
      if (!state.byId[id]) return
      const sourceTemplate = state.byId[sourceId]
      if (!('inner' in sourceTemplate)) return
      const idsToRemove = getIdsToRemove(id, state.byId)
      idsToRemove.forEach((currId) => {
        delete state.byId[currId]
      })
      sourceTemplate.inner = sourceTemplate.inner.filter((currId) => currId !== id)
    },
    setFocusedTemplate: (state, { payload }: PayloadAction<{ id?: number }>) => {
      const { id } = payload
      state.focused = id
    },
    updateTemplateProps: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: number
        props: {
          [key in keyof OmittedTemplatePropsValues]?: OmittedTemplatePropsValues[key]
        }
      }>,
    ) => {
      const { id, props } = payload
      const { css, containerCss, ...restProps } = props
      const currentState = state.byId[id]
      if ('css' in props) {
        state.byId[id].css = {
          ...currentState.css,
          ...css,
        }
      } else if ('containerCss' in props) {
        state.byId[id].containerCss = {
          ...currentState.containerCss,
          ...containerCss,
        }
      } else {
        for (const key in restProps) {
          if (restProps.hasOwnProperty(key)) {
            const property = key as keyof typeof restProps
            state.byId[id][property] = restProps[property]
          }
        }
      }
    },
  },
})

export const selectRootTemplates = createSelector(
  ({ templates }: RootState) => templates,
  ({ byId }) => {
    const output = []
    for (let i = 0; i < byId.root.inner.length; i++) {
      const currId = byId.root.inner[i]
      const currCollection = byId[currId]
      currCollection &&
        output.push({
          id: currId,
          ...currCollection,
        } as ISectionProps)
    }
    return output
  },
)

export const selectTemplateById = createSelector(
  [({ templates }: RootState) => templates.byId, (_, id: number) => id],
  (byId, id) => byId[id],
)

export const selectFocusedTemplate = createSelector(
  [({ templates }: RootState) => templates.byId, ({ templates }: RootState) => templates.focused],
  (byId, focused) => {
    if (!focused || !byId[focused]) return
    const allTemplates = { ...widgets, ...elements }
    const { nodeTools, name } = allTemplates[byId[focused].typename]
    return { id: focused, nodeTools, name, ...byId[focused] }
  },
)

export const checkIsFocused = createSelector(
  [({ templates }: RootState) => templates.focused, (_, id: number) => id],
  (focused, id) => focused === id,
)

export const {
  addTemplate,
  duplicateTemplate,
  moveTemplate,
  removeTemplate,
  setFocusedTemplate,
  updateTemplateProps,
} = templatesSlice.actions

export default templatesSlice.reducer
