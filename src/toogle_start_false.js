
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}
  
export const counterSlice = createSlice({
    name: 'counter2',
    initialState,
    reducers: {
        toogle: (state) => {
            state.value = !state.value;
        }
    },
})


export const { toogle } = counterSlice.actions
