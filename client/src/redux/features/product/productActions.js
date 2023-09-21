import { createAsyncThunk } from '@reduxjs/toolkit';
import Http from '../../../services/Http';
import { getItemWithExpiration, setItemWithExpiration } from '../../../utils/LocalstorageItem';

export const productAll = createAsyncThunk(
  'products/all',
  async (allproducts, { rejectWithValue }) => {
    try {
      const cacheData = await getItemWithExpiration('products');
      if (cacheData) {
        return cacheData;
      }
      const data = await Http.get(`/products`);
      await setItemWithExpiration('products', data.data, 1); //expire in 1 hour
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
