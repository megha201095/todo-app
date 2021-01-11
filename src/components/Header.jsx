import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(150),
      height: theme.spacing(10),
      backgroundColor: '#3F51B5',
      color: 'white'

    },
  },
}));

//** Will return the header of the application */

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
       <h2 style={{"textAlign": "center"}}>TODO Application </h2>
      </Paper>
    </div>
  );
}