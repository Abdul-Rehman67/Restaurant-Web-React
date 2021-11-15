import './App.css';
import Menu from './components/Menu';
import { Navbar } from 'reactstrap';
import { NavbarBrand } from 'reactstrap';
import React, { Component } from 'react'
import {Card,CardBody,CardImg,CardImgOverlay,CardText,CardTitle} from 'reactstrap';
import Test from './components/Test'
export class App extends Component {
  
 
  render(){
   
    
    return (
      <>
        <div>
          <Navbar color="primary" light expand="md">
            <div className="container">
            <NavbarBrand href='/'>Restaurant</NavbarBrand>
            </div>
          </Navbar>
          <Menu/>
          <Test/>
        </div>
  
  
      </>
  
    );
   }
  
  }
  



  
  export default App
