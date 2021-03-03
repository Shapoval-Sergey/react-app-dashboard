import axios from "axios";

import coursesActions from "./coursesActions";

axios.defaults.baseURL = "http://localhost:3000";

const fetchCourses = (data) => (dispatch) => {
  dispatch(coursesActions.fetchCoursesRequest());
  console.log(data);
  axios
    .get("/", data)
    .then(({ config }) =>
      dispatch(coursesActions.fetchCoursesSuccess(config.courses)),
    )
    .catch((error) => dispatch(coursesActions.fetchCoursesError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchCourses,
};
