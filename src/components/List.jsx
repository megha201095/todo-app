import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    top: '30%',
    left: '35%',
    margin: '-25px 0 0 -25px',
  },
}));

const RenderRow = (props) => {
  const { index, style, data } = props;
  const sessionData = [sessionStorage.getItem('listData') || '']
console.log('---session ---', sessionData);
  return data.map(i => (
          <ListItem button style={style} key={index} disablePadding>
          <ListItemText primary={i} />
          </ListItem>
  ))    
}

RenderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function ItemList(props) {
  const classes = useStyles();
  const { data } = props;
  return (
    <div className={classes.root} style={{"width": "500"}}>
      <RenderRow data={data.length ? data : []}/>  
    </div>
  );
}
