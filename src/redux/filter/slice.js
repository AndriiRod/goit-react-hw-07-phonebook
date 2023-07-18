import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    search(state, action) {
      return (state = action.payload);
    },
  },
});

export const { search } = filterSlice.actions;
export default filterSlice.reducer;
