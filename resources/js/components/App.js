import React, { Component } from 'react'
   import ReactDOM from 'react-dom'
   import { BrowserRouter, Route, Switch } from 'react-router-dom'
   import Header from './Header'

   import Home from './Home'
   import Success from './success_insert'
   import Update_user from './manage_user/update_user'
    import Login from './auth/Login'
    import Dashboard from './Dashboard'
    import Profile from './Profile'


   class App extends Component {
     render () {
       return (
         <BrowserRouter>
           <div>

             <Switch>
               <Route exact path='/' component={Login} />

               <Route path='/Dashboard' component={Dashboard} />
               <Route path='/manage_user/add_user' component={Dashboard} />
               <Route path='/manage_contact/add_contact' component={Dashboard} />
               <Route path='/manage_equipment/add_equipment' component={Dashboard} />
               <Route path='/manage_equipment_register/add_equipment_register' component={Dashboard} />
               <Route path='/manage_equipment_type/add_equipment_type' component={Dashboard} />
               <Route path='/manage_permission/add_permission' component={Dashboard} />
               <Route path='/manage_impact/add_impact' component={Dashboard} />
               <Route path='/manage_incident/add_incident' component={Dashboard} />
               <Route path='/manage_message/add_message' component={Dashboard} />
               <Route path='/manage_news_type/add_news_type' component={Dashboard} />
               <Route path='/manage_news/add_news' component={Dashboard} />
               <Route path='/manage_priority/add_priority' component={Dashboard} />
               <Route path='/manage_request/add_request' component={Dashboard} />
               <Route path='/manage_problems/add_problems' component={Dashboard} />
               <Route path='/manage_user/list_user' component={Dashboard} />
               <Route path='/manage_permission/list_permission' component={Dashboard} />
               <Route path='/manage_contact/List_Contact' component={Dashboard} />
               <Route path='/manage_equipment/list_equipment' component={Dashboard} />
               <Route path='/manage_equipment_register/list_equipment_register' component={Dashboard} />
               <Route path='/manage_equipment_type/list_equipment_type' component={Dashboard} />
               <Route path='/manage_impact/list_impact' component={Dashboard} />
               <Route path='/manage_incident/list_incident' component={Dashboard} />
               <Route path='/manage_message/list_message' component={Dashboard} />
               <Route path='/manage_news/list_news' component={Dashboard} />
               <Route path='/manage_news_type/list_news_type' component={Dashboard} />
               <Route path='/manage_priority/list_priority' component={Dashboard} />
               <Route path='/manage_problems/list_problems' component={Dashboard} />
               <Route path='/manage_request/list_request' component={Dashboard} />
               <Route path='/manage_equipment_type/type_equipment' component={Dashboard} />
               <Route path='/manage_user' component={Dashboard} />
               <Route path='/manage_permission' component={Dashboard} />
               <Route path='/manage_contact' component={Dashboard} />
               <Route path='/manage_equipment' component={Dashboard} />
               <Route path='/manage_equipment_register' component={Dashboard} />
               <Route path='/manage_equipment_type' component={Dashboard} />
               <Route path='/manage_impact' component={Dashboard} />
               <Route path='/manage_incident' component={Dashboard} />
               <Route path='/manage_message' component={Dashboard} />
               <Route path='/manage_news' component={Dashboard} />
               <Route path='/manage_news_type' component={Dashboard} />
               <Route path='/manage_priority' component={Dashboard} />
               <Route path='/manage_problems' component={Dashboard} />
               <Route path='/manage_request' component={Dashboard} />
               <Route path='/Profile' component={Profile} />




             </Switch>
           </div>
         </BrowserRouter>
       )
     }
   }

   ReactDOM.render(<App />, document.getElementById('app'))
