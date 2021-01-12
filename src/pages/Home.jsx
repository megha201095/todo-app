import React from 'react';
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ItemList from '../components/List';

class HomePage extends React.Component {
    
    constructor(props) {
        super(props);
        const list  = this.getSessionData();
        this.state = {
            task : '',
            list: list || []
        };
      }
        
    /*************************************************************************
      Function to get the values of items in list stored in session storage
    *************************************************************************/
      getSessionData = () => {
        try{
          let list = sessionStorage.getItem('listData');
          list = list && JSON.parse(list);
          return list;
        } catch(err){
          return null;
        }
      }

    /*******************************************
      Function to delete the item from list 
    *******************************************/
      deleteItem = (e,index) => {
      const { list } = this.state;
      list.splice(index, 1);
      this.setState({
        list:[...this.state.list],
        task: ''
      },
      ()=>{
        sessionStorage.setItem('listData', JSON.stringify(this.state.list));
      }
      )

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
      },
      ()=>{
        sessionStorage.setItem('listData', JSON.stringify(this.state.list));
      }
      )
    }

    render() {
      const classes = this.props;
      const { list, task } = this.state
      return (
        <>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" 
         label="Enter Tasks" 
         variant="outlined" 
         size="medium"
         value={task}
         onChange={event => this.handleOnchange(event)}
         onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() //Ristrict to refresh on enter
           if(e.key === 'Enter')     //Enter key will also add values to the list
            this.handleClick() 
        }}
        />
      </form>
      <ItemList data={list} deleteFunc={this.deleteItem}/>
      <Button onClick={this.handleClick} variant="contained" color="primary" size="large">
        Add Item
      </Button>
      </>
      );
    }
  }
  export default HomePage;
