import { createAction } from "@reduxjs/toolkit";

const fetchCoursesRequest = createAction("courses/fetchRequest");
const fetchCoursesSuccess = createAction("courses/fetchSuccess");
const fetchCoursesError = createAction("courses/fetchError");

const changeFilter = createAction("courses/changeFilter");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchCoursesRequest,
  fetchCoursesSuccess,
  fetchCoursesError,

  changeFilter,
};
