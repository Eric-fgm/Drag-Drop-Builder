import { combineReducers } from '@reduxjs/toolkit'
import widgetsSlice from '@/store/slices/widgetsSlice'
import templatesSlice from '@/store/slices/templatesSlice'

export default combineReducers({
  widgets: widgetsSlice,
  templates: templatesSlice,
})
