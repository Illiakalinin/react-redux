import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import counterReducer from './slices/counterSlice';
import contactsReducer from './slices/contactsSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  counter: counterReducer,
  contactsList: contactsReducer,
});

export default rootReducer;
