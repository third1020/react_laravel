import React, { Component } from 'react';
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
  Container
} from "shards-react";
import Swal from 'sweetalert2'
import axios from 'axios'
import { ToastContainer } from "react-toastr";
import "../../../css/alert.css";
import "../../../css/animate.css";
import HocValidateUser from "../../../HocValidateUser";
let container;



    class View_address extends Component {
      constructor (props) {
        super(props)
        this.state = {
          province_id : '',
          district_id : '',
          sub_district_id : '',
          postal_code_id : '',

          getprovince: [],
          getdistrict: [],
          getsub_district: [],
          getpostal_code: [],
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
                  province_id: this.state.province_id,
                  district_id: this.state.district_id,
                  sub_district_id: this.state.sub_district_id,
                  postal_code_id: this.state.postal_code_id


                }

        axios.post('/api/address/store', insertdata)
  .then(response => {
    Swal.fire(
        'Successfully',
        'Add data successfully ',
        'success'
    )

    this.setState({
      province_id: '',
      district_id: '',
      sub_district_id: '',
      postal_code_id: '',
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

        axios.get(`/api/address/update/${this.props.match.params.id}`).then(res => {
          this.setState({
            province_id : res.data.user.province_id,
            district_id : res.data.user.district_id,
            sub_district_id : res.data.user.sub_district_id,
            postal_code_id : res.data.user.postal_code_id,

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

        axios.get('/api/district/index').then(res => {
          this.setState({
            getdistrict : res.data
          })
        }).catch(err => {
          console.log(err);
          this.setState({
            getdistrict : []
          })
        })

        axios.get('/api/subdistrict/index').then(res => {
          this.setState({
            getsub_district : res.data
          })
        }).catch(err => {
          console.log(err);
          this.setState({
            getsub_district : []
          })
        })

        axios.get('/api/postalcode/index').then(res => {
          this.setState({
            getpostal_code : res.data
          })
        }).catch(err => {
          console.log(err);
          this.setState({
            getpostal_code : []
          })
        })

      }

      render () {

        const { getprovince,getdistrict,getsub_district,getpostal_code } = this.state
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
                    <label htmlFor="feInputState">Province</label>
                    <FormSelect
                       id="feInputState"
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

                  <Col md="6" className="form-group">
                    <label htmlFor="feInputState">District</label>
                    <FormSelect
                       id="feInputState"
                       name='district_id'
                       className={`form-control ${this.hasErrorFor('district_id') ? 'is-invalid' : ''}`}
                       value={this.state.district_id}
                       onChange={this.handleFieldChange}
                       disabled>
                       <option value="">Choose...</option>

                       {getdistrict.map((getdistrict,idx) => (
                          <option key={idx} value={getdistrict.id}>{getdistrict.name}</option>
                        ))}
                    </FormSelect>
                    {this.renderErrorFor('district_id')}
                  </Col>
                    </Row>


                    <Row form>
                  <Col md="6" className="form-group">
                    <label htmlFor="feInputState">Sub District</label>
                    <FormSelect
                       id="feInputState"
                       name='sub_district_id'
                       className={`form-control ${this.hasErrorFor('sub_district_id') ? 'is-invalid' : ''}`}
                       value={this.state.sub_district_id}
                       onChange={this.handleFieldChange}
                       disabled>
                       <option value="">Choose...</option>

                       {getsub_district.map((getsub_district,idx) => (
                          <option key={idx} value={getsub_district.id}>{getsub_district.name}</option>
                        ))}
                    </FormSelect>
                    {this.renderErrorFor('sub_district_id')}
                  </Col>

                  <Col md="6" className="form-group">
                    <label htmlFor="feInputState">Postal code</label>
                    <FormSelect
                       id="feInputState"
                       name='postal_code_id'
                       className={`form-control ${this.hasErrorFor('postal_code_id') ? 'is-invalid' : ''}`}
                       value={this.state.postal_code_id}
                       onChange={this.handleFieldChange}
                       disabled>
                       <option value="">Choose...</option>

                       {getpostal_code.map((getpostal_code,idx) => (
                          <option key={idx} value={getpostal_code.id}>{getpostal_code.code}</option>
                        ))}
                    </FormSelect>
                    {this.renderErrorFor('postal_code_id')}
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

    export default HocValidateUser(View_address)
