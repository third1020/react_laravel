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



    class View_district extends Component {
      constructor (props) {
        super(props)
        this.state = {

          name  : '',
          province_id  : '',

          getprovince: [],
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

                  name  : this.state.name,
                  province_id  : this.state.province_id,
                }


        axios.put(`/api/district/update/${this.props.match.params.id}`, insertdata)
  .then(response => {
    Swal.fire(
        'Successfully',
        'Add data successfully ',
        'success'
    )

    this.setState({
      name  : this.state.name,
      province_id  : this.state.province_id,
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
        axios.get(`/api/district/update/${this.props.match.params.id}`).then(res => {


          this.setState({

            name: res.data.user.name,
            province_id: res.data.user.province_id,

          })
        }).catch(err => {
          console.log(err);

        })

        axios.get('/api/province/index').then(res => {
          this.setState({
            getprovince : res.data
          })
        }).catch(err => {
          console.log(err);
          this.setState({
            getprovince : []
          })
        })

      }

      render () {

        const { getprovince } = this.state
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
                      <label htmlFor="feInputState">Province</label>
                      <FormSelect
                         id="province_id"
                         name='province_id'
                         className={`form-control ${this.hasErrorFor('province_id') ? 'is-invalid' : ''}`}
                         value={this.state.province_id}
                         onChange={this.handleFieldChange}
                         disabled>
                         <option value="">Choose...</option>

                         {getprovince.map((getprovince,idx) => (
                            <option key={idx} value={getprovince.id}>{getprovince.name}</option>
                          ))}
                      </FormSelect>
                      {this.renderErrorFor('province_id')}
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

    export default HocValidateUser(View_district)
