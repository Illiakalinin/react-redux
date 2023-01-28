import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    createContact (state, action) {
      state.contacts.push(action.payload);
    },
  },
});

const { reducer, actions } = contactsSlice;

export const { createContact } = actions;

export default reducer;
