import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import ImageUploader from 'react-images-upload';




import { Button , Form , Col, Row} from 'react-bootstrap';
import axios from 'axios'
import { ToastContainer } from "react-toastr";
import "../../../css/alert.css";
import "../../../css/animate.css";
let container;



    class Add_equipment extends Component {
      constructor (props) {
        super(props)
        this.state = {
          equipment_name	: '',
          equipment_detail: '',
          equipment_number: '',
          contact_detail: '',
          equipment_type_id: '',
          equipment_image: [],
          getequipment_type:[],
          errors: []
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreate= this.handleCreate.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.onDrop = this.onDrop.bind(this)


      }

      onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
            equipment_image: this.state.equipment_image.concat(pictureDataURLs),
        });
  }


      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSelectChange(event) {
    this.setState({equipment_type_id: event.target.value});
  }


      handleCreate (event) {

        event.preventDefault()

        const { history } = this.props

        const insertdata = {

          equipment_name	: this.state.equipment_name,
          equipment_detail: this.state.equipment_detail,
          equipment_number: this.state.equipment_number,
          contact_detail: this.state.contact_detail,
          equipment_type_id: this.state.equipment_type_id,
          equipment_image: this.state.equipment_image[this.state.equipment_image.length - 1]

        }

        axios.post('/api/equipment', insertdata)
          .then(response => {
            // redirect to the homepage
            this.setState({
              equipment_name: '',
              equipment_detail: '',
              equipment_number: '',
              contact_detail: '',
              equipment_type_id: '',

              errors: []
            })

            container.success(`success `, `///title\\\\\\`, {
                closeButton: true,
                timeOut: 5000
              })
              window.scrollTo(0, 0);

          })
          .catch(error => {
            this.setState({
              errors: error.response.data.errors
            })

            container.error(`errors`, `///title\\\\\\`, {
                closeButton: true,

                timeOut: 5000,
                extendedTimeOut: 2000
              })
            window.scrollTo(0, 0);
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




      componentWillMount () {

        axios.get('/api/queryequipment_type').then(response => {
          this.setState({
            getequipment_type: response.data,

          })
        })


      }

      render () {
        const { getequipment_type } = this.state


        return (


          <div className='container py-4' >
            <div style={{paddingLeft: '10' ,paddingRight: '5'}}>
              <div className='col-md-12'>
                <div className='card'>
                  <div className='card-header'>เพิ่มอุปกรณ์</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreate}>
                      <div className='form-group'>
                        <label htmlFor='equipment_name'>ชื่ออุปกรณ์</label>
                        <input
                          id='equipment_name'
                          name='equipment_name'
                          className={`form-control ${this.hasErrorFor('equipment_name') ? 'is-invalid' : ''}`}
                          placeholder="กรอกชื่ออุปกรณ์"
                          type='text'
                          value={this.state.equipment_name}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('equipment_name')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='equipment_detail'>รายละเอียดอุปกรณ์</label>
                        <textarea
                          id='equipment_detail'
                          name='equipment_detail'
                          className={`form-control ${this.hasErrorFor('equipment_detail') ? 'is-invalid' : ''}`}
                          placeholder="กรอกรายละเอียดอุปกรณ"
                          type="text"
                          rows="3"
                          value={this.state.equipment_detail}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('equipment_detail')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='equipment_number'>เลขอุปกรณ์</label>
                        <input
                          id='equipment_number'
                          type='number'
                          placeholder="กรอก เลขอุปกรณ์ "
                          className={`form-control ${this.hasErrorFor('equipment_number') ? 'is-invalid' : ''}`}
                          name='equipment_number'
                          value={this.state.equipment_number}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('equipment_number')}

                      </div>


                      <div className='form-group'>
                        <label htmlFor='contact_detail'>รายละเอียดผู้ติดต่อ</label>
                        <textarea
                          id='contact_detail'
                          type='text'
                          placeholder="กรอก รายละเอียดผู้ติดต่อ"
                          className={`form-control ${this.hasErrorFor('contact_detail') ? 'is-invalid' : ''}`}
                          name='contact_detail'
                          rows="3"
                          value={this.state.contact_detail}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('contact_detail')}



                      </div>

                      <label htmlFor='permission'> ประเภทอุปกรณ์</label>

                      <div class="input-group mb-3">

                        <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">เลือกประเภทอุปกรณ์</label>


                        </div>
                        <select class="custom-select" value={this.state.getequipment_type_id} onChange={this.handleSelectChange} className={`form-control ${this.hasErrorFor('getequipment_type_id') ? 'is-invalid' : ''}`}>
                        <option value="" >Choose...</option>



                          {getequipment_type.map(getequipment_type => (
                            <option value={getequipment_type.id}>{getequipment_type.type_name}</option>
                          ))}

                        </select>

                        {this.renderErrorFor('getequipment_type_id')}



                      </div>


                      <div className='form-group'>

                      <label htmlFor='image'>เลือกรูปภาพอุปกรณ์</label>

                      <input
                        className={`form-control ${this.hasErrorFor('equipment_image') ? 'is-invalid' : ''}`}
                        hidden
                      />

                      <ImageUploader
                  type="file"
                	withIcon={true}
                  value={this.state.equipment_image}
                	buttonText='เลือกรูปภาพ'
                	onChange={this.onDrop}
                	imgExtension={['.jpg', '.gif', '.png', '.gif']}
                	maxFileSize={520215}
                  singleImage={true}
                  label='ไฟล์ขนาดต้องไม่เกิน 500 kb, สกุลไฟล์: jpg,png'
                  withPreview={true}
                  fileSizeError="ขนาดไฟล์ใหญ่เกินไป"
                  fileTypeError="ประเภทไฟล์ไม่ถูกต้อง"

                      />
                      {this.renderErrorFor('equipment_image')}

                      </div>




                      <button className='btn btn-primary' >Create</button>
                    </form>

                    <ToastContainer
                      ref={ref => container = ref}
                      className="toast-top-right"
                    />




                  </div>
                </div>
              </div>
            </div>
          </div>

        )
      }
    }

    export default Add_equipment
