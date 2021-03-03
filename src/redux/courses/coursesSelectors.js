import { createSelector } from "@reduxjs/toolkit";

const getFilter = (state) => state.courses.filter;
const getItems = (state) => state.courses.items;
const getModules = (state) => {
  const quantityModules = state.courses.items.map((item) => item).length;
  return quantityModules;
};

const getVisibleCourses = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    return items.filter((course) =>
      course.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const getCourseById = createSelector(
  [(_, courseId) => courseId, getItems],
  (courseId, items) => {
    return items.find((item) => item.id === courseId);
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getFilter,
  getItems,
  getVisibleCourses,
  getCourseById,
  getModules,
};
