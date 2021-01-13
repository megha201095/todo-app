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

      componentDidMount(){
        try {
          fetch(`http://localhost:5000/call/greeting/3`, {
            method: 'GET',
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json',
             }
      
          })
          .then(response => response.text())
          .then(data => console.log("data from /call/greeting endpoint is:", data));
        } catch (error) {
          console.log('--error--', error);
        }

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
      const { list, task } = this.state
      return (
        <>
        <div className="formWrapper">
        <form  
        noValidate 
        autoComplete="off">
        <TextField id="standard-basic" 
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
      <Button onClick={this.handleClick} 
       variant="contained" 
       color="default" 
       style={{"height":"52px"}}>
        Add Item
      </Button>
      </div>
      <div className="listWrapper">
      <ItemList data={list} deleteFunc={this.deleteItem}/>
      </div>
      </>
      );
    }
  }
  export default HomePage;
