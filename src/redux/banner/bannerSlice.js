import { createSlice } from "@reduxjs/toolkit";
import firebaseConfigs from "../../firebase_configs";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dbs from "../../services/firebase_init";

const initialState = {
  bannerData: null,
  isLoading: false,
  error: null,
};

export const fetchBanners = createAsyncThunk(
  "offer/fetchBanners",
  async (params) => {
    return getData(params);
  }
);

export const updateBanners = createAsyncThunk("offer/updateBanners", async (updatedData) => {
  let index = firebaseConfigs.findIndex(
    (item) => item.name === updatedData.brand
  );
  let banner = {
    background_image: updatedData.background_image,
    background_responsive: "",
    coupon_code: updatedData.coupon_code,
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

const getData = async (selectedIndex) => {
  let arrayData = [];
  console.log("Getting Data for Banners")
  await dbs[selectedIndex].collection(firebaseConfigs[selectedIndex].banner).get().then((data) => {
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
  console.log(arrayData)
  return arrayData;
};

export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = firebaseConfigs[action.payload].name;
      state.selectedIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBanners.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBanners.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bannerData = action.payload;
      console.log(action.payload);
    });
    builder.addCase(fetchBanners.rejected, (state, action) => {
      state.isLoading = false;
      state.bannerData = [];
      state.error = action.error.message;
    });

    builder.addCase(updateBanners.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateBanners.fulfilled, (state, action) => {
      state.isLoading = false;

      var indexOfData = state.bannerData.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexOfData !== -1) {
        state.bannerData[indexOfData] = action.payload;
        toast.success("Successfully Updated !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
    builder.addCase(updateBanners.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default bannerSlice.reducer;
