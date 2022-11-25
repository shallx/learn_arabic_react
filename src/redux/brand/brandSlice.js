import { createSlice } from "@reduxjs/toolkit";
import firebaseConfigs from "../../firebase_configs";
import dbs from '../../services/firebase_init';

const initialState = {
  brand: firebaseConfigs[0].name,
  selectedIndex: 0,
};

// create selector to get the brand name
export const selectBrand = (state) => state.brand.brand;

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = firebaseConfigs[action.payload].name;
      state.selectedIndex = action.payload;
    },
  },

});

export const { setBrand } = brandSlice.actions;

export const getCol = (state) => dbs[state.brand.selectedIndex].collection(firebaseConfigs[state.brand.selectedIndex].collection);

export default brandSlice.reducer;
