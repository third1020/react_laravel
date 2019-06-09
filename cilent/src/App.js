import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './css/App.css';
import { BrowserRouter,
  Route,
  Redirect,
  Switch } from 'react-router-dom'
import Login from './js/components/auth/Login'
import BackOffice from './js/components/BackOffice'
import E404 from './js/components/Error/E404'
import Navigation from './js/components/Navigation';

class App extends Component {
  UserRoutes() {
    
  }

  LoginRoutes() {

  }

  BackOffice() {
    return(
      <Switch>
        <Route path='/' component={BackOffice} />
      </Switch>
    )
  }

  MainRoutes() {
    return (
      <Switch>
        <Route path='/login' component={Login} />
        <Route path="*" component={E404} />
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/back-office" component={this.BackOffice} />
            <Route path="*" component={E404} />
          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}



export default App;
