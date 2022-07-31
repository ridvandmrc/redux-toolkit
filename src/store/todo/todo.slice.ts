import { createSlice } from '@reduxjs/toolkit'

export const todoStore = createSlice({
  name: 'todo-slice',
  initialState: { value: 'todo' },
  reducers: {},
})

export const todoReducer = todoStore.reducer
