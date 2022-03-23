/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTab } = tabSlice.actions;

export default tabSlice.reducer;
