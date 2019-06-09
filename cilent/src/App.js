import React, { Component } from 'react'
import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './js/components/auth/Login'
import Dashboard from './js/components/Dashboard'
import UserIndex from './js/components/User/index'
import E404 from './js/components/Error/E404'
import Test from './js/components/Test'


class App extends Component {
  UserRoutes() {
    return(
      <Switch>
        <Route exact path="/User" component={UserIndex} />
      </Switch>
    )
  }

  LoginRoutes() {

  }

  MainRoutes() {
    return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/Permission' component={Dashboard} />
        <Route path='/News' component={Dashboard} />
        <Route path='/Equipment' component={Dashboard} />
        <Route path='/Req' component={Dashboard} />
        <Route path='/Report' component={Dashboard} />
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={this.MainRoutes} />
            <Route path="/User" component={this.UserRoutes} />
            <Route path="/404" component={E404} />
          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}



export default App;
