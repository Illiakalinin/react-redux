import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import counterReducer from './slices/counterSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  counter: counterReducer,
});

export default rootReducer;
