import { createSlice } from '@reduxjs/toolkit';
import { productAll } from './productActions';

const initialState = {
  loading: false,
  error: null,
  success: false,
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearFields: (state, { payload }) => {
      state.success = false;
      state.loading = false;
      state.error = false;
    },
  },
  extraReducers: {
    //get all the products

    [productAll.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [productAll.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    },
    [productAll.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const { clearFields } = productSlice.actions;
export default productSlice.reducer;
