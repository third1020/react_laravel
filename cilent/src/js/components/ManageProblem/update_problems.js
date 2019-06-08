import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import ImageUploader from 'react-images-upload';
import {RadioGroup, Radio} from 'react-radio-group';
import PropTypes from 'prop-types';




import { Button , Form , Col, Row} from 'react-bootstrap';
import axios from 'axios'
import { ToastContainer } from "react-toastr";
import "../../../css/alert.css";
import "../../../css/animate.css";
let container;



    class Update_problems extends Component {
      constructor (props) {
        super(props)
        this.state = {
          problems_tital	: '',
          problems_detail: '',
          problems_status: '0',

          equipment_id: '',
          get_equipment_id: [],

          contact_id: '',
          get_contact_id: [],

          impact_id: '',
          get_impact_id: [],

          priority_id: '',
          get_priority_id: [],


          errors: []
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreate= this.handleCreate.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
        this.handleRadioChange = this.handleRadioChange.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)




      }


      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleRadioChange(value) {
        this.setState({problems_status: value});
      }

       handleSelectChange(event) {
         this.setState({[event.target.name]: event.target.value});
      }




      handleCreate (event) {


        event.preventDefault()

        const { history } = this.props

        const insertdata = {

          problems_tital	: this.state.problems_tital,
          problems_detail: this.state.problems_detail,
          problems_status: this.state.problems_status,
          equipment_id: this.state.equipment_id,
          contact_id: this.state.contact_id,
          impact_id: this.state.impact_id,
          priority_id: this.state.priority_id


        }

        axios.put(`/api/problems_update/${this.props.id}`, insertdata)
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

        axios.get('/api/queryequipment').then(response => {
          this.setState({
            get_equipment_id: response.data,

          })
        })

        axios.get('/api/querycontact').then(response => {
          this.setState({
            get_contact_id: response.data,

          })
        })

        axios.get('/api/queryimpact').then(response => {
          this.setState({
            get_impact_id: response.data,

          })
        })

        axios.get('/api/querypriority').then(response => {
          this.setState({
            get_priority_id: response.data,

          })
        })

        axios.get(`/api/problems/${this.props.id}`).then(response => {
          this.setState({

            problems_tital	: response.data[0].problems_tital,
            problems_detail: response.data[0].problems_detail,
            problems_status: response.data[0].problems_status,
            equipment_id: response.data[0].equipment_id,
            contact_id: response.data[0].contact_id,
            impact_id: response.data[0].impact_id,
            priority_id: response.data[0].priority_id


          })
        })

      }

      render () {
        const { get_equipment_id,get_contact_id,get_impact_id,get_priority_id } = this.state


        return (



              <div className='col-lg-12' style={{width:900,padding:40}}>
                <div className='card'>
                  <div className='card-header'>เพิ่มปัญหา</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreate}>
                      <div className='form-group'>
                        <label htmlFor='problems_tital'>ชื่อปัญหา</label>
                        <input
                          id='problems_tital'
                          name='problems_tital'
                          className={`form-control ${this.hasErrorFor('problems_tital') ? 'is-invalid' : ''}`}
                          placeholder="กรอกชื่อปัญหา"
                          type='text'
                          value={this.state.problems_tital}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('problems_tital')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='problems_detail'>รายละเอียด</label>
                        <textarea
                          id='problems_detail'
                          type='text'
                          placeholder="กรอกรายละเอียด"
                          className={`form-control ${this.hasErrorFor('problems_detail') ? 'is-invalid' : ''}`}
                          name='problems_detail'
                          rows="5"
                          value={this.state.problems_detail}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('problems_detail')}
                      </div>


                      <div>
                      <label>เลือกสถานะ</label>
                      <RadioGroup
                        name="fruit"
                        selectedValue={this.state.problems_status}
                        onChange={this.handleRadioChange}>
                      <label style={{paddingLeft: 10}}>
                       <Radio value="0" />0
                      </label>
                      <label style={{paddingLeft: 10}}>
                        <Radio value="1" />1
                      </label>
                      </RadioGroup>
                      </div>


                      <label htmlFor='permission'>ปัญหาที่เกิดกับอุปกรณ์</label>
                      <div class="input-group mb-3">
                         <div class="input-group-prepend">
                        {  this.state.equipment_id == '' ? (
                            <label class="input-group-text" style={{width:'190',color:'red'}} for="inputGroupSelect01" >เลือกชื่ออุปกรณ์ที่มีปัญหา</label>

                        ):<label class="input-group-text" style={{width:'190'}} for="inputGroupSelect01">ชื่ออุปกรณ์ที่มีปัญหา</label>}
                         </div>
                        <select class="custom-select" name='equipment_id' value={this.state.equipment_id} onChange={this.handleSelectChange} className={`form-control ${this.hasErrorFor('equipment_id') ? 'is-invalid' : ''}`}>


                          {get_equipment_id.map(get_equipment_id => (
                            <option value={get_equipment_id.id}>{get_equipment_id.equipment_name}</option>
                          ))}
                        </select>
                        {this.renderErrorFor('equipment_id')}
                      </div>


                      <div class="input-group mb-3">
                         <div class="input-group-prepend">
                        {  this.state.contact_id == '' ? (
                            <label class="input-group-text" style={{width:'190',color:'red'}} for="inputGroupSelect01" >เลือกชื่อผู้ติดต่อ</label>

                        ):<label class="input-group-text" style={{width:'190'}} for="inputGroupSelect01">ผู้ติดต่อชื่อ</label>}
                         </div>
                        <select class="custom-select" name='contact_id' value={this.state.contact_id} onChange={this.handleSelectChange} className={`form-control ${this.hasErrorFor('contact_id') ? 'is-invalid' : ''}`}>


                          {get_contact_id.map(get_contact_id => (
                            <option value={get_contact_id.id}>{get_contact_id.contact_name}</option>
                          ))}
                        </select>
                        {this.renderErrorFor('contact_id')}
                      </div>


                      <div class="input-group mb-3">
                         <div class="input-group-prepend">
                        {  this.state.impact_id == '' ? (
                            <label class="input-group-text" style={{width:'190',color:'red'}} for="inputGroupSelect01" >เลือกชื่อผลกระทบ</label>

                        ):<label class="input-group-text" style={{width:'190'}} for="inputGroupSelect01">ผลกระทบชื่อ</label>}
                         </div>
                        <select class="custom-select" name='impact_id' value={this.state.impact_id} onChange={this.handleSelectChange} className={`form-control ${this.hasErrorFor('impact_id') ? 'is-invalid' : ''}`}>


                          {get_impact_id.map(get_impact_id => (
                            <option value={get_impact_id.id}>{get_impact_id.impact_name}</option>
                          ))}
                        </select>
                        {this.renderErrorFor('impact_id')}
                      </div>


                      <div class="input-group mb-3">
                         <div class="input-group-prepend">
                        {  this.state.priority_id == '' ? (
                            <label class="input-group-text" style={{width:'190',color:'red'}} for="inputGroupSelect01" >เลือกระดับความสำคัญ</label>

                        ):<label class="input-group-text" style={{width:'190'}} for="inputGroupSelect01">ระดับความสำคัญ</label>}
                         </div>
                        <select class="custom-select" name='priority_id' value={this.state.priority_id} onChange={this.handleSelectChange} className={`form-control ${this.hasErrorFor('priority_id') ? 'is-invalid' : ''}`}>


                          {get_priority_id.map(get_priority_id => (
                            <option value={get_priority_id.id}>{get_priority_id.priority_name}</option>
                          ))}
                        </select>
                        {this.renderErrorFor('priority_id')}
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
    Update_problems.propTypes = {
      id: PropTypes.number,

    };

    export default Update_problems
