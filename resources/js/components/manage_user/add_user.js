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



    class Add_user extends Component {
      constructor (props) {
        super(props)
        this.state = {
          username: '',
          password: '',
          Name_lastname: '',
          ID_Card: '',
          Phone_Number: '',
          Email: '',
          permission: '',
          image: [],
          getpermission: [''],
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
    this.setState({permission: event.target.value});
  }


      handleCreate (event) {

        event.preventDefault()



        const { history } = this.props

        const insertdata = {

          username: this.state.username,
          password: this.state.password,
          Name_lastname: this.state.Name_lastname,
          ID_Card: this.state.ID_Card,
          Phone_Number: this.state.Phone_Number,
          Email: this.state.Email,
          permission: this.state.permission,
          image: this.state.image[this.state.image.length - 1]
        }

        axios.post('/api/user_create', insertdata)
          .then(response => {
            // redirect to the homepage
            this.setState({
              username: '',
              password: '',
              Name_lastname: '',
              ID_Card: '',
              Phone_Number: '',
              Email: '',
              permission: '',

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
        axios.get('/api/permission').then(response => {
          this.setState({
            getpermission: response.data,

          })
        })

      }

      render () {
        const { getpermission } = this.state



        return (

          <div className='container py-4' >
            <div style={{paddingLeft: '10' ,paddingRight: '5'}}>
              <div className='col-md-12 col-lg-12'>
                <div className='card'>
                  <div className='card-header'>เพิ่มผู้ใช้งาน</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreate}>
                      <div className='form-group'>
                        <label htmlFor='username'>ชื่อผู้ใช้</label>
                        <input
                          id='username'
                          name='username'
                          className={`form-control ${this.hasErrorFor('username') ? 'is-invalid' : ''}`}
                          placeholder="กรอกชื่อผู้ใช้"
                          type='text'
                          value={this.state.username}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('username')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='password'>รหัสผ่าน</label>
                        <input
                          id='password'
                          name='password'
                          className={`form-control ${this.hasErrorFor('password') ? 'is-invalid' : ''}`}
                          placeholder="กรอกระหัสผ่าน"
                          type="password"
                          value={this.state.password}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('password')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='FullName'>ชื่อ-นามสกุล</label>
                        <input
                          id='Name_lastname'
                          type='text'
                          placeholder="กรอก ชื่อ-นามสกุล"
                          className={`form-control ${this.hasErrorFor('Name_lastname') ? 'is-invalid' : ''}`}
                          name='Name_lastname'
                          value={this.state.Name_lastname}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('Name_lastname')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='ID_Card'>รหัสบัตรประชาชน</label>
                        <input
                          id='ID_Card'
                          type='text'
                          placeholder="กรอกรหัสบัตรประชาชน 13 หลัก"
                          className={`form-control ${this.hasErrorFor('ID_Card') ? 'is-invalid' : ''}`}
                          name='ID_Card'
                          value={this.state.ID_Card}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('ID_Card')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='Phone_Number'>หมายเลขโทรศัพท์มือถือ</label>
                        <input
                          id='Phone_Number'
                          type='text'
                          placeholder="กรอก เบอร์โทรศัพท์"
                          className={`form-control ${this.hasErrorFor('Phone_Number') ? 'is-invalid' : ''}`}
                          name='Phone_Number'
                          value={this.state.Phone_Number}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('Phone_Number')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='Email'>อีเมลย์</label>
                        <input
                          id='Email'
                          type='text'
                          placeholder="กรอก อีเมลย์"
                          className={`form-control ${this.hasErrorFor('Email') ? 'is-invalid' : ''}`}
                          name='Email'
                          value={this.state.Email}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('Email')}



                      </div>

                      <label htmlFor='permission'>สิทธิ์การเข้าถึง</label>

                      <div class="input-group mb-3">

                        <div class="input-group-prepend">
                        {  this.state.permission == '' ? (


                            <label class="input-group-text" for="inputGroupSelect01" style={{color:'red'}}>เลือกสิทธิ์ผู้ใช้งาน</label>

                        ):<label class="input-group-text" for="inputGroupSelect01">สิทธิ์ผู้ใช้งาน</label>}


                        </div>
                        <select class="custom-select" value={this.state.permission} onChange={this.handleSelectChange} className={`form-control ${this.hasErrorFor('permission') ? 'is-invalid' : ''}`}>
                        <option value="">Choose...</option>



                          {getpermission.map(getpermission => (
                            <option value={getpermission.id}>{getpermission.permission_name}</option>
                          ))}

                        </select>

                          {this.renderErrorFor('permission')}



                      </div>




                      <div className='form-group'>

                      <label htmlFor='image'>เลือกรูปภาพโปรไฟล์</label>

                      <input
                        className={`form-control ${this.hasErrorFor('image') ? 'is-invalid' : ''}`}
                        hidden
                      />

                      <ImageUploader
                  type="file"
                	withIcon={true}
                  value={this.state.image}
                	buttonText='เลือกรูปภาพ'
                	onChange={this.onDrop}
                	imgExtension={['.jpg', '.gif', '.png', '.gif']}
                	maxFileSize={520215}
                  singleImage={true}
                  label='ไฟล์ขนาดต้องไม่เกิน 500 kb, สกุลไฟล์: jpg,png'
                  withPreview={true}
                  fileSizeError="ขนาดไฟล์ใหญ่เกินไป"
                  fileTypeError="ประเภทไฟล์ไม่ถูกต้อง"

                      />

                      {this.renderErrorFor('image')}






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

    export default Add_user
