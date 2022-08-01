import { configureStore } from '@reduxjs/toolkit'

import { counter } from './counter/counter.slice'
import { todoReducer } from './todo/todo.slice'
import { listReducer } from './list/list.slice'

export const allStore = configureStore({
  reducer: {
    counter: counter,
    todo: todoReducer,
    listSlice: listReducer,
  },
})
