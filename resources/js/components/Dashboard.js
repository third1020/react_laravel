import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


import Success from './success_insert'

import List_User from './manage_user/list_user'
import Add_user from './manage_user/add_user'
import Update_user from './manage_user/update_user'

import List_Permisson from './manage_permission/list_permission'
import List_Contact from './manage_contact/List_Contact'
import List_Equipment from './manage_equipment/list_equipment'
import List_Equipment_register from './manage_equipment_register/list_equipment_register'
import List_Equipment_type from './manage_equipment_type/list_equipment_type'
import List_Impact from './manage_impact/list_impact'
import List_Incident from './manage_incident/list_incident'
import List_Message from './manage_message/list_message'
import List_News from './manage_news/list_news'
import List_News_type from './manage_news_type/list_news_type'
import List_Priority from './manage_priority/list_priority'
import List_Problems from './manage_problems/list_problems'
import List_Request from './manage_request/list_request'



import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { FaBlog,FaBeer } from 'react-icons/fa';

import Header from './Header';
// import { SideNav, Nav } from 'react-sidenav';



export default class Dashboard extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email:'',
      permission_name:'',
      manage_user:'',
      manage_knowledge:'',
      manage_message:'',
      manage_equipment:'',
      manage_requipment:'',
      manage_problem:'',
      manage_incident:'',
      manage_contact:'',
      manage_impact:'',
      manage_priority:'',
      manage_solution:'',
      Report:'',


      loginstatus: [],
      errors: []
    }


    this.state.name = sessionStorage.getItem("name");
    this.state.email = sessionStorage.getItem("email");

    this.state.permission_name = sessionStorage.getItem("permission_name");
    this.state.manage_user = sessionStorage.getItem("manage_user");
    this.state.manage_knowledge = sessionStorage.getItem("manage_knowledge");
    this.state.manage_message = sessionStorage.getItem("manage_message");
    this.state.manage_equipment = sessionStorage.getItem("manage_equipment");
    this.state.manage_requipment = sessionStorage.getItem("manage_requipment");
    this.state.manage_problem = sessionStorage.getItem("manage_problem");
    this.state.manage_incident = sessionStorage.getItem("manage_incident");
    this.state.manage_contact = sessionStorage.getItem("manage_contact");
    this.state.manage_impact = sessionStorage.getItem("manage_impact");
    this.state.manage_priority = sessionStorage.getItem("manage_priority");
    this.state.manage_solution = sessionStorage.getItem("manage_solution");
    this.state.Report = sessionStorage.getItem("Report");


  }





    render() {


        return (

                    <div>

                    <Router>

                  <Route render={({ location, history }) => (
                      <React.Fragment>
                          <SideNav
                          style={{ background: '#e44745',position: 'absolute', height: '150%' }}
                               onSelect={(selected) => {
                                  const to = '/' + selected;
                                  if (location.pathname !== to) {
                                      history.push(to);
              console.log(location.pathname);
              console.log(to);

                                  }
                              }}
                          >
                              <SideNav.Toggle />
                              <SideNav.Nav defaultSelected="/">



                             <NavItem eventKey="Dashboard">
                             <NavIcon>

                             <i style={{ fontSize: '2.25em',align: 'justify',position: 'relative',top: 10}}><FaBlog/></i>

                             </NavIcon>
                                 <NavText>
                                    หน้าแรก
                                 </NavText>


                             </NavItem>





                             { this.state.manage_user == 1 ?
                               (
                                 <NavItem eventKey="manage_user">
                                 <NavIcon>
                                 <i style={{ fontSize: '2.25em',align: 'justify',position: 'relative',top: 10}}><FaBeer/></i>
                                 </NavIcon>
                                     <NavText style={{ paddingRight: 32  }} title="รายงาน">
                                       จัดการผู้ใช้งาน
                                     </NavText>
                                     <NavItem eventKey="manage_user/list_user" >
                                               <NavText>
                                          รายการข้อมูล
                                               </NavText>
                                      </NavItem>
                                       <NavItem eventKey="manage_user/add_user">
                                             <NavText>
                                           เพิ่มผู้ใช้งาน
                                             </NavText>
                                      </NavItem>
                                   <NavItem eventKey="manage_permission/add_permission" style={{left: 30 , fontsize: '14px' }}>
                                            <NavText style={{ fontsize: '18px' }}>
                                          สิทธิ์การเข้าถึง
                                            </NavText>
                                     </NavItem>
                                     <NavItem eventKey="manage_permission/add_permission" >
                                              <NavText>
                                            เพิ่มสิทธิ์การเข้าถึง
                                              </NavText>
                                       </NavItem>
                                       <NavItem eventKey="manage_permission/list_permission" >
                                                <NavText>
                                              เปลี่ยนแปลงสิทธิ์การเข้าถึง
                                                </NavText>
                                         </NavItem>
                                 </NavItem>

                                )
                               : null
                                }





                                { this.state.manage_knowledge == 1 ?
                                  (
                                    <NavItem eventKey="manage_knowledge">
                                    <NavIcon>
                                    <i style={{ fontSize: '2.25em',align: 'justify',position: 'relative',top: 10}}><FaBeer/></i>
                                    </NavIcon>
                                        <NavText>
                                            การจัดการความรู้
                                        </NavText>
                                        <NavItem eventKey="manage_knowledge/list_Content" >
                                                  <NavText>
                                             หัวข้อเรื่อง
                                                  </NavText>
                                         </NavItem>
                                          <NavItem eventKey="manage_knowledge/add_Content">
                                                <NavText>
                                              เพิ่มเนื้อหา
                                                </NavText>
                                         </NavItem>
                                      <NavItem eventKey="manage_knowledge/type_knowledge" style={{left: 30 , fontsize: '14px' }}>
                                               <NavText>
                                             ประเภทความรู้
                                               </NavText>

                                        </NavItem>
                                        <NavItem eventKey="manage_knowledge/type_knowledge" >
                                                 <NavText>
                                               หัวข้อความรู้
                                                 </NavText>
                                          </NavItem>
                                          <NavItem eventKey="manage_knowledge/add_knowledge" >
                                                   <NavText>
                                                 เพิ่มเนื้อหาความรู้
                                                   </NavText>
                                            </NavItem>
                                    </NavItem>

                                   )
                                  : null
                                   }




                                   { this.state.manage_message == 1 ?
                                     (
                                       <NavItem eventKey="message">
                                       <NavIcon>
                                       <i style={{ fontSize: '2.25em',align: 'justify',position: 'relative',top: 10}}><FaBeer/></i>
                                       </NavIcon>
                                           <NavText>
                                               จัดการข้อความ
                                           </NavText>
                                           <NavItem eventKey="manage_message/list_message" >
                                                    <NavText>
                                                  รายชื่อข้อความ
                                                    </NavText>
                                             </NavItem>
                                             <NavItem eventKey="manage_message/add_message" >
                                                      <NavText>
                                                    เพิ่มข้อความ
                                                      </NavText>
                                               </NavItem>
                                       </NavItem>


                                      )
                                     : null
                                      }





                                      { this.state.manage_equipment == 1 ?
                                        (
                                  <NavItem eventKey="manage_equipment">
                                  <NavIcon>
                                  <i style={{ fontSize: '2.25em',align: 'justify',position: 'relative',top: 10}}><FaBeer/></i>
                                  </NavIcon>
                                      <NavText>
                                          จัดการอุปกรณ์
                                      </NavText>
                                      <NavItem eventKey="manage_equipment/list_equipment" >
                                                <NavText>
                                           รายการข้อมูลอุปกรณ์
                                                </NavText>
                                       </NavItem>
                                        <NavItem eventKey="manage_equipment/add_equipment">
                                              <NavText>
                                            เพิ่มอุปกรณ์
                                              </NavText>
                                       </NavItem>
                                       <NavItem eventKey="manage_equipment_register/list_equipment_register">
                                             <NavText>
                                           รายการทะเบียนอุปกรณ์
                                             </NavText>
                                      </NavItem>
                                      <NavItem eventKey="manage_equipment_register/add_equipment_register">
                                            <NavText>
                                          เพิ่มเลขทะเบียนอุปกรณ์
                                            </NavText>
                                     </NavItem>
                                    <NavItem eventKey="manage_equipment_type/type_equipment" style={{left: 30 , fontsize: '14px' }}>
                                             <NavText>
                                           ประเภทอุปกรณ์
                                             </NavText>

                                      </NavItem>
                                      <NavItem eventKey="manage_equipment_type/list_equipment_type" >
                                               <NavText>
                                             รายการประเภทอุปกรณ์
                                               </NavText>
                                        </NavItem>
                                        <NavItem eventKey="manage_equipment_type/add_type_equipment" >
                                                 <NavText>
                                               เพิ่มประเภทอุปกรณ์
                                                 </NavText>
                                          </NavItem>
                                  </NavItem>
                                )
                               : null
                                }



                                { this.state.manage_requipment == 1 ?
                                  (
                                  <NavItem eventKey="manage_request">
                                  <NavIcon>
                                <i style={{ fontSize: '2.25em',align: 'justify',position: 'relative',top: 10}}><FaBeer/></i>
                                  </NavIcon>
                                      <NavText>
                                          จัดการความต้องการ
                                      </NavText>
                                      <NavItem eventKey="manage_request/list_request" >
                                               <NavText>
                                             รายการข้อมูล
                                               </NavText>
                                        </NavItem>
                                        <NavItem eventKey="manage_request/add_request" >
                                                 <NavText>
                                               เพิ่มความต้องการ
                                                 </NavText>
                                          </NavItem>
                                  </NavItem>
                                )
                               : null
                                }



                                { this.state.manage_problem == 1 ?
                                  (
                                  <NavItem eventKey="manage_problems">
                                  <NavIcon>
                                  <i style={{ fontSize: '2.25em',align: 'justify',position: 'relative',top: 10}}><FaBeer/></i>
                                  </NavIcon>
                                      <NavText>
                                          จัดการปัญหา
                                      </NavText>
                                      <NavItem eventKey="manage_problems/list_problems" >
                                               <NavText>
                                             รายการข้อมูลปัญหา
                                               </NavText>
                                        </NavItem>
                                        <NavItem eventKey="manage_problems/add_problem" >
                                                 <NavText>
                                               เพิ่มปัญหา
                                                 </NavText>
                                          </NavItem>
                                  </NavItem>
                                )
                               : null
                                }



                                  { this.state.manage_incident == 1 ?
                                    (
                                  <NavItem eventKey="manage_incident">
                                  <NavIcon>
                                  <i style={{ fontSize: '2.25em',align: 'justify',position: 'relative',top: 10}}><FaBeer/></i>
                                  </NavIcon>
                                      <NavText>
                                          จัดการเหตุการณ์
                                      </NavText>
                                      <NavItem eventKey="manage_incident/list_incident" >
                                               <NavText>
                                             รายการข้อมูลเหตุการณ์
                                               </NavText>
                                        </NavItem>
                                        <NavItem eventKey="manage_incident/add_incident" >
                                                 <NavText>
                                               เพิ่มเหตุการณ์
                                                 </NavText>
                                          </NavItem>
                                  </NavItem>
                                )
                               : null
                                }



                                  { this.state.manage_contact == 1 ?
                                    (
                                  <NavItem eventKey="manage_contact">
                                  <NavIcon>
                                  <i style={{ fontSize: '2.25em',align: 'justify',position: 'relative',top: 10}}><FaBeer/></i>
                                  </NavIcon>
                                      <NavText>
                                          จัดการผู้ติดต่อ
                                      </NavText>
                                      <NavItem eventKey="manage_contact/list_contact" >
                                               <NavText>
                                             รายการข้อมูลผู้ติดต่อ
                                               </NavText>
                                        </NavItem>
                                        <NavItem eventKey="manage_contact/add_contact" >
                                                 <NavText>
                                               เพิ่มผู้ติดต่อ
                                                 </NavText>
                                          </NavItem>
                                  </NavItem>
                                )
                               : null
                                }


                                  { this.state.manage_impact == 1 ?
                                    (
                                  <NavItem eventKey="manage_impact">
                                  <NavIcon>
                                  <i style={{ fontSize: '2.25em',align: 'justify',position: 'relative',top: 10}}><FaBeer/></i>
                                  </NavIcon>
                                      <NavText>
                                          จัดการผลกระทบ
                                      </NavText>
                                      <NavItem eventKey="manage_impact/list_impact" >
                                               <NavText>
                                             รายการข้อมูลผลกระทบ
                                               </NavText>
                                        </NavItem>
                                        <NavItem eventKey="manage_impact/add_impact" >
                                                 <NavText>
                                               เพิ่มผลกระทบ
                                                 </NavText>
                                          </NavItem>
                                  </NavItem>
                                )
                               : null
                                }


                                  { this.state.manage_priority == 1 ?
                                    (
                                  <NavItem eventKey="manage_priority">
                                  <NavIcon>
                                  <i style={{ fontSize: '2.25em',align: 'justify',position: 'relative',top: 10}}><FaBeer/></i>
                                  </NavIcon>
                                      <NavText>
                                          จัดการความสำคัญ
                                      </NavText>
                                      <NavItem eventKey="manage_priority/list_priority" >
                                               <NavText>
                                             รายการข้อมูลความสำคัญ
                                               </NavText>
                                        </NavItem>
                                        <NavItem eventKey="manage_priority/add_priority" >
                                                 <NavText>
                                               เพิ่มความสำคัญ
                                                 </NavText>
                                          </NavItem>
                                  </NavItem>
                                )
                               : null
                                }



                                  { this.state.manage_solution == 1 ?
                                    (
                                  <NavItem eventKey="manage_solution">
                                  <NavIcon>
                                  <i style={{ fontSize: '2.25em',align: 'justify',position: 'relative',top: 10}}><FaBeer/></i>
                                  </NavIcon>
                                      <NavText>
                                          จัดการการแก้ไขปัญหา
                                      </NavText>
                                      <NavItem eventKey="manage_solution/list_solution" >
                                               <NavText>
                                             รายการข้อมูลการแก้ไขปัญหา
                                               </NavText>
                                        </NavItem>
                                  </NavItem>
                                )
                               : null
                                }



                                  { this.state.Report == 1 ?
                                    (
                                  <NavItem eventKey="Report">
                                  <NavIcon>
                                  <i style={{ fontSize: '2.25em',verticalAlign: 'middle' ,top: 10}}><FaBeer/></i>
                                  </NavIcon>
                                      <NavText style={{ paddingRight: 2 }} title="รายงาน">
                                          รายงาน
                                      </NavText>

                                      <NavItem eventKey="Report/request" >
                                               <NavText style={{ paddingRight: 2 }} title="รายงานผู้ขอใช้บริการ">
                                             รายงานผู้ขอใช้บริการ
                                               </NavText>
                                        </NavItem>
                                      <NavItem eventKey="Report/problem" >
                                               <NavText title="รายงานปัญหา">
                                             รายงานปัญหา
                                               </NavText>
                                        </NavItem>
                                        <NavItem eventKey="Report/incident" >
                                                 <NavText title="รายงานอินซิเด้นท์">
                                               รายงานอินซิเด้นท์
                                                 </NavText>
                                          </NavItem>
                                          <NavItem eventKey="Report/total" >
                                                   <NavText title="รายงานภาพรวมทั้งหมด">
                                                 รายงานภาพรวมทั้งหมด
                                                   </NavText>
                                            </NavItem>
                                            <NavItem eventKey="Report/workaround" >
                                                     <NavText title="รายงานข้อมูลการทำงาน">
                                                   รายงานข้อมูลการทำงาน
                                                     </NavText>
                                              </NavItem>

                                  </NavItem>
                                )
                               : null
                                }






                              </SideNav.Nav>
                          </SideNav>
                          <main>




                              <Switch>
                              <Route exact path='/manage_user/list_user' component={List_User} />
                              <Route path='/manage_user/add_user' component={Add_user} />
                              <Route path='/manage_user/edit/:id' component={Update_user} />

                              <Route path='/manage_permission/list_permission'                 component={List_Permisson} />
                              <Route path='/manage_contact/list_contact'                       component={List_Contact} />
                              <Route path='/manage_equipment/list_equipment'                   component={List_Equipment} />
                              <Route path='/manage_equipment_register/list_equipment_register' component={List_Equipment_register} />
                              <Route path='/manage_equipment_type/list_equipment_type'         component={List_Equipment_type} />
                              <Route path='/manage_impact/list_impact'                         component={List_Impact} />
                              <Route path='/manage_incident/list_incident'                     component={List_Incident} />
                              <Route path='/manage_message/list_message'                       component={List_Message} />
                              <Route path='/manage_news/list_news'                             component={List_News} />
                              <Route path='/manage_news_type/list_news_type'                   component={List_News_type} />
                              <Route path='/manage_priority/list_priority'                     component={List_Priority} />
                              <Route path='/manage_problems/list_problems'                     component={List_Problems} />
                              <Route path='/manage_request/list_request'                       component={List_Request} />




                              <Route path='/success' component={Success} />



                             </Switch>
                          </main>
                      </React.Fragment>
                  )}
                  />
              </Router></div>
        );
    }
}
