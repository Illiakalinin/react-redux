import { createSlice } from '@reduxjs/toolkit';

//* createSlice - функція для створення:
//* - стану (з його початковим станом),
//* - редюсеру (функції для його зміни),
//* - екшнів (об'єктів для сповіщення стори про те, що треба змінити стан)

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
