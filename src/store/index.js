import { configureStore } from '@reduxjs/toolkit';
import reducer from './slices/counterSlice';

const store = configureStore({ reducer });

export default store;
