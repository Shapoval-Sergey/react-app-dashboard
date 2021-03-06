import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Modal from './Modal/Modal';
import VerticalTabs from './Tabs';

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

export default function PinnedSubheaderList({ courses }) {
  const classes = useStyles();
  const [isModal, setisModal] = useState(false);

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

  console.log(arrProgress);

  const toggleModal = () => {
    const toggledIsOpen = isModal ? false : true;
    setisModal(toggledIsOpen);
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
                  onClick={toggleModal}
                  style={{ fontSize: '30px', cursor: 'pointer' }}
                >
                  {course.name}
                </ListItem>
                {course.data.map(
                  obj =>
                    obj.status === 'in progress' && (
                      <ListItem key={obj.id}>
                        <ListItemText
                          onClick={toggleModal}
                          secondary={obj.name}
                          style={{
                            cursor: 'pointer',
                            border: '1px solid grey',
                            padding: '5px 0 5px 0',
                          }}
                        />
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
                  onClick={toggleModal}
                  style={{ fontSize: '30px', cursor: 'pointer' }}
                >
                  {course.name}
                </ListItem>
                {course.data.map(
                  obj =>
                    obj.status === 'submitted' && (
                      <ListItem key={obj.id}>
                        <ListItemText
                          onClick={toggleModal}
                          secondary={obj.name}
                          style={{
                            cursor: 'pointer',
                            border: '1px solid grey',
                            padding: '5px 0 5px 0',
                          }}
                        />
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
                  onClick={toggleModal}
                  style={{ fontSize: '30px', cursor: 'pointer' }}
                >
                  {course.name}
                </ListItem>
                {course.data.map(
                  obj =>
                    obj.status === 'ready for release' && (
                      <ListItem key={obj.id}>
                        <ListItemText
                          onClick={toggleModal}
                          secondary={obj.name}
                          style={{
                            cursor: 'pointer',
                            border: '1px solid grey',
                            padding: '5px 0 5px 0',
                          }}
                        />
                      </ListItem>
                    ),
                )}
              </ul>
            </li>
          ))}
        </List>
      </div>
      {isModal && (
        <Modal closeModal={toggleModal} children={<VerticalTabs />} />
      )}
    </div>
  );
}
