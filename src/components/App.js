import React, { Component } from 'react';
import { connect } from 'react-redux';

import coursesOperations from '../redux/courses/coursesOperations';
import coursesSelectors from '../redux/courses/coursesSelectors';

import PinnedSubheaderList from './CoursesList';
import data from '../db.json';
import s from './App.module.css';

import SearchAppBar from './AppBar';

class App extends Component {
  componentDidMount() {
    this.props.onFetchCourses(data);
  }

  render() {
    return (
      <div className={s.box}>
        <SearchAppBar courses={this.props.courses} />

        <PinnedSubheaderList courses={this.props.courses} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  courses: coursesSelectors.getItems(state),
});

const mapDispatchToProps = {
  onFetchCourses: coursesOperations.fetchCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
