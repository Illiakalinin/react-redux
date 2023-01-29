import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    createContact (state, action) {
      state.contacts.push({
        ...action.payload,
        isFavourite: false,
        id: uuidv4(),
      });
    },
    deleteContact (state, action) {
      state.contacts = state.contacts.filter(c => c.id !== action.payload);
    },
    // changeIsFavourite (state, action) {
    //  payload:{id, isFavourite: true}
    //   const index = state.contacts.findIndex(
    //     item => item.id === action.payload.id
    //   );
    //   state.contacts[index].isFavourite = action.payload.isFavourite;
    // },
    updateContact (state, action) {
      // payload:{id, updatedData: {isFavourite: true}}
      const index = state.contacts.findIndex(
        item => item.id === action.payload.id
      );
      console.log('index :>> ', index);
      state.contacts[index] = {
        ...state.contacts[index],
        ...action.payload.updatedData,
      };
    },
  },
});

const { reducer, actions } = contactsSlice;

export const { createContact, deleteContact, updateContact } = actions; // action creators

export default reducer;

// CRUD

// reducer(state, action) => state

// createContact(v) => {type: 'contacts/createContact', payload: v}
