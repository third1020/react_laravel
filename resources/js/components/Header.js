import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


 class Header extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',

    }



    this.state.name = sessionStorage.getItem("name");


  }

  ClearSession () {
    sessionStorage.clear();


  }


    render() {
        return (

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{paddingRight: 75,paddingLeft: this.props.left}}>
  <Navbar.Brand href="#home" style={{align: 'middle'}}>React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto" >
  </Nav>
  <Nav>
  <NavDropdown title={this.state.name } id="collasible-nav-dropdown">

    <NavDropdown.Item href="/Dashboard">{this.state.name}</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="/" >logout</NavDropdown.Item>
  </NavDropdown>


  </Nav>
  </Navbar.Collapse>
  </Navbar>

  );
}
}

Header.propTypes = {
  left: PropTypes.number,

};

export default Header
