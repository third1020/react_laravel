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



    class Add_message extends Component {
      constructor (props) {
        super(props)
        this.state = {
          message_title: '',
          message_message: '',
          message_from: sessionStorage.getItem("id"),
          message_to: '',

          getuser: [],
          errors: []
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreate= this.handleCreate.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.onDrop = this.onDrop.bind(this)

        this.state.message_from = sessionStorage.getItem("id");



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

          message_title: this.state.message_title,
          message_message: this.state.message_message,
          message_from: this.state.message_from,
          message_to: this.state.message_to,

        }

        axios.post('/api/message', insertdata)
          .then(response => {
            // redirect to the homepage
            this.setState({
              message_title: '',
              message_message: '',
              message_from: '',
              message_to: '',

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
        axios.get('/api/queryuser').then(response => {
          this.setState({
            getuser: response.data,

          })
        })

      }

      render () {
        const { getuser } = this.state



        return (

          <div className='container py-4' >
            <div style={{paddingLeft: '10' ,paddingRight: '5'}}>
              <div className='col-md-12'>
                <div className='card'>
                  <div className='card-header'>เพิ่มข้อความ</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreate}>
                      <div className='form-group'>
                        <label htmlFor='message_title'>หัวเรื่องข้อความ</label>
                        <input
                          id='message_title'
                          name='message_title'
                          className={`form-control ${this.hasErrorFor('message_title') ? 'is-invalid' : ''}`}
                          placeholder="กรอกชื่อผู้ใช้"
                          type='text'
                          value={this.state.message_title}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('message_title')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='message_message'>รายละเอียดข้อความ</label>
                        <textarea
                          id='message_message'
                          type='text'
                          placeholder="กรอกรายละเอียด"
                          className={`form-control ${this.hasErrorFor('message_message') ? 'is-invalid' : ''}`}
                          name='message_message'
                          rows="5"
                          value={this.state.message_message}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('message_message')}
                      </div>


                      <label htmlFor='message_to'>ส่งข้อความถึง</label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        {  this.state.message_to == '' ? (
                            <label class="input-group-text" for="inputGroupSelect01" style={{color:'red'}}>เลือกชื่อผู้ที่ต้องการส่งข้อความถึง</label>
                        ):<label class="input-group-text" for="inputGroupSelect01">ส่งข้อความถึงคุณ</label>}
                        </div>
                        <select class="custom-select" name="message_to" value={this.state.message_to} onChange={this.handleSelectChange} className={`form-control ${this.hasErrorFor('message_to') ? 'is-invalid' : ''}`}>
                        <option value="" >Choose...</option>
                          {getuser.map(getuser => (
                            <option value={getuser.id}>{getuser.name}</option>
                          ))}
                        </select>
                          {this.renderErrorFor('message_to')}
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

    export default Add_message
