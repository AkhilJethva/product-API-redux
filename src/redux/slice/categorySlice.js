import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductCategories = createAsyncThunk(
  "fetchProductCategories",
  async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json(); //may await reuired
    return data;
  }
);

const categortSlice = createSlice({
  name: "productCategory",
  initialState: {
    categories: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchProductCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default categortSlice.reducer;
