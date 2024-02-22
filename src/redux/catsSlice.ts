import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { getCats } from '../api/catsApi';
import { Cat } from '../api/types';

interface CatsState {
  currentPageCats: Cat[];
  isPending: boolean;
}

const initialState: CatsState = {
  currentPageCats: [],
  isPending: false,
};

export const getCatsByQuery = createAsyncThunk(
  'cat/getCatsByQuery',
  async (options: { page: number; limit?: number }, { rejectWithValue }) => {
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

    builder.addCase(getCatsByQuery.fulfilled, (state, action) => {
      state.isPending = false;
      state.currentPageCats = action.payload;
    }); 
  },
});

export default catsSlice.reducer;
