import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/fetch/fetch';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  fetchContacts()
);
