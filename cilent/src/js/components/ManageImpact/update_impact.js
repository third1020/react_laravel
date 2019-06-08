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



    class Update_impact extends Component {
      constructor (props) {
        super(props)
        this.state = {
          impact_name	: '',
          impact_value: '0',


          errors: []
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreate= this.handleCreate.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
        this.handleRadioChange = this.handleRadioChange.bind(this)




      }


      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleRadioChange(value) {
   this.setState({impact_value: value});
 }




      handleCreate (event) {


        event.preventDefault()

        const { history } = this.props

        const insertdata = {

          impact_name	: this.state.impact_name,
          impact_value: this.state.impact_value


        }

        axios.put(`/api/impact_update/${this.props.id}`, insertdata)
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

        axios.get(`/api/impact/${this.props.id}`)
          .then(response => {
            this.setState({


              impact_name	: response.data[0].impact_name,
              impact_value: response.data[0].impact_value


            })

          })


      }

      render () {


        return (



                <div className='col-lg-12' style={{width:900,padding:40}}>
                <div className='card'>
                  <div className='card-header'>เพิ่มระดับผลกระทบ</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreate}>
                      <div className='form-group'>
                        <label htmlFor='impact_name'>ชื่อผลกระทบ</label>
                        <input
                          id='impact_name'
                          name='impact_name'
                          className={`form-control ${this.hasErrorFor('impact_name') ? 'is-invalid' : ''}`}
                          placeholder="กรอกชื่อประเภทอุปกรณ์"
                          type='text'
                          value={this.state.impact_name}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('impact_name')}

                      </div>
                      <div>
                      <label>เลือกระดับผลกระทบ</label>

                      <RadioGroup
                        name="fruit"
                        selectedValue={this.state.impact_value}
                        onChange={this.handleRadioChange}>
                      <label style={{paddingLeft: 10}}>
                       <Radio value="1"/>ผลกระทบต่ำ
                      </label>
                      <label style={{paddingLeft: 10}}>
                        <Radio value="2"/>ผลกระทบปานกลาง
                      </label>
                       <label style={{paddingLeft: 10}}>
                         <Radio value="3"/>ผลกระทบสูง
                       </label>
                      </RadioGroup>

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

    Update_impact.propTypes = {
      id: PropTypes.number,

    };


    export default Update_impact
