/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTab: 0,
  contents: [null, null, null],
  content: null,
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
    console.warn(e);
  }
  return null;
});

export const fetchContentById = createAsyncThunk('fetchContentById', async (contentId) => {
  try {
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://test.daground.io/info/contents?content=${contentId}`,
      {
        method: 'GET',
        headers: {
          'TEST-AUTH': 'wantedpreonboarding',
        },
      }
    );
    const resObj = await res.json();
    return resObj.content[0];
  } catch (e) {
    console.warn(e);
    return null;
  }
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
    builder.addCase(fetchContentById.fulfilled, (state, action) => {
      state.content = action.payload;
    });
  },
});

export const { changeTab } = tabSlice.actions;

export default tabSlice.reducer;
