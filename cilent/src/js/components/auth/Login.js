import axios from 'axios'
import React, { Component } from 'react';


import "../../../css/login.css";


import "../../../css/util.css";
import IMG from "../../../images/img-01.png"
import {FaUserAlt,FaKey } from 'react-icons/fa';


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',

    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleCreateNewProject = this.handleCreateNewProject.bind(this)


  }

  componentDidMount() {

  }

  handleFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCreateNewProject(event) {
    alert(this.state.username + this.state.password );
    event.preventDefault()

    const { history } = this.props

    const project = {
      username: this.state.username,
      password: this.state.password,

    }

    axios.post('/api/login', project)
      .then(response => {
        // redirect to the homepage
        console.log(response.data);

        sessionStorage.setItem("Token", response.data.token);

        if(response.data.token != null){
          alert("Token :"+sessionStorage.getItem("Token"));
          history.push('/Dashboard')

        }else{
          alert(response.data.error);

        }







      })
      .catch(error => {
    alert("username or password invalid");
      })
  }




  render() {
    return (

	<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src={IMG}></img>
				</div>

				<form className="login100-form validate-form" onSubmit={this.handleCreateNewProject}>
					<span className="login100-form-title">
						Member Login
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100"
                   type="text"
                   name="username"
                   value={this.state.username}
                   onChange={this.handleFieldChange}
                   placeholder="Username"
                   />
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i  aria-hidden="true"><FaUserAlt/></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100"
                   type="password"
                   name="password"
                   value={this.state.password}
                   onChange={this.handleFieldChange}
                   placeholder="Password"
                   />
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"> <FaKey/></i>
						</span>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Login
						</button>
					</div>

					<div className="text-center p-t-12">
						<span className="txt1">
							Forgot
						</span>
						<a className="txt2" href="#">
							Username / Password?
						</a>
					</div>

					<div className="text-center p-t-136">
						<a className="txt2" href="#">
							Create your Account
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
    )
  }
}
