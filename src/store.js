
import { counterSlice as slice2 } from "./toogle_start_false"
import { counterSlice as slice1 } from "./set_value"
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
    reducer: {
      counter : slice1.reducer,
      counter2 : slice2.reducer
    },
});