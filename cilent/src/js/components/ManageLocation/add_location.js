import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  Button,
  Container
} from "shards-react";
import Swal from 'sweetalert2'
import axios from 'axios'
import "../../../css/alert.css";

import HocValidateUser from "../../../HocValidateUser";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

    class Add_Location extends Component {
      constructor (props) {
        super(props)
        this.state = {
          client_id: this.props.client_id,
          name: '',
          address_1: '',
          address_2: '',
          address_3: '',
          address_latitude:13.75398,
          address_longitude:100.50144,
          address_id:'',
          image_id: '1',
          image_show: 'default',
          image: [],
          getpermission: [],
          getaddress:[],
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},
          errors: []

        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreate= this.handleCreate.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
        this.onChangeUploadFile = this.onChangeUploadFile.bind(this)
        this.onDrop = this.onDrop.bind(this)




      }
      onMarkerDragEnd = (one, two, three) => { const { latLng } = three; const lat = latLng.lat(); const lng = latLng.lng();

       this.setState({
         address_latitude: lat,
         address_longitude: lng
       })
    }

      onMarkerClick = (props, marker, e) =>{

        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
      }


      onMapClicked = (props) => {
        console.log(props);
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };

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


        const formData = {
          image: this.state.image[this.state.image.length-1],
          client_id : this.props.client_id
        }

        console.log(formData);

      axios.post('/api/uploadImage',formData)
      .then(res => {

        const insertdata = {
          client_id: this.props.client_id,
          name: this.state.name,
          address_1: this.state.address_1,
          address_2: this.state.address_2,
          address_3: this.state.address_3,
          address_latitude:this.state.address_latitude,
          address_longitude:this.state.address_longitude,
          address_id:this.state.address_id,
          image_id: res.data.image_id,
          image_show: this.state.image_show,


        }
        console.log(insertdata);
        axios.post('/api/location/store', insertdata)
    .then(response => {
    Swal.fire(
        'Successfully',
        'Add data successfully ',
        'success'
    )

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
        axios.get('/api/address/index').then(res => {
          this.setState({
            getaddress : res.data
          })
        }).catch(err => {
          console.log(err);
          this.setState({
            getaddress : []
          })
        })


      }

      render () {
        const { getaddress } = this.state
        const style = {
  width: '95%',
  height: '95%',
  marginLeft: '20px'
}


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
                          <label htmlFor="feEmailAddress">Address_1</label>
                          <FormInput
                          id='address_1'
                          name='address_1'
                          className={`form-control ${this.hasErrorFor('address_1') ? 'is-invalid' : ''}`}
                          placeholder="กรอกชื่อผู้ใช้"
                          type='text'
                          value={this.state.address_1}
                          onChange={this.handleFieldChange}
                          />
                          {this.renderErrorFor('address_1')}
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feEmailAddress">address_2</label>
                          <FormInput
                          id='address_2'
                          name='address_2'
                          className={`form-control ${this.hasErrorFor('address_2') ? 'is-invalid' : ''}`}
                          placeholder="กรอกชื่อผู้ใช้"
                          type='text'
                          value={this.state.address_2}
                          onChange={this.handleFieldChange}
                          />
                          {this.renderErrorFor('address_2')}
                        </Col>
                        <Col md="6" className="form-group">
                          <label htmlFor="feEmailAddress">address_3</label>
                          <FormInput
                          id='address_3'
                          name='address_3'
                          className={`form-control ${this.hasErrorFor('address_3') ? 'is-invalid' : ''}`}
                          placeholder="กรอกชื่อผู้ใช้"
                          type='text'
                          value={this.state.address_3}
                          onChange={this.handleFieldChange}
                          />
                          {this.renderErrorFor('address_3')}
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
                      <label htmlFor="feInputState">Address</label>
                      <FormSelect
                         id="Address"
                         name='address_id'
                         className={`form-control ${this.hasErrorFor('address_id') ? 'is-invalid' : ''}`}
                         value={this.state.address_id}
                         onChange={this.handleFieldChange}>
                         <option value="">Choose...</option>

                         {getaddress.map((getaddress,idx) => (
                            <option key={idx} value={getaddress.id}>{getaddress.id}</option>
                          ))}
                      </FormSelect>
                      {this.renderErrorFor('location_id')}
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
                    <Row form>
                      <Col md="12" className="form-group">
                        <label htmlFor="feInputState">Image</label>
                        <div style={{width:'100%',height:400}}>
                        <Map
                                google={this.props.google}
                                style={style}
                                initialCenter={{
                                   lat:this.state.address_latitude, lng: this.state.address_longitude
                                 }}
                                zoom={10}
                                onClick={this.onMapClicked}
                              >
                              <Marker onClick={this.onMarkerClick}
                              position={{lat:this.state.address_latitude, lng: this.state.address_longitude}}
                              name={'ตำแหน่งปัจจุบัน'}
                              draggable={true} onDragend={this.onMarkerDragEnd} />
                               <InfoWindow
                               marker={this.state.activeMarker}
                               visible={this.state.showingInfoWindow}>
                                 <div>
                                   <h1>{this.state.selectedPlace.name}</h1>
                                 </div>
                             </InfoWindow>
                          </Map>
                          </div>
                      </Col>
                    </Row>



                    <Button type="submit">Create New Location</Button>
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

    export default GoogleApiWrapper({
  apiKey: ("AIzaSyDnmGzOiSJeXAFo2uFsEDOa92cYcT7waO0")
})(HocValidateUser(Add_Location))
