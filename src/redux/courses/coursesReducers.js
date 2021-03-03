import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import coursesActions from "./coursesActions";

const items = createReducer([], {
  [coursesActions.fetchCoursesSuccess]: (_, action) => action.payload,
});

const filter = createReducer("", {
  [coursesActions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
