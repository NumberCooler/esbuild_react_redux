

import { createSlice } from '@reduxjs/toolkit'

import { store } from './store';
import { toogle } from './toogle_start_false'


const initialState = {
    value: null,
}
  
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        set: (state,action) => {
            setTimeout(()=>{
                store.dispatch(toogle());
            },0);
            console.log(action);
            state.value = action.payload;
        }
    },
})

export const { set } = counterSlice.actions
