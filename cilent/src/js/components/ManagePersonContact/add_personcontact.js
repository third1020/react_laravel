import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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



    class Add_PersonContact extends Component {
      constructor (props) {
        super(props)
        this.state = {
          client_id   : this.props.client_id,
          company_id   : '',
          person_responsible_id   : '',
          getcompany: [],
          getpersonresponsible: [],
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
                  company_id   : this.state.company_id,
                  person_responsible_id   :  this.state.person_responsible_id
                }


        axios.post('/api/personcontact/store', insertdata)
  .then(response => {
    Swal.fire(
        'Successfully',
        'Add data successfully ',
        'success'
    )

    this.setState({
      company_id   : '',
      person_responsible_id   :  '',
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

        axios.get('/api/company/index').then(res => {
          this.setState({
            getcompany : res.data
          })
        }).catch(err => {
          console.log(err);
          this.setState({
            getcompany : []
          })
        })

        axios.get('/api/personresponsible/index').then(res => {
          this.setState({
            getpersonresponsible : res.data
          })
        }).catch(err => {
          console.log(err);
          this.setState({
            getpersonresponsible : []
          })
        })


      }

      render () {

        const { getpersonresponsible,getcompany } = this.state
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
                      <label htmlFor="feInputState">Person Responsible</label>
                      <FormSelect
                         id="person_responsible_id"
                         name='person_responsible_id'
                         className={`form-control ${this.hasErrorFor('person_responsible_id') ? 'is-invalid' : ''}`}
                         value={this.state.person_responsible_id}
                         onChange={this.handleFieldChange}>
                         <option value="">Choose...</option>

                         {getpersonresponsible.map((getpersonresponsible,idx) => (
                            <option key={idx} value={getpersonresponsible.id}>{getpersonresponsible.first_name}</option>
                          ))}
                      </FormSelect>
                      {this.renderErrorFor('person_responsible_id')}
                    </Col>

                    <Col md="6" className="form-group">
                      <label htmlFor="feInputState">Company</label>
                      <FormSelect
                         id="company_id"
                         name='company_id'
                         className={`form-control ${this.hasErrorFor('company_id') ? 'is-invalid' : ''}`}
                         value={this.state.company_id}
                         onChange={this.handleFieldChange}>
                         <option value="">Choose...</option>

                         {getcompany.map((getcompany,idx) => (
                            <option key={idx} value={getcompany.id}>{getcompany.name}</option>
                          ))}
                      </FormSelect>
                      {this.renderErrorFor('company_id')}
                    </Col>
                  </Row>

                    <Button type="submit">Create New Person Contact</Button>
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

    export default HocValidateUser(Add_PersonContact)
