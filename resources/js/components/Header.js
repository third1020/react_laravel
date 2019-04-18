import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default class Header extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',

    }


    this.state.name = sessionStorage.getItem("name");

  }
    render() {
        return (

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{paddingRight: 75,paddingLeft: 75}}>
  <Navbar.Brand href="#home" style={{align: 'middle'}}>React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto" >
  </Nav>
  <Nav>
  <NavDropdown title={this.state.name } id="collasible-nav-dropdown">

    <NavDropdown.Item href="#Profile">{this.state.name }</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="signin">logout</NavDropdown.Item>
  </NavDropdown>


  </Nav>
  </Navbar.Collapse>
  </Navbar>

  );
}
}
