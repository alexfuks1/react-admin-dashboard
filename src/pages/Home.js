import React, { useState } from 'react';
import Sales from '../components/Sales/Sales';
import Report from '../components/Report/Report';
import Msg from '../components/Msg/Msg';
import Activity from '../components/Activity/Activity';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Task from '../components/Task/Task';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'yellow'
  },
  firstContent: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'green'
  }
}));



const Home = ({ }) => {
  const classes = useStyles();

  // const isActive = useMediaQuery("(max-width:320px),(max-width:375px),(max-width:425px),(max-width:768px)");
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Sales/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Report/>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Task/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Msg/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Activity/>
        </Grid>
      </Grid>
    </div>
  );
}
export default Home;
