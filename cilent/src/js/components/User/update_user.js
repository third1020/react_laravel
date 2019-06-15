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



    class Update_user extends Component {
      constructor (props) {
        super(props)
        this.state = {
          checkboxpassword : '',
          username: '',
          password: '',
          email: '',
          is_block: 'block',
          user_right: 'admin',
          image_show: 'default',
          image_id: '1',
          client_id: '1',
          permission_id: '1',
          errors: []
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.handleCreate= this.handleCreate.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
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

      handleSelectChange (event) {
        console.log(event.target.value)
        this.setState({
          checkboxpassword: !event.target.value
        })
      }


      handleCreate (event) {
        event.preventDefault()
        const { history } = this.props
        const insertdata = {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          is_block: this.state.is_block,
          user_right: this.state.user_right,
          image_show: this.state.image_show,
          image_id: this.state.image_id,
          client_id: this.state.client_id,
          permission_id: this.state.permission_id,

        }


        axios.put(`${this.props.updateurl}`, insertdata)
          .then(response => {
            Swal.fire(
                'Successfully',
                'Update data successfully ',
                'success'
            )

          })
          .catch(error => {
            console.log(error.response.data.errors);

            Swal.fire(
                'Errors',
                'check the value of a form field',
                'error'
            )
            this.setState({
              errors: error.response.data.errors
            })
      });
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

      componentDidMount () {
        axios.get(`${this.props.updateurl}`).then(res => {
          this.setState({
            username: res.data.user.username,
            email: res.data.user.email,
            is_block: res.data.user.is_block,
            user_right: res.data.user.user_right,
            image_show: res.data.user.image_show,
            image_id: res.data.user.image_id,
            client_id: res.data.user.client_id,
            permission_id: res.data.user.permission_id,
          })

          console.log(res.data.user);

        }).catch(er => {
          console.log(er);
        })
      }

      render () {

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

                      {this.state.checkboxpassword == false ?
                         (<Col sm="12" md="6" className="mb-3">
                           <strong className="text-muted d-block mb-2">Change Password</strong>
                           <fieldset>
                             <FormCheckbox
                             name="checkboxpassword"
                             onChange={this.handleSelectChange}
                             value={this.state.checkboxpassword}>
                             Mark for Change
                             </FormCheckbox>
                           </fieldset>
                         </Col>) :

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
                       }


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
                         value={this.state.permission_id}
                         onChange={this.handleFieldChange}>
                        <option value="1">1</option>

                      </FormSelect>
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
                      <Col md="6" className="form-group">
                        <label htmlFor="feInputState">Image</label>
                        <FormSelect id="feInputState"
                                    name='image_id'
                                    value={this.state.image_id}
                                    onChange={this.handleFieldChange}>
                          <option value="1">1</option>

                        </FormSelect>
                      </Col>

                      <Col md="12" className="form-group">

                      </Col>
                    </Row>
                    <Button type="submit">Update Account</Button>
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

    export default Update_user
