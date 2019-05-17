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



    class Add_contact extends Component {
      constructor (props) {
        super(props)
        this.state = {
          contact_name	: '',
          contact_phone: '',
          contact_email: '',
          contact_address: '',
          contact_detail: '',
          user_id: '',
          getuser:[],
          errors: []
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreate= this.handleCreate.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)


      }


      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSelectChange(event) {
    this.setState({user_id: event.target.value});
  }


      handleCreate (event) {

        event.preventDefault()

        const { history } = this.props

        const insertdata = {

          contact_name: this.state.contact_name,
          contact_phone: this.state.contact_phone,
          contact_email: this.state.contact_email,
          contact_address: this.state.contact_address,
          contact_detail: this.state.contact_detail,
          user_id: this.state.user_id,
        }

        axios.post('/api/contact', insertdata)
          .then(response => {
            // redirect to the homepage
            this.setState({
              contact_name: '',
              contact_phone: '',
              contact_email: '',
              contact_address: '',
              contact_detail: '',
              user_id: '',
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
            <div style={{paddingLeft: '200' ,paddingRight: '5'}}>
              <div className='col-md-12'>
                <div className='card'>
                  <div className='card-header'>เพิ่มผู้ติดต่อ</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreate}>
                      <div className='form-group'>
                        <label htmlFor='contact_name'>ชื่อผู้ติดต่อ</label>
                        <input
                          id='contact_name'
                          name='contact_name'
                          className={`form-control ${this.hasErrorFor('contact_name') ? 'is-invalid' : ''}`}
                          placeholder="กรอกชื่อผู้ติดต่อ"
                          type='text'
                          value={this.state.contact_name}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('contact_name')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='contact_phone'>เบอร์โทรศัพท์</label>
                        <input
                          id='contact_phone'
                          name='contact_phone'
                          className={`form-control ${this.hasErrorFor('contact_phone') ? 'is-invalid' : ''}`}
                          placeholder="กรอกเบอร์โทรศัพท์"
                          type="text"
                          value={this.state.contact_phone}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('contact_phone')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='contact_email'>อีเมลย์</label>
                        <input
                          id='contact_email'
                          type='text'
                          placeholder="กรอก E-mail "
                          className={`form-control ${this.hasErrorFor('contact_email') ? 'is-invalid' : ''}`}
                          name='contact_email'
                          value={this.state.contact_email}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('contact_email')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='contact_address'>ที่อยู่</label>
                        <textarea
                          id='contact_address'
                          type='text'
                          placeholder="ใส่ที่อยู่ผู้ติดต่อ"
                          className={`form-control ${this.hasErrorFor('contact_address') ? 'is-invalid' : ''}`}
                          name='contact_address'
                          rows="2"
                          value={this.state.contact_address}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('contact_address')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='contact_detail'>รายละเอียด</label>
                        <textarea
                          id='contact_detail'
                          type='text'
                          placeholder="กรอก รายละเอียดผู้ติดต่อ"
                          className={`form-control ${this.hasErrorFor('contact_detail') ? 'is-invalid' : ''}`}
                          name='contact_detail'
                          rows="5"
                          value={this.state.contact_detail}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('contact_detail')}


                      </div>

                      <label htmlFor='permission'>Username ผู้ติดต่อ</label>

                      <div class="input-group mb-3">

                        <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">เลือก Username</label>


                        </div>
                        <select class="custom-select" value={this.state.user_id} onChange={this.handleSelectChange} className={`form-control ${this.hasErrorFor('user_id') ? 'is-invalid' : ''}`}>
                        <option value="" >Choose...</option>



                          {getuser.map(getuser => (
                            <option value={getuser.id}>{getuser.name}</option>
                          ))}

                        </select>
                        {this.renderErrorFor('user_id')}

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

    export default Add_contact
