import { createAction } from '@reduxjs/toolkit';
import PeopleModel from '../models/people';
const peopleModel = new PeopleModel(); 

const fetchPeopleStarted = createAction('FETCH_PEOPLE_STARTED');
const fetchPeopleSucceeded = createAction('FETCH_PEOPLE_SUCCEEDED');
const fetchPeopleError = createAction('FETCH_PEOPLE_ERROR');

export const fetchPeople = params => async (dispatch) => {
  dispatch(fetchPeopleStarted());
  try {
    const people = await peopleModel.fetch(params);
    return dispatch(fetchPeopleSucceeded(people.data));
  } catch (e) {
    return dispatch(fetchPeopleError(e.message));
  }
};

const fetchCountEmailCharStarted = createAction('FETCH_COUNT_EMAIL_CHAR_STARTED');
const fetchCountEmailCharSucceeded = createAction('FETCH_COUNT_EMAIL_CHAR_SUCCEEDED');
const fetchCountEmailCharError = createAction('FETCH_COUNT_EMAIL_CHAR_ERROR');

export const fetchCountEmailChar = params => async (dispatch) => {
  dispatch(fetchCountEmailCharStarted());
  try {
    const people = await peopleModel.fetchCountEmailChar(params);
    return dispatch(fetchCountEmailCharSucceeded(people.data));
  } catch (e) {
    return dispatch(fetchCountEmailCharError(e.message));
  }
};

const fetchPossibleDuplicatedStarted = createAction('FETCH_POSSIBLE_DUPLICATED_STARTED');
const fetchPossibleDuplicatedSucceeded = createAction('FETCH_POSSIBLE_DUPLICATED_SUCCEEDED');
const fetchPossibleDuplicatedError = createAction('FETCH_POSSIBLE_DUPLICATED_ERROR');

export const fetchPossibleDuplicated = params => async (dispatch) => {
  dispatch(fetchPossibleDuplicatedStarted());
  try {
    const people = await peopleModel.fetchPossibleDuplicated(params);
    return dispatch(fetchPossibleDuplicatedSucceeded(people.data));
  } catch (e) {
    return dispatch(fetchPossibleDuplicatedError(e.message));
  }
};