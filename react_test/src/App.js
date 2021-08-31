import React from 'react';
import './App.css';
import LoginForm from "./components/login";
import Product from "./components/products";
import Signup from './Signup';
import Signin from './Signin'

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className = "container">
        <div className = "row">
          <div className = "col-6">
            {/* <LoginForm /> */}
            {/* <Product/> */}
            <Signup/>
            <Signin/>
          </div>
        </div>
      </div>
    );
  }
}


export default App;