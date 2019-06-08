import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import ImageUploader from 'react-images-upload';
import PropTypes from 'prop-types';




import { Button , Form , Col, Row} from 'react-bootstrap';
import axios from 'axios'
import { ToastContainer } from "react-toastr";
import "../../../css/alert.css";
import "../../../css/animate.css";
let container;



    class Update_equipment_register extends Component {
      constructor (props) {
        super(props)
        this.state = {
          equipment_name	: '',
          equipment_type: '',
          username: '',
          department: '',
          detail: '',

          errors: []
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreate= this.handleCreate.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)



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

          equipment_name	: this.state.equipment_name,
          equipment_type: this.state.equipment_type,
          username: this.state.username,
          department:this.state.department,
          detail: this.state.detail,

        }

        axios.put(`/api/equipment_register_update/${this.props.id}`, insertdata)
          .then(response => {
            // redirect to the homepage


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

        axios.get(`/api/equipment_register/${this.props.id}`)
          .then(response => {
            this.setState({
              equipment_name	: response.data[0].equipment_name,
              equipment_type: response.data[0].equipment_type,
              username: response.data[0].username,
              department:response.data[0].department,
              detail: response.data[0].detail,

            })
          })
      }


      render () {


        return (



              <div className='col-lg-12' style={{width:900,padding:40}}>
                <div className='card'>
                  <div className='card-header'>ลงทะเบียนอุปกรณ์</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreate}>
                      <div className='form-group'>
                        <label htmlFor='equipment_name'>ชื่ออุปกรณ์</label>
                        <input
                          id='equipment_name'
                          name='equipment_name'
                          className={`form-control ${this.hasErrorFor('equipment_name') ? 'is-invalid' : ''}`}
                          placeholder="กรอกชื่ออุปกรณ์"
                          type='text'
                          value={this.state.equipment_name}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('equipment_name')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='equipment_type'>ประเภทอุปกรณ์</label>
                        <input
                          id='equipment_type'
                          name='equipment_type'
                          className={`form-control ${this.hasErrorFor('equipment_type') ? 'is-invalid' : ''}`}
                          placeholder="ใส่ชื่อประเภทอุปกรณ์"
                          type="text"
                          value={this.state.equipment_type}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('equipment_type')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='username'>Username</label>
                        <input
                          id='username'
                          type='text'
                          placeholder="กรอก username "
                          className={`form-control ${this.hasErrorFor('username') ? 'is-invalid' : ''}`}
                          name='username'
                          value={this.state.username}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('username')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='department'>สำนักงาน</label>
                        <textarea
                          id='department'
                          type='text'
                          placeholder="กรอกชื่อสำนักงาน"
                          className={`form-control ${this.hasErrorFor('department') ? 'is-invalid' : ''}`}
                          name='department'
                          rows="2"
                          value={this.state.department}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('department')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='detail'>รายละเอียด</label>
                        <textarea
                          id='detail'
                          type='text'
                          placeholder="กรอก รายละเอียด"
                          className={`form-control ${this.hasErrorFor('detail') ? 'is-invalid' : ''}`}
                          name='detail'
                          rows="5"
                          value={this.state.detail}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('detail')}


                      </div>




                      <button className='btn btn-primary' >Create</button>
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
    Update_equipment_register.propTypes = {
      id: PropTypes.number,

    };

    export default Update_equipment_register
