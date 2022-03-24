/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTab: 0,
  contents: [null, null, null],
};

export const fetchContents = createAsyncThunk('fetchContents', async (sectorId) => {
  try {
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://test.daground.io/info/contents?sector=${sectorId}`,
      {
        method: 'GET',
        headers: {
          'TEST-AUTH': 'wantedpreonboarding',
        },
      }
    );
    const resObj = await res.json();
    return resObj.content;
  } catch (e) {
    console.log(e);
  }
  return null;
});

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.currentTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContents.fulfilled, (state, action) => {
      state.contents[state.currentTab] = action.payload;
    });
  },
});

export const { changeTab } = tabSlice.actions;

export default tabSlice.reducer;
