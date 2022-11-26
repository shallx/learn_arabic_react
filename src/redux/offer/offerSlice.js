import { createSlice } from "@reduxjs/toolkit";
import firebaseConfigs from "../../firebase_configs";
import dbs from '../../services/firebase_init';
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  offerData: null,
  isLoading: false,
  error: null
};

export const fetchOffers = createAsyncThunk('offer/fetchOffers', ()=> {
 return getData() 
})

const getData = async () => {
  let arrayData = [];
  await dbs[0].collection(firebaseConfigs[0].collection)
    .get()
    .then((data) => {
      if (!data.empty) {
        arrayData.push({
          id: data.docs[0].id,
          brand: firebaseConfigs[0].name,
          ...data.docs[0].data(),
        });
      } else {
        console.log(data);
      }
    });

  return arrayData;
};

export const offerSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = firebaseConfigs[action.payload].name;
      state.selectedIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOffers.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
      state.isLoading = false
      state.offerData = action.payload
      console.log(action.payload)
    })
    builder.addCase(fetchOffers.rejected, (state, action) => {
      state.isLoading = false
      state.offerData = []
      state.error = action.error.message
    })
  }

});



export default offerSlice.reducer;
