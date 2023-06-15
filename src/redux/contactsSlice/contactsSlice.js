import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'redux/initialState/initialState';
import { getContactsThunk } from 'redux/thunk/thunk';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, (state, action) => {
        state.contacts.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
        state.contacts.error = '';
      })
      .addCase(getContactsThunk.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
