import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';

import coursesSelectors from '../redux/courses/coursesSelectors';
import coursesActions from '../redux/courses/coursesActions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  module: {
    display: 'block',
    fontSize: '24px',
    backgroundColor: '#353b37',
    color: 'yellow',
    padding: '16px 16px 16px 16px',
  },

  box: {
    display: 'flex',
    justifyContent: 'space-around',
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
    },
  },
}));

function SearchAppBar({ courses, value, onChangeFilter }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.box}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              value={value}
              onChange={e => onChangeFilter(e.target.value)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.module}>Total courses : {courses.length}</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => ({
  value: coursesSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: coursesActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchAppBar);
