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