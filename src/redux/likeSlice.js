/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likes: [],
};

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    increaseLike: (state, action) => {
      const { id } = action.payload;
      if (!state.likes) state.likes = [];
      state.likes[id] = 1;
    },
  },
});

export const { increaseLike } = likeSlice.actions;

export default likeSlice.reducer;
