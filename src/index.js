import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

//* createSlice - функція для створення:
//* - стану (з його початковим станом),
//* - редюсеру (функції для його зміни),
//* - екшнів (об'єктів для сповіщення стори про те, що треба змінити стан)

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    decrement (state, action) {
      state.count = state.count - 1;
    },
    increment (state, action) {
      state.count = state.count + 1;
    },
  },
});

//* reducer - (state, action) => state
//* чиста функція

//* action - {type: 'increment' [, {payload}]}

const { reducer, actions } = counterSlice;
export const { decrement, increment } = actions;

const store = configureStore({ reducer });

//* Компонент Provider з обов'язковим пропом store
//* прокидує вниз по дереву компонентів можливість для доступу до стану
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
