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
    top: '35%',
    left: '38%',
    margin: '-25px 0 0 -25px',
  },
}));

const RenderRow = (props) => {
  const {data, deleteItem } = props;
  return data.map((i,index) => (
        <ListItem button key={index} onClick={e => deleteItem(e, index)}>
          <ListItemText primary={i} />
        </ListItem>          
  ))    
}

RenderRow.propTypes = {
  data: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default function ItemList(props) {
  const classes = useStyles();
  const { data, deleteFunc } = props;
  return (
    <div className={classes.root} style={{"width": "500", "overflowY": "scroll"}}>
      <RenderRow data={data.length ? data : []} deleteItem={deleteFunc}/>  
    </div>
  );
}
