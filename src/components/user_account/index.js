import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class Account extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <h1>My Account</h1>
    );
  }

}

export default Account;
