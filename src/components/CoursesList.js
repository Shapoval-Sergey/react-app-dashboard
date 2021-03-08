import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Modal from './Modal/Modal';
import VerticalTabs from './Tabs';
import coursesSelectors from '../redux/courses/coursesSelectors';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: '40px',
    width: '100%',
    maxWidth: 560,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 500,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

function PinnedSubheaderList({ courses }) {
  const classes = useStyles();
  const [isModal, setisModal] = useState(false);
  const [course, setCourse] = useState(null);

  let arrProgress = [];
  let arrSubmit = [];
  let arrRelease = [];

  courses.map(function (course) {
    return course.data.map(function (obj) {
      if (obj.status === 'in progress') {
        arrProgress.push(obj);
      }
      if (obj.status === 'submitted') {
        arrSubmit.push(obj);
      }
      if (obj.status === 'ready for release') {
        arrRelease.push(obj);
      }
      return obj;
    });
  });

  const toggleModal = () => {
    const toggledIsOpen = isModal ? false : true;
    setisModal(toggledIsOpen);
  };

  const handleClick = e => {
    setCourse(
      courses.find(course =>
        course.id === Number(e.target.id) ? course : null,
      ),
    );

    toggleModal();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div>
        <h2
          style={{
            margin: '0px',
            fontSize: '28px',
            backgroundColor: 'grey',
            width: '400px',
            textAlign: 'center',
            padding: '10px 0px 10px 0px',
            marginLeft: '40px',
            marginTop: '30px',
            color: 'yellow',
          }}
        >
          In progress ({arrProgress.length})
        </h2>
        <List className={classes.root} subheader={<li />}>
          {courses.map(course => (
            <li key={course.id} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListItem
                  key={course.id}
                  id={course.id}
                  onClick={handleClick}
                  style={{
                    fontSize: '30px',
                    cursor: 'pointer',
                    paddingBottom: '4px',
                  }}
                >
                  {course.name}
                </ListItem>
                {course.data.map(
                  obj =>
                    obj.status === 'in progress' && (
                      <ListItem
                        key={obj.id}
                        id={course.id}
                        onClick={handleClick}
                        style={{
                          cursor: 'pointer',
                          border: '1px solid grey',
                          borderRadius: '10px',
                          padding: '5px 0 5px 20px',
                          marginBottom: '8px',
                        }}
                      >
                        {obj.name}
                      </ListItem>
                    ),
                )}
              </ul>
            </li>
          ))}
        </List>
      </div>
      <div>
        <h2
          style={{
            margin: '0px',
            fontSize: '28px',
            backgroundColor: 'grey',
            width: '400px',
            textAlign: 'center',
            padding: '10px 0px 10px 0px',
            marginLeft: '40px',
            marginTop: '30px',
            color: 'yellow',
          }}
        >
          Submitted ({arrSubmit.length})
        </h2>
        <List className={classes.root} subheader={<li />}>
          {courses.map(course => (
            <li key={course.id} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListItem
                  onClick={handleClick}
                  style={{
                    fontSize: '30px',
                    cursor: 'pointer',
                    paddingBottom: '4px',
                  }}
                  key={course.id}
                  id={course.id}
                >
                  {course.name}
                </ListItem>
                {course.data.map(
                  obj =>
                    obj.status === 'submitted' && (
                      <ListItem
                        key={obj.id}
                        id={course.id}
                        onClick={handleClick}
                        style={{
                          cursor: 'pointer',
                          border: '1px solid grey',
                          borderRadius: '10px',
                          padding: '5px 0 5px 20px',
                          marginBottom: '8px',
                        }}
                      >
                        {obj.name}
                      </ListItem>
                    ),
                )}
              </ul>
            </li>
          ))}
        </List>
      </div>
      <div>
        <h2
          style={{
            margin: '0px',
            fontSize: '28px',
            backgroundColor: 'grey',
            width: '400px',
            textAlign: 'center',
            padding: '10px 0px 10px 0px',
            marginLeft: '40px',
            marginTop: '30px',
            color: 'yellow',
          }}
        >
          Ready for release ({arrRelease.length})
        </h2>
        <List className={classes.root} subheader={<li />}>
          {courses.map(course => (
            <li key={course.id} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListItem
                  onClick={handleClick}
                  style={{
                    fontSize: '30px',
                    cursor: 'pointer',
                    paddingBottom: '4px',
                  }}
                  id={course.id}
                  key={course.id}
                >
                  {course.name}
                </ListItem>
                {course.data.map(
                  obj =>
                    obj.status === 'ready for release' && (
                      <ListItem
                        key={obj.id}
                        id={course.id}
                        onClick={handleClick}
                        style={{
                          cursor: 'pointer',
                          border: '1px solid grey',
                          borderRadius: '10px',
                          padding: '5px 0 5px 20px',
                          marginBottom: '8px',
                        }}
                      >
                        {obj.name}
                      </ListItem>
                    ),
                )}
              </ul>
            </li>
          ))}
        </List>
      </div>
      {isModal && (
        <Modal
          closeModal={toggleModal}
          children={<VerticalTabs course={course} />}
        />
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  courses: coursesSelectors.getVisibleCourses(state),
});

export default connect(mapStateToProps)(PinnedSubheaderList);
