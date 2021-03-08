import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export function TabPanel(props) {
  const { value, course } = props;

  return course.data.map(obj => (
    <div
      key={obj.id}
      role="tabpanel"
      hidden={value !== obj.id - 1}
      id={`vertical-tabpanel-${obj.id - 1}`}
      aria-labelledby={`vertical-tab-${obj.id - 1}`}
    >
      {value === obj.id - 1 && (
        <Box p={3}>
          <Typography>
            {obj.name}
            <span
              style={{
                fontSize: '12px',
                fontWeight: '200',
                marginLeft: '20px',
              }}
            >
              {obj.status}
            </span>
          </Typography>
        </Box>
      )}
    </div>
  ));
}

TabPanel.propTypes = {
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs({ course }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h2 style={{ display: 'block', margin: '0px' }}>{course.name}</h2>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {course.data.map(obj => (
            <Tab label={obj.name} key={obj.id} id={obj.id} />
          ))}
        </Tabs>
        <TabPanel value={value} course={course} />
      </div>
    </>
  );
}
