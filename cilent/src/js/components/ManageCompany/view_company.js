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



    class View_company extends Component {
      constructor (props) {
        super(props)
        this.state = {
          client_id  : this.props.client_id,
          name  : '',
          location_id  : '',

          getlocation: [],
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
                  location_id  : this.state.location_id,


                }

        axios.post('/api/location/store', insertdata)
  .then(response => {
    Swal.fire(
        'Successfully',
        'Add data successfully ',
        'success'
    )

    this.setState({
      name: '',
      location_id: '',
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
        axios.get(`/api/company/update/${this.props.match.params.id}`).then(res => {


          this.setState({

            name: res.data.user.name,
            location_id: res.data.user.location_id,

          })
        }).catch(err => {
          console.log(err);

        })

        axios.get('/api/location/index').then(res => {
          this.setState({
            getlocation : res.data
          })
        }).catch(err => {
          console.log(err);
          this.setState({
            getlocation : []
          })
        })

      }

      render () {

        const { getlocation } = this.state
        return (

      <div style={{paddingTop:"30px"}}>
        <Container>
          <ListGroup flush>
            <ListGroupItem className="p-3">
              <Row>
                <Col>
                  <Form >
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
                      disabled
                      />
                      {this.renderErrorFor('name')}
                    </Col>
                  </Row>


                      <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="feInputState">Location</label>
                      <FormSelect
                         id="feInputState"
                         name='location_id'
                         className={`form-control ${this.hasErrorFor('location_id') ? 'is-invalid' : ''}`}
                         value={this.state.location_id}
                         onChange={this.handleFieldChange}
                         disabled>
                         <option value="">Choose...</option>

                         {getlocation.map((getlocation,idx) => (
                            <option key={idx} value={getlocation.id}>{getlocation.name}</option>
                          ))}
                      </FormSelect>
                      {this.renderErrorFor('location_id')}
                    </Col>
                  </Row>


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

    export default HocValidateUser(View_company)
