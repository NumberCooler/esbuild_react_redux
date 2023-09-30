

import { boolSlice } from "./toogle_start_false.js"

import { colorSlice } from "./set_value.js"

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
      color : colorSlice.reducer,
      bool : boolSlice.reducer
    },
});