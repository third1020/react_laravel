import React, { Component } from 'react';

import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,

  FormSelect,

  Container
} from "shards-react";
import Swal from 'sweetalert2'
import axios from 'axios'

import "../../../css/alert.css";
import "../../../css/animate.css";
import HocValidateUser from "../../../HocValidateUser";




    class View_impact extends Component {
      constructor (props) {
        super(props)
        this.state = {
          client_id  : this.props.client_id,
          name  : '',
          value  : 'None',


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
    


        const insertdata = {
          client_id  : this.props.client_id,
          name  : this.state.name,
          value  : this.state.value,

        }


        axios.put(`/api/impact/update/${this.props.match.params.id}`, insertdata)
  .then(response => {
    Swal.fire(
        'Successfully',
        'Add data successfully ',
        'success'
    )

    this.setState({
      name: '',
      value: 'None',
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
        axios.get(`/api/impact/update/${this.props.match.params.id}`).then(res => {


          this.setState({

            name: res.data.user.name,
            value: res.data.user.value,

          })
        }).catch(err => {
          console.log(err);

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
                      <label htmlFor="feInputState">Value</label>
                      <FormSelect
                         id="value"
                         name='value'
                         className={`form-control ${this.hasErrorFor('value') ? 'is-invalid' : ''}`}
                         value={this.state.value}
                         onChange={this.handleFieldChange}
                         disabled>
                         <option value="None">None</option>
                         <option value="Low">Low</option>
                         <option value="Medium">Medium</option>
                         <option value="High">High</option>


                      </FormSelect>
                      {this.renderErrorFor('value')}
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

    export default HocValidateUser(View_impact)
