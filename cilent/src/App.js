import React, { Component } from 'react'
import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './js/components/auth/Login'
import Dashboard from './js/components/Dashboard'
import Test from './js/components/Test'

// import ManageUser from './js/components/ManageUser/list_user'
// import ManagePermission from './js/components/ManagePermission/list_permission'
// import ManageNews from './js/components/ManageNews/list_news'
// import ManageNewsType from './js/components/ManageNewsType/list_news_type'
// import ManageMessage from './js/components/ManageMessage/list_message'
// import ManageEquipment from './js/components/ManageEquipment/list_equipment'
// import ManageEquipmentRegister from './js/components/ManageEquipmentRegister/list_equipment_register'
// import ManageEquipmentType from './js/components/ManageEquipmentType/list_equipment_type'
// import ManageRequipment from './js/components/ManageRequipment/list_request'
// import ManageProblem from './js/components/ManageProblem/list_problems'
// import ManageIncident from './js/components/ManageIncident/list_incident'
// import ManageContact from './js/components/ManageContact/list_contact'
// import ManageImpact from './js/components/ManageImpact/list_impact'
// import ManagePriority from './js/components/ManagePriority/list_priority'
// import ReportIncident from './js/components/Report/Report_incident'
// import ReportProblems from './js/components/Report/Report_problems'
// import ReportRequest from './js/components/Report/Report_request'


// <Route path='/ManageUser' component={ManageUser} />
// <Route path='/ManagePermission' component={ManagePermission} />
// <Route path='/ManageNews' component={ManageNews} />
// <Route path='/ManageNewsType' component={ManageNewsType} />
// <Route path='/ManageMessage' component={ManageMessage} />
// <Route path='/ManageEquipment' component={ManageEquipment} />
// <Route path='/ManageEquipmentRegister' component={ManageEquipmentRegister} />
// <Route path='/ManageEquipmentType' component={ManageEquipmentType} />
// <Route path='/ManageRequipment' component={ManageRequipment} />
// <Route path='/ManageProblem' component={ManageProblem} />
// <Route path='/ManageIncident' component={ManageIncident} />
// <Route path='/ManageContact' component={ManageContact} />
// <Route path='/ManageImpact' component={ManageImpact} />
// <Route path='/ManagePriority' component={ManagePriority} />
// <Route path='/ManageSolution' component={ManageSolution} />
// <Route path='/ReportIncident' component={ReportIncident} />
// <Route path='/ReportProblems' component={ReportProblems} />
// <Route path='/ReportRequest' component={ReportRequest} />



    class App extends Component {
      render () {
        return (
          <BrowserRouter>
                    <div>

                      <Switch>

                        <Route exact path='/' component={Login} />
                        <Route path='/Dashboard' component={Dashboard} />

                        <Route path='/ManageUser' component={Dashboard} />
                        <Route path='/ManagePermission' component={Dashboard} />
                        <Route path='/ManageNews' component={Dashboard} />
                        <Route path='/ManageNewsType' component={Dashboard} />
                        <Route path='/ManageMessage' component={Dashboard} />
                        <Route path='/ManageEquipment' component={Dashboard} />
                        <Route path='/ManageEquipmentRegister' component={Dashboard} />
                        <Route path='/ManageEquipmentType' component={Dashboard} />
                        <Route path='/ManageRequipment' component={Dashboard} />
                        <Route path='/ManageProblem' component={Dashboard} />
                        <Route path='/ManageIncident' component={Dashboard} />
                        <Route path='/ManageContact' component={Dashboard} />
                        <Route path='/ManageImpact' component={Dashboard} />
                        <Route path='/ManagePriority' component={Dashboard} />
                        <Route path='/ManageSolution' component={Dashboard} />
                        <Route path='/ReportIncident' component={Dashboard} />
                        <Route path='/ReportProblems' component={Dashboard} />
                        <Route path='/ReportRequest' component={Dashboard} />


                      </Switch>
                    </div>
                  </BrowserRouter>

        )
      }
    }



export default App;
