import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import ImageUploader from 'react-images-upload';




import { Button , Form , Col, Row} from 'react-bootstrap';
import axios from 'axios'
import { ToastContainer } from "react-toastr";
import "../../../css/alert.css";
import "../../../css/animate.css";
let container;



    class Add_equipment_type extends Component {
      constructor (props) {
        super(props)
        this.state = {
          type_name	: '',


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

          type_name	: this.state.type_name,


        }

        axios.post('/api/equipment_type', insertdata)
          .then(response => {
            // redirect to the homepage
            this.setState({
              type_name	: '',

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


          <div className='container py-4' >
            <div style={{paddingLeft: '200' ,paddingRight: '5'}}>
              <div className='col-md-12'>
                <div className='card'>
                  <div className='card-header'>เพิ่มผู้ติดต่อ</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreate}>
                      <div className='form-group'>
                        <label htmlFor='type_name'>ชื่อประเภทอุปกรณ์</label>
                        <input
                          id='type_name'
                          name='type_name'
                          className={`form-control ${this.hasErrorFor('type_name') ? 'is-invalid' : ''}`}
                          placeholder="กรอกชื่อประเภทอุปกรณ์"
                          type='text'
                          value={this.state.type_name}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('type_name')}

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
            </div>
          </div>

        )
      }
    }

    export default Add_equipment_type
