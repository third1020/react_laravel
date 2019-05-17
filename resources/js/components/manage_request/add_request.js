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



    class Add_request extends Component {
      constructor (props) {
        super(props)
        this.state = {
          request_tital: '',
          request_detail: '',
          equipment_id: '',

          getequipment: [],
          errors: []
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreate= this.handleCreate.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.onDrop = this.onDrop.bind(this)





      }



      onDrop(pictureFiles, pictureDataURLs) {
		this.setState({
            image: this.state.image.concat(pictureDataURLs),
        });
	}

      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSelectChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


      handleCreate (event) {


        event.preventDefault()



        const { history } = this.props

        const insertdata = {

          request_tital: this.state.request_tital,
          request_detail: this.state.request_detail,
          equipment_id: this.state.equipment_id,

        }

        axios.post('/api/request', insertdata)
          .then(response => {
            // redirect to the homepage
            this.setState({
              request_tital: '',
              request_detail: '',
              equipment_id: '',

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
        axios.get('/api/queryequipment').then(response => {
          this.setState({
            getequipment: response.data,

          })
        })

      }

      render () {
        const { getequipment } = this.state



        return (

          <div className='container py-4' >
            <div style={{paddingLeft: '200' ,paddingRight: '5'}}>
              <div className='col-md-12'>
                <div className='card'>
                  <div className='card-header'>เพิ่มความต้องการ</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreate}>
                      <div className='form-group'>
                        <label htmlFor='request_tital'>ชื่อความต้องการ</label>
                        <input
                          id='request_tital'
                          name='request_tital'
                          className={`form-control ${this.hasErrorFor('request_tital') ? 'is-invalid' : ''}`}
                          placeholder="กรอกชื่อความต้องการ"
                          type='text'
                          value={this.state.request_tital}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('request_tital')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='request_detail'>รายละเอียด</label>
                        <textarea
                          id='request_detail'
                          type='text'
                          placeholder="กรอกรายละเอียด"
                          className={`form-control ${this.hasErrorFor('request_detail') ? 'is-invalid' : ''}`}
                          name='request_detail'
                          rows="5"
                          value={this.state.request_detail}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('request_detail')}
                      </div>


                      <label htmlFor='equipment_id'>อุปกรณ์</label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        {  this.state.equipment_id == '' ? (
                            <label class="input-group-text" for="inputGroupSelect01" style={{color:'red'}}>เลือกอุปกรณ์</label>
                        ):<label class="input-group-text" for="inputGroupSelect01">อปกรณ์ชื่อ</label>}
                        </div>
                        <select class="custom-select" name="equipment_id" value={this.state.equipment_id} onChange={this.handleSelectChange} className={`form-control ${this.hasErrorFor('equipment_id') ? 'is-invalid' : ''}`}>
                        <option value="" >Choose...</option>
                          {getequipment.map(getequipment => (
                            <option value={getequipment.id}>{getequipment.equipment_name}</option>
                          ))}
                        </select>
                          {this.renderErrorFor('equipment_id')}
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

    export default Add_request
