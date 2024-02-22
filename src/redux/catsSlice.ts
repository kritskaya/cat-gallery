import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { getCats } from '../api/catsApi';

interface CatsState {
  isPending: boolean;
}

const initialState: CatsState = {
  isPending: false,
};

export const getCatsByQuery = createAsyncThunk(
  'cat/getCatsByQuery',
  async (options: { page: number; limit: number }, { rejectWithValue }) => {
    try {
      return await getCats(options.page, options.limit);
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.message);
      }

      throw error;
    }
  }
);

export const catsSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCatsByQuery.pending, (state) => {
      state.isPending = true;
    });

    builder.addCase(getCatsByQuery.rejected, (state) => {
      state.isPending = false;
    });

    builder.addCase(getCatsByQuery.fulfilled, (state) => {
      state.isPending = false;
    });
  },
});

export default catsSlice.reducer;
