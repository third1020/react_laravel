import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import ImageUploader from 'react-images-upload';
import {RadioGroup, Radio} from 'react-radio-group';




import { Button , Form , Col, Row} from 'react-bootstrap';
import axios from 'axios'
import { ToastContainer } from "react-toastr";
import "../../../css/alert.css";
import "../../../css/animate.css";
let container;



    class Add_priority extends Component {
      constructor (props) {
        super(props)
        this.state = {
          priority_name	: '',
          priority_status: '1',


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
   this.setState({priority_status: value});
 }




      handleCreate (event) {


        event.preventDefault()

        const { history } = this.props

        const insertdata = {

          priority_name	: this.state.priority_name,
          priority_status: this.state.priority_status


        }

        axios.post('/api/priority', insertdata)
          .then(response => {
            // redirect to the homepage
            this.setState({
              priority_name	: '',

              errors: []
            })

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


      }

      render () {


        return (



              <div className='col-jg-12'>
                <div className='card'>
                  <div className='card-header'>เพิ่มความสำคัญ</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreate}>
                      <div className='form-group'>
                        <label htmlFor='priority_name'>ชื่อความสำคัญ</label>
                        <input
                          id='priority_name'
                          name='priority_name'
                          className={`form-control ${this.hasErrorFor('priority_name') ? 'is-invalid' : ''}`}
                          placeholder="กรอกชื่อความสำคัญ"
                          type='text'
                          value={this.state.priority_name}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('priority_name')}

                      </div>
                      <div>
                      <label>เลือกระดับความสำคัญ</label>

                      <RadioGroup
                        name="fruit"
                        selectedValue={this.state.priority_status}
                        onChange={this.handleRadioChange}>
                      <label style={{paddingLeft: 10}}>
                       <Radio value="1" />ความสำคัญต่ำ
                      </label>
                      <label style={{paddingLeft: 10}}>
                        <Radio value="2" />ความสำคัญปานกลาง
                      </label>
                       <label style={{paddingLeft: 10}}>
                         <Radio value="3" />ความสำคัญสูง
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

    export default Add_priority
