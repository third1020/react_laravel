import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
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

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

    class Add_RequestGeneral extends Component {
      constructor (props) {
        super(props)
        this.state = {
          client_id  : this.props.client_id,
          name  : '',
          status  : '',
          auditor_user_id  : this.props.client_id,
          approval_user_id  : this.props.client_id,
          audit_timestamp  : dateTime,
          approval_timestamp  : dateTime,

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
                  client_id  : this.props.client_id,
                  name  : this.state.name,
                  status  : this.state.status,
                  auditor_user_id  : this.props.client_id,
                  approval_user_id  : this.props.client_id,
                  audit_timestamp  : dateTime,
                  approval_timestamp  : dateTime


                }
                console.log(insertdata);

        axios.post('/api/requestgeneral/store', insertdata)
  .then(response => {
    Swal.fire(
        'Successfully',
        'Add data successfully ',
        'success'
    )

    this.setState({

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

                    <Col md="12" className="form-group">

                      <label htmlFor="feEmailAddress">Name</label>
                      <FormInput
                      id='name'
                      name='name'
                      className={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                      placeholder="กรอกชื่อผู้ใช้"
                      type='text'
                      value={this.state.name}
                      onChange={this.handleFieldChange}
                      />
                      {this.renderErrorFor('name')}
                    </Col>
                  </Row>


                      <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="feInputState">Status</label>
                      <FormSelect
                         id="status"
                         name='status'
                         className={`form-control ${this.hasErrorFor('status') ? 'is-invalid' : ''}`}
                         value={this.state.status}
                         onChange={this.handleFieldChange}>
                         <option value="">Choose...</option>
                         <option value="Pending">Pending</option>
                         <option value="Approve">Approve</option>
                         <option value="Auditor">Auditor</option>
                         <option value="Rejected">Rejected</option>

                      </FormSelect>
                      {this.renderErrorFor('status')}
                    </Col>
                  </Row>

                    <Button type="submit">Create New Request Genaral</Button>
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

    export default HocValidateUser(Add_RequestGeneral)
