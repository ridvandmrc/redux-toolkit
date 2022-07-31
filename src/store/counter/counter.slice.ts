import { createSlice } from '@reduxjs/toolkit'

type counterType = {
  value: number
}

const initialState: counterType = {
  value: 5,
}

export const counterReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload
    },
    decrease: (state, action) => {
      state.value -= action.payload
    },
  },
})

export const counter = counterReducer.reducer

export const useCounter = (state: any) => state.counter.value
export const increase = counterReducer.actions.increase
export const decrease = counterReducer.actions.decrease
