import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'redux/initialState/initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, actions) {
      return actions.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;
