import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "./brand/brandSlice";

export const store =  configureStore({
    reducer: {
        brand: brandReducer,
    },
});