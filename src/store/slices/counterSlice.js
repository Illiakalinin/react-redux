import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0, step: 1 },
  reducers: {
    decrement (state, action) {
      state.count = state.count - state.step;
    },
    increment (state, action) {
      state.count = state.count + state.step;
    },
    setStep (state, action) {
      state.step = action.payload;
    },
  },
});

const { reducer, actions } = counterSlice;

export const { decrement, increment, setStep } = actions;

export default reducer;
