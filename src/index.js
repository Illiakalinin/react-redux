import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// reducer - (state, action) => state
// чиста функція

// action - {type: 'increment'[, params]}

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    decrement: (state, action) => {
      // arrow
      state.count = state.count - 1;
    },
    increment (state, action) {
      // method
      state.count = state.count + 1;
    },
  },
});

const { reducer, actions } = counterSlice;
export const { decrement, increment } = actions;

const store = configureStore({ reducer });

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
