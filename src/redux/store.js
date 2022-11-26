import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "./brand/brandSlice";
import offerReducer from "./offer/offerSlice";

export const store =  configureStore({
    reducer: {
        brand: brandReducer,
        offer: offerReducer,
    },
});