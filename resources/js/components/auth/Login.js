import axios from 'axios'
import React, { Component } from 'react';
import Profile from '../Profile';

import { Button, FormGroup, FormControl, Container, Row, Col } from "react-bootstrap";
import "../../../css/login.css";
import "../../../vendor/jquery/jquery-3.2.1.min.js";
import "../../../vendor/tilt/tilt.jquery.min.js";
// import "../../../css/login/util.css";

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      loginstatus: [''],
      errors: []
    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleCreateNewProject = this.handleCreateNewProject.bind(this)
    this.hasErrorFor = this.hasErrorFor.bind(this)
    this.renderErrorFor = this.renderErrorFor.bind(this)

  }

  componentDidMount() {
    $('.js-tilt').tilt({
      scale: 1.1
    })
  }

  handleFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCreateNewProject(event) {
    event.preventDefault()

    const { history } = this.props

    const project = {
      name: this.state.name,
      password: this.state.password,
      error: this.state.error
    }

    this.setState({ error: false });

    axios.post('/api/login', project)
      .then(response => {
        // redirect to the homepage
        this.setState({
          loginstatus: response.data
        })
        if (this.state.loginstatus[0].name != null) {

          sessionStorage.setItem("id", this.state.loginstatus[0].id);
          sessionStorage.setItem("name", this.state.loginstatus[0].name);
          sessionStorage.setItem("email", this.state.loginstatus[0].email);
          sessionStorage.setItem("permission_name", this.state.loginstatus[0].permission_name);
          sessionStorage.setItem("manage_user", this.state.loginstatus[0].manage_user);
          sessionStorage.setItem("manage_knowledge", this.state.loginstatus[0].manage_knowledge);
          sessionStorage.setItem("manage_message", this.state.loginstatus[0].manage_message);
          sessionStorage.setItem("manage_equipment", this.state.loginstatus[0].manage_equipment);
          sessionStorage.setItem("manage_requipment", this.state.loginstatus[0].manage_requipment);
          sessionStorage.setItem("manage_problem", this.state.loginstatus[0].manage_problem);
          sessionStorage.setItem("manage_incident", this.state.loginstatus[0].manage_incident);
          sessionStorage.setItem("manage_contact", this.state.loginstatus[0].manage_contact);
          sessionStorage.setItem("manage_impact", this.state.loginstatus[0].manage_impact);
          sessionStorage.setItem("manage_priority", this.state.loginstatus[0].manage_priority);
          sessionStorage.setItem("manage_solution", this.state.loginstatus[0].manage_solution);
          sessionStorage.setItem("Report", this.state.loginstatus[0].Report);

          history.push('/Dashboard')
        }

      })
      .catch(error => {
        this.setState({
          errors: error.response.data.errors
        })
      })
  }

  hasErrorFor(field) {
    return !!this.state.errors[field]
  }

  renderErrorFor(field) {
    if (this.hasErrorFor(field)) {
      return (
        <strong style={{ color: 'red' }}>{this.state.errors[field][0]}</strong>
      )
    }
  }


  render() {
    return (
      <div className="container-login100">
        <Container className="wrap-login100">
          <Row>
            <Col className="login100-pic js-tilt" sm={8}>
              <img src="images/img-01.png"></img>
            </Col>
            <Col sm={4}>
              <form className="login100-form validate-form" onSubmit={this.handleCreateNewProject}>
                <span className="login100-form-title">Member Login</span>
                <FormGroup controlId="email" bsSize="large">
                  <label>Email</label>
                  <FormControl
                    autoFocus
                    id='email'
                    type='text'
                    className={`form-control ${this.hasErrorFor('email') ? 'is-invalid' : ''}`}
                    name='email'
                    value={this.state.name}
                    onChange={this.handleFieldChange}

                  />
                </FormGroup>
                {this.renderErrorFor('name')}
                <FormGroup controlId="password" bsSize="large">
                  <label>Password</label>
                  <FormControl
                    id='password'
                    className={`form-control ${this.hasErrorFor('password') ? 'is-invalid' : ''}`}
                    name='password'
                    type='password'
                    rows='10'
                    value={this.state.password}
                    onChange={this.handleFieldChange}

                  />
                </FormGroup>
                {this.renderErrorFor('password')}

                <Button block bsSize="large" type="submit">
                  Login
              </Button>
                <div class="text-center p-t-12">
                  <span class="txt1">
                    Forgot
                </span>
                  <a class="txt2" href="#">
                    Username / Password?
                </a>
                </div>
                <div class="text-center p-t-136">
                  <a class="txt2" href="#">
                    Create your Account
                <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                  </a>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
