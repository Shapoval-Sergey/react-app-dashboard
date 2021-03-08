import React, { Component } from 'react';
import { connect } from 'react-redux';

import coursesOperations from '../redux/courses/coursesOperations';
import coursesSelectors from '../redux/courses/coursesSelectors';

import SearchAppBar from './AppBar';
import PinnedSubheaderList from './CoursesList';
import Variants from './Skeleton';
import data from '../db.json';

import s from './App.module.css';

class App extends Component {
  componentDidMount() {
    this.props.onFetchCourses(data);
  }

  render() {
    return (
      <div className={s.box}>
        {this.props.isLoading && <Variants />}

        {!this.props.isLoading && (
          <>
            <SearchAppBar courses={this.props.courses} />

            <PinnedSubheaderList />
          </>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  courses: coursesSelectors.getItems(state),
  isLoading: state.courses.loading,
});

const mapDispatchToProps = {
  onFetchCourses: coursesOperations.fetchCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
