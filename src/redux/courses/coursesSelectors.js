import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.courses.filter;
const getItems = state => state.courses.items;

const getVisibleCourses = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    return items.filter(course =>
      course.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getFilter,
  getItems,
  getVisibleCourses,
};
