import { createAsyncThunk } from '@reduxjs/toolkit';
import Http from '../../../services/Http';
import { getItemWithExpiration, setItemWithExpiration } from '../../../utils/LocalstorageItem';

export const userAll = createAsyncThunk('users/all', async (alluser, { rejectWithValue }) => {
  try {
    const cacheData = await getItemWithExpiration('users');
    if (cacheData) {
      return cacheData;
    }
    const data = await Http.get(`/users`);
    await setItemWithExpiration('users', data.data, 1);
    return data.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});
