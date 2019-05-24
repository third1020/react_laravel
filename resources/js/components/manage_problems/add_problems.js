import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import ImageUploader from 'react-images-upload';
import {RadioGroup, Radio} from 'react-radio-group';
import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
import ScriptTag from 'react-script-tag';
import '../../../css/froala-editor/froala_style.min.css';
import '../../../css/froala-editor/froala_editor.pkgd.min.css';




import { Button , Form , Col, Row} from 'react-bootstrap';
import axios from 'axios'
import { ToastContainer } from "react-toastr";
import "../../../css/alert.css";
import "../../../css/animate.css";
let container;



    class Add_problems extends Component {
      constructor (props) {
        super(props)
        this.state = {
          problems_tital	: '',
          problems_detail: '',
          problems_status: '0',

          equipment_id: '',
          get_equipment_id: [],

          contact_id: '',
          get_contact_id: [],

          impact_id: '',
          get_impact_id: [],

          priority_id: '',
          get_priority_id: [],


          errors: []
        }
        this.config = {
    reactIgnoreAttrs: ['tmpattr'],
    placeholderText: 'กรอกรายละเอียดข้อความ',
    heightMin: 250,
    heightMax: 400,
    autoFocus: true,
    fontFamilySelection: true,
    fontSizeSelection: true,
    tabSpaces: 4,
    imageUpload: true,
    videoUpload: true,
    pluginsEnabled: ['align', 'charCounter', 'codeBeautifier', 'codeView', 'colors', 'draggable', 'embedly', 'emoticons', 'entities', 'file', 'fontFamily', 'fontSize', 'fullscreen', 'image', 'imageManager', 'inlineStyle', 'lineBreaker', 'link', 'lists', 'paragraphFormat', 'paragraphStyle', 'quickInsert', 'quote', 'save', 'table', 'url', 'video', 'wordPaste'],
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'check', '|', 'insertLink', 'insertImage', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
    toolbarButtonsMD: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'check', '|', 'insertLink', 'insertImage', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'strikeThrough', '|', 'fontFamily', 'fontSize', 'color', '|', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'check', '|', 'insertLink', 'insertImage', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', '|', 'fontFamily', 'fontSize', 'color', '|', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'check', '|', 'insertLink', 'insertImage', 'insertFile', 'insertTable', '|', 'insertHR', 'selectAll', 'clearFormatting', '|', 'spellChecker', '|', 'undo', 'redo'],
    imageUploadParam: 'file',
    imageUploadURL: '/api/news/image',
    imageUploadMethod: 'POST',
    // Set max image size to 5MB.
    imageMaxSize: 5 * 1024 * 1024,
    // Allow to upload PNG and JPG.
    imageAllowedTypes: ['jpeg', 'jpg', 'png'],
    fileUploadParam: 'file',
    fileUploadURL: '/api/news/image',
    fileUploadMethod: 'POST',
    fileMaxSize: 20 * 1024 * 1024, // 10MB
    events: {
      'image.beforeUpload': function (images) {
        // Return false if you want to stop the image upload.
        console.log(images[0]);
        if(images[0] !== ""){
          return true
        }
      },
      'image.inserted': function ($img, response) {
        // Image was inserted in the editor.
        console.log($img[0]);
        console.log(response);
      },
  }
}
        this.handleModelChange = this.handleModelChange.bind(this)

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreate= this.handleCreate.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
        this.handleRadioChange = this.handleRadioChange.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)




      }
      handleModelChange(problems_detail) {
    this.setState({
      problems_detail: problems_detail
    });
    }




      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleRadioChange(value) {
        this.setState({problems_status: value});
      }

       handleSelectChange(event) {
         this.setState({[event.target.name]: event.target.value});
      }




      handleCreate (event) {


        event.preventDefault()

        const { history } = this.props

        const insertdata = {

          problems_tital	: this.state.problems_tital,
          problems_detail: this.state.problems_detail,
          problems_status: this.state.problems_status,
          equipment_id: this.state.equipment_id,
          contact_id: this.state.contact_id,
          impact_id: this.state.impact_id,
          priority_id: this.state.priority_id


        }

        axios.post('/api/problems', insertdata)
          .then(response => {
            // redirect to the homepage
            this.setState({
              problems_tital	: '',
              problems_detail: '',
              problems_status: '',

              equipment_id: '',

              contact_id: '',

              impact_id: '',

              priority_id: '',


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

        axios.get('/api/queryequipment').then(response => {
          this.setState({
            get_equipment_id: response.data,

          })
        })

        axios.get('/api/querycontact').then(response => {
          this.setState({
            get_contact_id: response.data,

          })
        })

        axios.get('/api/queryimpact').then(response => {
          this.setState({
            get_impact_id: response.data,

          })
        })

        axios.get('/api/querypriority').then(response => {
          this.setState({
            get_priority_id: response.data,

          })
        })

      }

      render () {
        const { get_equipment_id,get_contact_id,get_impact_id,get_priority_id } = this.state


        return (


          <div className='container py-4' >
            <div style={{paddingLeft: '10' ,paddingRight: '5'}}>
              <div className='col-md-12'>
                <div className='card'>
                  <div className='card-header'>เพิ่มปัญหา</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreate}>
                      <div className='form-group'>
                        <label htmlFor='problems_tital'>ชื่อปัญหา</label>
                        <input
                          id='problems_tital'
                          name='problems_tital'
                          className={`form-control ${this.hasErrorFor('problems_tital') ? 'is-invalid' : ''}`}
                          placeholder="กรอกชื่อปัญหา"
                          type='text'
                          value={this.state.problems_tital}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('problems_tital')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='problems_detail'>รายละเอียด</label>
                        <FroalaEditor
                        tag='textarea'
                        config={this.config}
                        model={this.state.problems_detail}
                        onModelChange={this.handleModelChange}

                        />
                      </div>


                      <div>
                      <label>เลือกสถานะ</label>
                      <RadioGroup
                        name="fruit"
                        selectedValue={this.state.problems_status}
                        onChange={this.handleRadioChange}>
                      <label style={{paddingLeft: 10}}>
                       <Radio value="0" />0
                      </label>
                      <label style={{paddingLeft: 10}}>
                        <Radio value="1" />1
                      </label>
                      </RadioGroup>
                      </div>


                      <label htmlFor='permission'>ปัญหาที่เกิดกับอุปกรณ์</label>
                      <div class="input-group mb-3">
                         <div class="input-group-prepend">
                        {  this.state.equipment_id == '' ? (
                            <label class="input-group-text" for="inputGroupSelect01" style={{color:'red'}}>เลือกชื่ออุปกรณ์ที่มีปัญหา</label>

                        ):<label class="input-group-text" for="inputGroupSelect01">ชื่ออุปกรณ์ที่มีปัญหา</label>}
                         </div>
                        <select class="custom-select" name='equipment_id' value={this.state.equipment_id} onChange={this.handleSelectChange} className={`form-control ${this.hasErrorFor('equipment_id') ? 'is-invalid' : ''}`}>
                        <option value="" >Choose...</option>

                          {get_equipment_id.map(get_equipment_id => (
                            <option value={get_equipment_id.id}>{get_equipment_id.equipment_name}</option>
                          ))}
                        </select>
                        {this.renderErrorFor('equipment_id')}
                      </div>


                      <div class="input-group mb-3">
                         <div class="input-group-prepend">
                        {  this.state.contact_id == '' ? (
                            <label class="input-group-text" for="inputGroupSelect01" style={{color:'red'}}>เลือกชื่อผู้ติดต่อ</label>

                        ):<label class="input-group-text" for="inputGroupSelect01">ผู้ติดต่อชื่อ</label>}
                         </div>
                        <select class="custom-select" name='contact_id' value={this.state.contact_id} onChange={this.handleSelectChange} className={`form-control ${this.hasErrorFor('contact_id') ? 'is-invalid' : ''}`}>
                        <option value="" >Choose...</option>

                          {get_contact_id.map(get_contact_id => (
                            <option value={get_contact_id.id}>{get_contact_id.contact_name}</option>
                          ))}
                        </select>
                        {this.renderErrorFor('contact_id')}
                      </div>


                      <div class="input-group mb-3">
                         <div class="input-group-prepend">
                        {  this.state.impact_id == '' ? (
                            <label class="input-group-text" for="inputGroupSelect01" style={{color:'red'}}>เลือกชื่อผลกระทบ</label>

                        ):<label class="input-group-text" for="inputGroupSelect01">ผลกระทบชื่อ</label>}
                         </div>
                        <select class="custom-select" name='impact_id' value={this.state.impact_id} onChange={this.handleSelectChange} className={`form-control ${this.hasErrorFor('impact_id') ? 'is-invalid' : ''}`}>
                        <option value="" >Choose...</option>

                          {get_impact_id.map(get_impact_id => (
                            <option value={get_impact_id.id}>{get_impact_id.impact_name}</option>
                          ))}
                        </select>
                        {this.renderErrorFor('impact_id')}
                      </div>


                      <div class="input-group mb-3">
                         <div class="input-group-prepend">
                        {  this.state.priority_id == '' ? (
                            <label class="input-group-text" for="inputGroupSelect01" style={{color:'red'}}>เลือกระดับความสำคัญ</label>

                        ):<label class="input-group-text" for="inputGroupSelect01">ระดับความสำคัญ</label>}
                         </div>
                        <select class="custom-select" name='priority_id' value={this.state.priority_id} onChange={this.handleSelectChange} className={`form-control ${this.hasErrorFor('priority_id') ? 'is-invalid' : ''}`}>
                        <option value="" >Choose...</option>

                          {get_priority_id.map(get_priority_id => (
                            <option value={get_priority_id.id}>{get_priority_id.priority_name}</option>
                          ))}
                        </select>
                        {this.renderErrorFor('priority_id')}
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

    export default Add_problems
