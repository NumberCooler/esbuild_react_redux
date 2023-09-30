import { createSlice } from '@reduxjs/toolkit'

import { store } from './store';
import { toogle } from './toogle_start_false'

const initialState = {
    value: null,
}
export const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        set1: (state,action) => {
            setTimeout(()=>{
                store.dispatch(toogle());
            },0);
            console.log(action);
            state.value = action.payload;
        }
    },
})

export const { set1 } = colorSlice.actions


