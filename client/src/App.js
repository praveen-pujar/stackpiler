import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser ,deleteUser} from './services/UserService'

class App extends Component {

  state = {
    user: '',
    users: [],
    value : '',
  
  }

  

  createUser = (e) => {
    this.DisplayStack();
    // console.log(this.state.value);
    // console.log(this.state.users.length);
    if(this.state.value <= this.state.users.length){
      alert('Stack is full..');
    }
    else {
      if(this.state.user ==='' || this.state.user === undefined){
        alert('Please enter an element to push');
      }
      else{
        createUser(this.state.user)
        .then(response => {
          // console.log('This is createUser console');
          // console.log(response);
          this.DisplayStack();
      });
      }
  }
}

  deleteUser = () =>{  
    
      var ele = this.state.users.pop();
      var filteredItems = this.state.users.filter(function(item){
        return (item !== ele);
      });
      this.setState({users: filteredItems})
      // alert('Popped the last element from stack' );

      // deleting from server
      deleteUser(ele)
      .then(response => {
        // console.log("This is deleteUser console...")
        // console.log(response);
      })  

  }

  setStackSize = () => {
    if(this.state.value === '' || this.state.value === undefined){
      alert("Please enter stack size");
    }
    else{
      // console.log("this is setStackSize console...")
      alert('Stack size is assigned!');
    }
   

  //   setStackSize(this.state.value)
  //     .then(response => {
  //       console.log("this is setStackSize console...")
  //       console.log(response);
  //     })
  }




  DisplayStack = () => {
  
      getAllUsers().then(users => {
        // console.log('Displaying stack...')
        // console.log(users)
        this.setState({users: users})
      });
  }

  onChangeForm = (e) => {
 
      let user = this.state.user
      let stackSize = this.state.value;
  
      if (e.target.name === 'firstname') {
        user = e.target.value;
        this.setState({user: user})
      } 
      else if(e.target.name === 'stackSize'){
      stackSize = e.target.value;
      this.setState({value: stackSize})
    } 
}

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreateUser 
                  user={this.state.user}
                  onChangeForm={this.onChangeForm}
                  setStackSize={this.setStackSize}
                  createUser={this.createUser}
                 
                  >
                </CreateUser>
            </div>
            
            <div className="col-md-4">
                <DisplayBoard
                  numberOfUsers={this.state.numberOfUsers}
                  createUser={this.createUser}
                  deleteUser={this.deleteUser}
                  DisplayStack={this.DisplayStack}
                 
                >
                </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Users users={this.state.users}></Users>
        </div>
      </div>
    );
  }
}

export default App;
