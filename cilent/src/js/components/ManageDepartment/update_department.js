import React, { Component } from 'react';

import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,

  Button,
  Container
} from "shards-react";
import Swal from 'sweetalert2'
import axios from 'axios'

import "../../../css/alert.css";
import "../../../css/animate.css";
import HocValidateUser from "../../../HocValidateUser";




    class Update_department extends Component {
      constructor (props) {
        super(props)
        this.state = {
          client_id  : this.props.client_id,
          name  : '',

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

                }


        axios.put(`/api/department/update/${this.props.match.params.id}`, insertdata)
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
        axios.get(`/api/department/update/${this.props.match.params.id}`).then(res => {

          this.setState({

            name: res.data.user.name,


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



                    <Button type="submit">Update Department</Button>
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

    export default HocValidateUser(Update_department)
