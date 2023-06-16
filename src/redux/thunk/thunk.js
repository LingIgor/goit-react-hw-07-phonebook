import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'redux/fetch/fetch';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  fetchContacts()
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  contacts => addContact(contacts)
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => {
    try {
      return deleteContact(id);
    } catch (error) {
      console.log(error);
    }
  }
);
