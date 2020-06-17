import { createReducer } from '@reduxjs/toolkit';
export const peopleReducer = createReducer({
  people: [],
  countEmailsChars: [],
  possibleDuplicated: [],
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

  FETCH_COUNT_EMAIL_CHAR_STARTED: (state, action) => {
    state.isLoading = true;
  },
  FETCH_COUNT_EMAIL_CHAR_SUCCEEDED: (state, action) => {
    state.isLoading = false;
    state.countEmailsChars = action.payload;
  },
  FETCH_COUNT_EMAIL_CHAR_ERROR: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  FETCH_POSSIBLE_DUPLICATED_STARTED: (state, action) => {
    state.isLoading = true;
  },
  FETCH_POSSIBLE_DUPLICATED_SUCCEEDED: (state, action) => {
    state.isLoading = false;
    state.possibleDuplicated = action.payload;
  },
  FETCH_POSSIBLE_DUPLICATED_ERROR: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});