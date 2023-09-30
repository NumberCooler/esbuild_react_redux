
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}
  
export const boolSlice = createSlice({
    name: 'bool',
    initialState,
    reducers: {
        toogle: (state) => {
            state.value = !state.value;
        }
    },
})


export const { toogle } = boolSlice.actions


