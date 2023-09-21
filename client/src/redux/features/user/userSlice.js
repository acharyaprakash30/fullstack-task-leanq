import { createSlice } from '@reduxjs/toolkit';
import { userAll } from './userActions';

const initialState = {
  loading: false,
  error: null,
  success: false,
  users: [],
};

const userslice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearFields: (state, { payload }) => {
      state.success = false;
      state.loading = false;
      state.error = false;
      state.productById = null;
    },
  },
  extraReducers: {
    //get all the users

    [userAll.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userAll.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    },
    [userAll.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const { clearFields } = userslice.actions;
export default userslice.reducer;
