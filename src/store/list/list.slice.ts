import { createSlice } from '@reduxjs/toolkit'

interface todoListType {
  list: string[]
}

const initialList: todoListType = {
  list: ['item 1', 'item 2'],
}

export const listSlice = createSlice({
  name: 'todo-list-store',
  initialState: initialList,
  reducers: {
    addList: (state, payload) => {
      state.list = [...state.list, payload.payload]
    },
    removeFromList: (state, payload) => {
      state.list = state.list.filter(
        (_, itemIndex) => payload.payload !== itemIndex,
      )
    },
  },
})

export const listReducer = listSlice.reducer
export const selectList = (state: any) => state.listSlice.list
export const addList = listSlice.actions.addList
export const removeList = listSlice.actions.removeFromList
