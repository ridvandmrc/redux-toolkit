import { configureStore } from '@reduxjs/toolkit'

import { counter } from './counter/counter.slice'
import { todoReducer } from './todo/todo.slice'

export const allStore = configureStore({
  reducer: {
    counter: counter,
    todo: todoReducer,
  },
})
