import React, { Component } from 'react'
   import ReactDOM from 'react-dom'
   import { BrowserRouter, Route, Switch } from 'react-router-dom'
   import Header from './Header'
   import NewProject from './NewProject'
   import ProjectsList from './ProjectsList'
   import SingleProject from './SingleProject'
   import Home from './Home'
   import Success from './success_insert'
   import Update_user from './manage_user/update_user'
    import Login from './auth/Login'
   class App extends Component {
     render () {
       return (
         <BrowserRouter>
           <div>

             <Switch>
               <Route exact path='/' component={Login} />
               <Route path='/create' component={NewProject} />
               <Route path='/home' component={Home} />
               <Route path='/success' component={Success} />
                <Route path='/projectslist' component={ProjectsList} />
                <Route path='/:id' component={SingleProject} />

             </Switch>
           </div>
         </BrowserRouter>
       )
     }
   }

   ReactDOM.render(<App />, document.getElementById('app'))
