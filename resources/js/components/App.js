import React, { Component } from 'react'
   import ReactDOM from 'react-dom'
   import { BrowserRouter, Route, Switch } from 'react-router-dom'
   import Header from './Header'

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
            
               <Route path='/home' component={Home} />
               <Route path='/success' component={Success} />


             </Switch>
           </div>
         </BrowserRouter>
       )
     }
   }

   ReactDOM.render(<App />, document.getElementById('app'))
