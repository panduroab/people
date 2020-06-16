import { combineReducers } from '@reduxjs/toolkit';
import { peopleReducer } from './people';

const rootReducer = combineReducers({
  peopleReducer
})
export default rootReducer;