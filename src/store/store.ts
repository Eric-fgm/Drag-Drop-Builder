import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '@/store/slices/rootReducer'
import rootWidgets from '@/features/Widgets/rootWidgets'

const store = configureStore({
  reducer: rootReducer,
  preloadedState: rootWidgets,
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
