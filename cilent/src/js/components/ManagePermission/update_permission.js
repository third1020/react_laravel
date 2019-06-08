import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import ImageUploader from 'react-images-upload';
import Checkbox from 'react-simple-checkbox';
import PropTypes from 'prop-types';




import { Button , Form , Col, Row} from 'react-bootstrap';
import axios from 'axios'
import { ToastContainer } from "react-toastr";
import "../../../css/alert.css";
import "../../../css/animate.css";
let container;



    class Update_permission extends Component {
      constructor (props) {
        super(props)
        this.state = {
          permission_name	: '',
          manage_user	: false,
          manage_knowledge	: false,
          manage_message	: false,
          manage_equipment	: false,
          manage_requipment	: false,
          manage_problem	: false,
          manage_incident	: false,
          manage_contact	: false,
          manage_impact	: false,
          manage_priority	: false,
          manage_solution	: false,
          Report	: false,

          errors: []
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreate= this.handleCreate.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
        this.handleCheckboxUserChange = this.handleCheckboxUserChange.bind(this)
        this.handleCheckboxknowledgeChange = this.handleCheckboxknowledgeChange.bind(this)
        this.handleCheckboxmessageChange = this.handleCheckboxmessageChange.bind(this)
        this.handleCheckboxequipmentChange = this.handleCheckboxequipmentChange.bind(this)
        this.handleCheckboxrequipmentChange = this.handleCheckboxrequipmentChange.bind(this)
        this.handleCheckboxproblemChange = this.handleCheckboxproblemChange.bind(this)
        this.handleCheckboxincidentChange = this.handleCheckboxincidentChange.bind(this)
        this.handleCheckboxcontactChange = this.handleCheckboxcontactChange.bind(this)
        this.handleCheckboximpactChange = this.handleCheckboximpactChange.bind(this)
        this.handleCheckboxpriorityChange = this.handleCheckboxpriorityChange.bind(this)
        this.handleCheckboxsolutionChange = this.handleCheckboxsolutionChange.bind(this)
        this.handleCheckboxReportChange = this.handleCheckboxReportChange.bind(this)


      }
      handleCheckboxUserChange (event) {
        this.setState({
        manage_user  : !this.state.manage_user
        })
      }

      handleCheckboxknowledgeChange (event) {
        this.setState({
        manage_knowledge  : !this.state.manage_knowledge
        })
      }

      handleCheckboxmessageChange (event) {
        this.setState({
        manage_message  : !this.state.manage_message
        })
      }

      handleCheckboxequipmentChange (event) {
        this.setState({
        manage_equipment  : !this.state.manage_equipment
        })
      }

      handleCheckboxrequipmentChange (event) {
        this.setState({
        manage_requipment  : !this.state.manage_requipment
        })
      }

      handleCheckboxproblemChange (event) {
        this.setState({
        manage_problem  : !this.state.manage_problem
        })
      }

      handleCheckboxincidentChange (event) {
        this.setState({
        manage_incident  : !this.state.manage_incident
        })
      }

      handleCheckboxcontactChange (event) {
        this.setState({
        manage_contact  : !this.state.manage_contact
        })
      }

      handleCheckboximpactChange (event) {
        this.setState({
        manage_impact  : !this.state.manage_impact
        })
      }

      handleCheckboxpriorityChange (event) {
        this.setState({
        manage_priority  : !this.state.manage_priority
        })
      }

      handleCheckboxsolutionChange (event) {
        this.setState({
        manage_solution  : !this.state.manage_solution
        })
      }

      handleCheckboxReportChange (event) {
        this.setState({
        Report  : !this.state.Report
        })
      }




      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }






      handleCreate (event) {



        event.preventDefault()

        const { history } = this.props

        const insertdata = {

          permission_name	: this.state.permission_name,
          manage_user	: this.state.manage_user,
          manage_knowledge	: this.state.manage_knowledge,
          manage_message	: this.state.manage_message,
          manage_equipment	: this.state.manage_equipment,
          manage_requipment	: this.state.manage_requipment,
          manage_problem	: this.state.manage_problem,
          manage_incident	: this.state.manage_incident,
          manage_contact	: this.state.manage_contact,
          manage_impact	: this.state.manage_impact,
          manage_priority	: this.state.manage_priority,
          manage_solution	: this.state.manage_solution,
          Report	: this.state.Report,


        }

        axios.put(`/api/permission_update/${this.props.id}`, insertdata)
          .then(response => {

            container.success(`success `, `///title\\\\\\`, {
                closeButton: true,
                timeOut: 5000
              })
              window.scrollTo(0, 0);

          })
          .catch(error => {
            this.setState({

              errors: error.response.data.errors
            })

            container.error(`errors`, `///title\\\\\\`, {
                closeButton: true,

                timeOut: 5000,
                extendedTimeOut: 2000
              })
            window.scrollTo(0, 0);
          })





      }

      hasErrorFor (field) {
        return !!this.state.errors[field]
      }

      renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
          return (
            <span className='invalid-feedback'>
              <strong>{this.state.errors[field][0]}</strong>
            </span>
          )
        }
      }



      componentWillMount () {

        axios.get(`/api/permission/${this.props.id}`).then(response => {
          this.setState({

            permission_name	: response.data[0].permission_name,
            manage_user	: response.data[0].manage_user,
            manage_knowledge	:response.data[0].manage_knowledge,
            manage_message	: response.data[0].manage_message,
            manage_equipment	: response.data[0].manage_equipment,
            manage_requipment	: response.data[0].manage_requipment,
            manage_problem	: response.data[0].manage_problem,
            manage_incident	: response.data[0].manage_incident,
            manage_contact	: response.data[0].manage_contact,
            manage_impact	: response.data[0].manage_impact,
            manage_priority	: response.data[0].manage_priority,
            manage_solution	: response.data[0].manage_solution,
            Report	: response.data[0].Report



          })
        })


      }

      render () {


        return (



            <div className='col-lg-12' style={{width:900,padding:40}}>
                <div className='card'>
                  <div className='card-header'>เพิ่มสิทธิ์ผู้ใช้งาน</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreate}>
                    <div className='form-group'>
                      <label htmlFor='FullName'>ชื่อ-นามสกุล</label>
                      <input
                        id='permission_name'
                        type='text'
                        placeholder="กรอก ชื่อ-นามสกุล"
                        className={`form-control ${this.hasErrorFor('permission_name') ? 'is-invalid' : ''}`}
                        name='permission_name'
                        value={this.state.permission_name}
                        onChange={this.handleFieldChange}
                      />
                      {this.renderErrorFor('permission_name')}

                    </div>

                      <div className='form-group'>
                      <label>สิทธิ์การเข้าถึง User :</label>    <input type="checkbox" checked={this.state.manage_user} onChange={this.handleCheckboxUserChange}/>
                      </div>

                      <div className='form-group'>
                      <label>สิทธิ์การเข้าถึง News :</label>    <input type="checkbox" checked={this.state.manage_knowledge} onChange={this.handleCheckboxknowledgeChange}/>
                      </div>

                      <div className='form-group'>
                      <label>สิทธิ์การเข้าถึง Message :</label>    <input type="checkbox" checked={this.state.manage_message} onChange={this.handleCheckboxmessageChange}/>
                      </div>

                      <div className='form-group'>
                      <label>สิทธิ์การเข้าถึง Equipment :</label>    <input type="checkbox"  checked={this.state.manage_equipment} onChange={this.handleCheckboxequipmentChange}/>
                      </div>

                      <div className='form-group'>
                      <label>สิทธิ์การเข้าถึง Request :</label>    <input type="checkbox" checked={this.state.manage_requipment} onChange={this.handleCheckboxrequipmentChange}/>
                      </div>

                      <div className='form-group'>
                      <label>สิทธิ์การเข้าถึง Problems :</label>    <input type="checkbox"  checked={this.state.manage_problem} onChange={this.handleCheckboxproblemChange}/>
                      </div>

                      <div className='form-group'>
                      <label>สิทธิ์การเข้าถึง Incident :</label>    <input type="checkbox" checked={this.state.manage_incident} onChange={this.handleCheckboxincidentChange}/>
                      </div>

                      <div className='form-group'>
                      <label>สิทธิ์การเข้าถึง Contact :</label>    <input type="checkbox" checked={this.state.manage_contact} onChange={this.handleCheckboxcontactChange}/>
                      </div>

                      <div className='form-group'>
                      <label>สิทธิ์การเข้าถึง Impact :</label>    <input type="checkbox" checked={this.state.manage_impact} onChange={this.handleCheckboximpactChange}/>
                      </div>

                      <div className='form-group'>
                      <label>สิทธิ์การเข้าถึง Priority :</label>    <input type="checkbox" checked={this.state.manage_priority} onChange={this.handleCheckboxpriorityChange}/>
                      </div>

                      <div className='form-group'>
                      <label>สิทธิ์การเข้าถึง Solution :</label>    <input type="checkbox" checked={this.state.manage_solution}  onChange={this.handleCheckboxsolutionChange}/>
                      </div>

                      <div className='form-group'>
                      <label>สิทธิ์การเข้าถึง Report :</label>    <input type="checkbox" checked={this.state.Report} onChange={this.handleCheckboxReportChange}/>
                      </div>




                      <button className='btn btn-primary' > Create</button>
                    </form>

                    <ToastContainer
                      ref={ref => container = ref}
                      className="toast-top-right"
                    />




                  </div>
                </div>
              </div>


        )
      }
    }
    Update_permission.propTypes = {
      id: PropTypes.number,

    };

    export default Update_permission
