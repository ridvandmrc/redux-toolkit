import { configureStore } from '@reduxjs/toolkit'
import { counter } from './counter.slice'

export const store = configureStore({
  reducer: { counter },
})
