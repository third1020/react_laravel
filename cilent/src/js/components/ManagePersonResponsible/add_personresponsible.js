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



    class Add_PersonResponsible extends Component {
      constructor (props) {
        super(props)
        this.state = {
          client_id  : this.props.client_id,
          first_name  : '',
          last_name  : '',
          nick_name  : '',
          telephone  : '',
          email  : '',
          position  : '',
          id_card  : '',
          id_employee  : '',
          location_id  : '',
          company_id  : '',
          department_id  : '',
          getlocation  : [],
          getcompany  : [],
          getdepartment  : [],


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
                  first_name  : this.state.first_name,
                  last_name  : this.state.last_name,
                  nick_name  : this.state.nick_name,
                  telephone  : this.state.telephone,
                  email  : this.state.email,
                  position  : this.state.position,
                  card  : this.state.id_card,
                  employee  : this.state.id_employee,
                  location_id  : this.state.location_id,
                  company_id  : this.state.company_id,
                  department_id  : this.state.department_id,


                }
                console.log(insertdata);

        axios.post('/api/personresponsible/store', insertdata)
  .then(response => {
    Swal.fire(
        'Successfully',
        'Add data successfully ',
        'success'
    )

    this.setState({
      first_name  : '',
      last_name  : '',
      nick_name  : '',
      telephone  : '',
      email  : '',
      position  : '',
      card  : '',
      employee  : '',
      location_id  : '',
      company_id  : '',
      department_id  : '',
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

        axios.get('/api/department/index').then(res => {
          this.setState({
            getdepartment : res.data
          })
        }).catch(err => {
          console.log(err);
          this.setState({
            getdepartment : []
          })
        })

      }

      render () {

        const { getlocation,getcompany,getdepartment } = this.state
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
                      <label htmlFor="feEmailAddress">First Name</label>
                      <FormInput
                      id='first_name'
                      name='first_name'
                      className={`form-control ${this.hasErrorFor('first_name') ? 'is-invalid' : ''}`}
                      placeholder="กรอกชื่อผู้ใช้"
                      type='text'
                      value={this.state.first_name}
                      onChange={this.handleFieldChange}
                      />
                      {this.renderErrorFor('first_name')}
                    </Col>

                    <Col md="6" className="form-group">
                      <label htmlFor="feEmailAddress">Last Name</label>
                      <FormInput
                      id='last_name'
                      name='last_name'
                      className={`form-control ${this.hasErrorFor('last_name') ? 'is-invalid' : ''}`}
                      placeholder="กรอกชื่อผู้ใช้"
                      type='text'
                      value={this.state.last_name}
                      onChange={this.handleFieldChange}
                      />
                      {this.renderErrorFor('last_name')}
                    </Col>
                  </Row>

                  <Row form>
                <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">Nick Name</label>
                <FormInput
                id='nick_name'
                name='nick_name'
                className={`form-control ${this.hasErrorFor('nick_name') ? 'is-invalid' : ''}`}
                placeholder="กรอกชื่อผู้ใช้"
                type='text'
                value={this.state.nick_name}
                onChange={this.handleFieldChange}
                />
                {this.renderErrorFor('nick_name')}

                </Col>
              </Row>

              <Row form>
            <Col md="6" className="form-group">
            <label htmlFor="feEmailAddress">Telephone</label>
            <FormInput
            id='telephone'
            name='telephone'
            className={`form-control ${this.hasErrorFor('telephone') ? 'is-invalid' : ''}`}
            placeholder="กรอกชื่อผู้ใช้"
            type='text'
            value={this.state.telephone}
            onChange={this.handleFieldChange}
            />
            {this.renderErrorFor('telephone')}

            </Col>
            <Col md="6" className="form-group">
            <label htmlFor="feEmailAddress">Email</label>
            <FormInput
            id='email'
            name='email'
            className={`form-control ${this.hasErrorFor('email') ? 'is-invalid' : ''}`}
            placeholder="กรอกชื่อผู้ใช้"
            type='text'
            value={this.state.email}
            onChange={this.handleFieldChange}
            />
            {this.renderErrorFor('email')}

            </Col>
          </Row>

          <Row form>
        <Col md="6" className="form-group">
        <label htmlFor="feEmailAddress">Position</label>
        <FormInput
        id='position'
        name='position'
        className={`form-control ${this.hasErrorFor('position') ? 'is-invalid' : ''}`}
        placeholder="กรอกชื่อผู้ใช้"
        type='text'
        value={this.state.position}
        onChange={this.handleFieldChange}
        />
        {this.renderErrorFor('position')}
          </Col >
      </Row>



                      <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="feInputState">Location</label>
                      <FormSelect
                         id="feInputState"
                         name='location_id'
                         className={`form-control ${this.hasErrorFor('location_id') ? 'is-invalid' : ''}`}
                         value={this.state.location_id}
                         onChange={this.handleFieldChange}>
                         <option value="">Choose...</option>

                         {getlocation.map((getlocation,idx) => (
                            <option key={idx} value={getlocation.id}>{getlocation.name}</option>
                          ))}
                      </FormSelect>
                      {this.renderErrorFor('location_id')}
                    </Col>
                  </Row>

                  <Row form>
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

              <Row form>
            <Col md="6" className="form-group">
              <label htmlFor="feInputState">Department</label>
              <FormSelect
                 id="department_id"
                 name='department_id'
                 className={`form-control ${this.hasErrorFor('department_id') ? 'is-invalid' : ''}`}
                 value={this.state.department_id}
                 onChange={this.handleFieldChange}>
                 <option value="">Choose...</option>

                 {getdepartment.map((getdepartment,idx) => (
                    <option key={idx} value={getdepartment.id}>{getdepartment.name}</option>
                  ))}
              </FormSelect>
              {this.renderErrorFor('department_id')}
            </Col>
          </Row>

                    <Button type="submit">Create New Person Responsible</Button>
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

    export default HocValidateUser(Add_PersonResponsible)
