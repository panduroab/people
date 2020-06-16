import { createReducer } from '@reduxjs/toolkit';
export const peopleReducer = createReducer({
  people: [],
  isLoading: false,
  error: null
}, {
  FETCH_PEOPLE_STARTED: (state, action) => {
    state.isLoading = true;
  },
  FETCH_PEOPLE_SUCCEEDED: (state, action) => {
    state.isLoading = false;
    state.people = action.payload;
  },
  FETCH_PEOPLE_ERROR: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});