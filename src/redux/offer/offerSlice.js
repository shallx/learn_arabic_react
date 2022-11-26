import { createSlice } from "@reduxjs/toolkit";
import firebaseConfigs from "../../firebase_configs";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dbs from "../../services/firebase_init";

const initialState = {
  offerData: null,
  isLoading: false,
  error: null,
};

export const fetchOffers = createAsyncThunk(
  "offer/fetchOffers",
  async (params) => {
    return getData(params);
  }
);

export const updateOffers = createAsyncThunk("offer/updateOffers", async (updatedData) => {
  let index = firebaseConfigs.findIndex(
    (item) => item.name === updatedData.brand
  );
  let banner = {
    background_image: updatedData.background_image,
    coupon_code: updatedData.coupon_code,
    offer_details: updatedData.offer_details,
    offer_name: updatedData.offer_name,
    offer_placement: updatedData.offer_placement,
    visibility: updatedData.visibility,
  };

  await dbs[index]
    .collection(firebaseConfigs[index].collection)
    .doc(updatedData.id)
    .update(banner);
  return {
    ...banner,
    id: updatedData.id,
    brand: updatedData.brand,
  };
});

const getData = async (params) => {
  const { dbCol, selectedIndex } = params;
  let arrayData = [];
  await dbCol.get().then((data) => {
    if (!data.empty) {
      arrayData.push({
        id: data.docs[0].id,
        brand: firebaseConfigs[selectedIndex].name,
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
      state.isLoading = true;
    });
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.offerData = action.payload;
      console.log(action.payload);
    });
    builder.addCase(fetchOffers.rejected, (state, action) => {
      state.isLoading = false;
      state.offerData = [];
      state.error = action.error.message;
    });

    builder.addCase(updateOffers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateOffers.fulfilled, (state, action) => {
      console.log("Action Payload")
      console.log(action.payload)
      state.isLoading = false;

      var indexOfData = state.offerData.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexOfData !== -1) {
        state.offerData[indexOfData] = action.payload;
        toast.success("Successfully Updated !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
    builder.addCase(updateOffers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default offerSlice.reducer;
