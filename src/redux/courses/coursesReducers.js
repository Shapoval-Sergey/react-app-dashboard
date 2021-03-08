import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import coursesActions from './coursesActions';

const items = createReducer([], {
  [coursesActions.fetchCoursesSuccess]: (_, action) => action.payload,
});

const filter = createReducer('', {
  [coursesActions.changeFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [coursesActions.fetchCoursesRequest]: () => true,
  [coursesActions.fetchCoursesSuccess]: () => false,
  [coursesActions.fetchCoursesError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
