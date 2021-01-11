import React from 'react';
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ItemList from '../components/List';

class InputField extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            task : '',
            list: []
        };
      }

  
    /************************************************** 
      Function to get the input value fron the textbox 
      e -> event
    ***************************************************/
    handleOnchange = (e) => {
        this.setState({
            task : e.target.value
        })
    }

     /********************************************************
      Function to update the list values and empty the textbox 
    **********************************************************/
    handleClick = () => {
      const { task } = this.state;
      this.setState({
        list:[...this.state.list, task],
        task: ''
      })
      sessionStorage.setItem('listData', this.state.list);
    }
    
    render() {
      const classes = this.props;
      const { list } = this.state
      return (
        <>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" 
         label="Enter Tasks" 
         variant="outlined" 
         size="medium"
         onChange={event => this.handleOnchange(event)}
         onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() //Ristrict to refresh on enter
           if(e.key === 'Enter')     //Enter key will also add values to the list
            this.handleClick() 
        }}
        />
      </form>
      <ItemList data={list} />
      <Button onClick={this.handleClick} variant="contained" color="primary" size="large">
        Add Item
      </Button>
      </>
      );
    }
  }
  export default InputField
