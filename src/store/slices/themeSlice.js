import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { isLight: true },
  reducers: {
    setTheme (state, action) {
      state.isLight = action.payload;
    },
  },
});

const { reducer, actions } = themeSlice;

export const { setTheme } = actions; // => view

export default reducer; // => store
