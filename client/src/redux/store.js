import { configureStore } from '@reduxjs/toolkit';
import productSlice from './features/product/productSlice';
import userSlice from './features/user/userSlice';
const reducer = {
  product: productSlice,
  user: userSlice,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
