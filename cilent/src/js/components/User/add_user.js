import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import ImageUploader from 'react-images-upload';
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button,
  Container
} from "shards-react";
import Swal from 'sweetalert2'
import axios from 'axios'
import { ToastContainer } from "react-toastr";
import "../../../css/alert.css";
import "../../../css/animate.css";
import HocValidateUser from "../../../HocValidateUser";
let container;



    class Add_user extends Component {
      constructor (props) {
        super(props)
        this.state = {
          username: '',
          password: '',
          email: '',
          is_block: 'block',
          user_right: 'admin',
          image_show: 'default',
          image_id: '1',
          image: [],
          client_id: '1',
          permission_id: '1',
          getpermission: [],
          errors: []
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreate= this.handleCreate.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
        this.onChangeUploadFile = this.onChangeUploadFile.bind(this)
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

      onChangeUploadFile(event) {
        this.setState({
             image: event.target.files[0]

           })
           console.log(this.state.selectedFile);
      }


      handleCreate (event) {
        event.preventDefault()
        const { history } = this.props


        const formData = {
          image: this.state.image[this.state.image.length-1],
          client_id : this.state.client_id
        }

        console.log(this.state.client_id);

      axios.post('/api/uploadImage',formData)
      .then(res => {

        const insertdata = {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          is_block: this.state.is_block,
          user_right: this.state.user_right,
          image_show: this.state.image_show,
          image_id: res.data.image_id,
          client_id: this.state.client_id,
          permission_id: this.state.permission_id,

        }
        axios.post('/api/user/store', insertdata)
  .then(response => {
    Swal.fire(
        'Successfully',
        'Add data successfully ',
        'success'
    )

    this.setState({
      username: '',
      password: '',
      email: '',
      is_block: '',
      user_right: '',
      image_show: '',
      image_id: '',
      client_id: '',
      permission_id: '',
      errors: []
    })
  })
  .catch(error => {
    this.setState({
      errors: error.response.data.errors
    })
    console.log(error.response.data.errors);

    Swal.fire(
        'Errors',
        'check the value of a form field',
        'error'
    )

});

      })
      .catch(err => {
        console.log(err);
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

      componentDidMount(){

        axios.get('api/permission/index').then(res => {
          this.setState({
            getpermission : res.data
          })
        }).catch(err => {
          console.log(err);
          this.setState({
            getpermission : []
          })
        })

      }

      render () {
        const { getpermission } = this.state
        return (

      <div style={{paddingTop:"30px"}}>
        <Container>
          <ListGroup flush>
            <ListGroupItem className="p-3">
              <Row>
                <Col>
                  <Form onSubmit={this.handleCreate}>
                    <Row form>

                      <Col md="6" className="form-group">

                        <label htmlFor="feEmailAddress">Username</label>
                        <FormInput
                        id='username'
                        name='username'
                        className={`form-control ${this.hasErrorFor('username') ? 'is-invalid' : ''}`}
                        placeholder="กรอกชื่อผู้ใช้"
                        type='text'
                        value={this.state.username}
                        onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('username')}
                      </Col>
                      <Col md="6">
                        <label htmlFor="fePassword">Password</label>
                        <FormInput
                        id='password'
                        name='password'
                        className={`form-control ${this.hasErrorFor('password') ? 'is-invalid' : ''}`}
                        placeholder="กรอกรหัสผ่าน"
                        type='password'
                        value={this.state.password}
                        onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('password')}
                      </Col>
                    </Row>
                    <Row form>
                    <Col md="6">
                    <FormGroup>
                      <label htmlFor="feInputEmail">Email</label>
                      <FormInput
                      id='email'
                      className={`form-control ${this.hasErrorFor('email') ? 'is-invalid' : ''}`}
                      placeholder="กรอกอีเมล"
                      type='email'
                      name='email'
                      value={this.state.email}
                      onChange={this.handleFieldChange}
                      />
                      {this.renderErrorFor('email')}
                    </FormGroup>
                    </Col>
                    </Row>
                    <Row form>
                    <Col md="4" className="form-group">
                      <label htmlFor="feInputState">Block</label>
                      <FormSelect
                      id="feInputState"
                      name='is_block'
                      value={this.state.is_block}
                      onChange={this.handleFieldChange}>

                        <option value="block" >block</option>
                        <option value="unblock">unblock</option>
                      </FormSelect>

                    </Col>

                    <Col md="4" className="form-group">
                      <label htmlFor="feInputState">User Right</label>
                      <FormSelect
                          id="feInputState"
                          name='user_right'
                          value={this.state.user_right}
                          onChange={this.handleFieldChange}>
                        <option value="admin">admin</option>
                        <option value="staff">staff</option>
                      </FormSelect>
                    </Col>

                    <Col md="4" className="form-group">
                      <label htmlFor="feInputState">Permission</label>
                      <FormSelect
                         id="feInputState"
                         name='permission_id'
                         className={`form-control ${this.hasErrorFor('permission_id') ? 'is-invalid' : ''}`}
                         value={this.state.permission_id}
                         onChange={this.handleFieldChange}>

                         {getpermission.map(getpermission => (
                            <option value={getpermission.id}>{getpermission.permission_name}</option>
                          ))}
                      </FormSelect>
                      {this.renderErrorFor('permission_id')}
                    </Col>
                    </Row>

                    <Row form>
                      <Col md="6" className="form-group">
                      <label htmlFor="feInputState">Image Show</label>
                      <FormSelect
                         id="feInputState"
                         name='image_show'
                         value={this.state.image_show}
                         onChange={this.handleFieldChange}>
                      <option value="default">default</option>
                      <option value="image1">image1</option>
                      <option value="image2">image2</option>
                      </FormSelect>
                      </Col>


                      <Col md="12" className="form-group">
                        <label htmlFor="feInputState">Image</label>
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
                	maxFileSize={2020215}
                  singleImage={true}
                  label='ไฟล์ขนาดต้องไม่เกิน 2 MB, สกุลไฟล์: jpg,png,gif'
                  withPreview={true}
                  fileSizeError="ขนาดไฟล์ใหญ่เกินไป"
                  fileTypeError="ประเภทไฟล์ไม่ถูกต้อง"
                      />
                      {this.renderErrorFor('image')}

                      </div>
                      </Col>

                    </Row>
                    <Button type="submit">Create New Account</Button>
                  </Form>
                </Col>

              </Row>
            </ListGroupItem>
          </ListGroup>
        </Container>
      </div>





        )
      }
    }

    export default Add_user
