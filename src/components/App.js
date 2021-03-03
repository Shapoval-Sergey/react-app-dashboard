import React, { Component } from "react";
import { connect } from "react-redux";

import coursesOperations from "../redux/courses/coursesOperations";
import PrimarySearchAppBar from "./AppBar";
// import VerticalTabs from "./Tabs";
import data from "../db.json";
import s from "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.onFetchCourses(data);
  }

  render() {
    return (
      <div className={s.box}>
        <PrimarySearchAppBar />
      </div>
    );
  }
}

const mapDispatchToProps = {
  onFetchCourses: coursesOperations.fetchCourses,
};

export default connect(null, mapDispatchToProps)(App);
