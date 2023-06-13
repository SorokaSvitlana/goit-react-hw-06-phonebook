import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {array: []},
  reducers: {
    addContact: (state, action) => {
      state.array.push(action.payload);
    },
    removeContact: (state, action) => {
      const index = state.array.findIndex(contact => contact.id === action.payload);
      state.array.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const getContacts = state => state.contacts.array;