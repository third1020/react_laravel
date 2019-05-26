import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import ImageUploader from 'react-images-upload';
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



    class Add_equipment_register extends Component {
      constructor (props) {
        super(props)
        this.state = {
          equipment_name	: '',
          equipment_type: '',
          username: '',
          department: '',
          detail: '',

          errors: []
        }
        this.config = {
    reactIgnoreAttrs: ['tmpattr'],
    placeholderText: 'กรอกรายละเอียด',
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



      }

      handleModelChange(detail) {
    this.setState({
      detail: detail
    });
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

          equipment_name	: this.state.equipment_name,
          equipment_type: this.state.equipment_type,
          username: this.state.username,
          department:this.state.department,
          detail: this.state.detail,

        }

        axios.post('/api/equipment_register', insertdata)
          .then(response => {
            // redirect to the homepage
            this.setState({
              equipment_name	: '',
              equipment_type: '',
              username: '',
              department: '',
              detail: '',

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


      }

      render () {


        return (



              <div className='col-lg-12'>
                <div className='card'>
                  <div className='card-header'>ลงทะเบียนอุปกรณ์</div>
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
                        <label htmlFor='equipment_type'>ประเภทอุปกรณ์</label>
                        <input
                          id='equipment_type'
                          name='equipment_type'
                          className={`form-control ${this.hasErrorFor('equipment_type') ? 'is-invalid' : ''}`}
                          placeholder="ใส่ชื่อประเภทอุปกรณ์"
                          type="text"
                          value={this.state.equipment_type}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('equipment_type')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='username'>Username</label>
                        <input
                          id='username'
                          type='text'
                          placeholder="กรอก username "
                          className={`form-control ${this.hasErrorFor('username') ? 'is-invalid' : ''}`}
                          name='username'
                          value={this.state.username}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('username')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='department'>สำนักงาน</label>
                        <textarea
                          id='department'
                          type='text'
                          placeholder="กรอกชื่อสำนักงาน"
                          className={`form-control ${this.hasErrorFor('department') ? 'is-invalid' : ''}`}
                          name='department'
                          rows="2"
                          value={this.state.department}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('department')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='detail'>รายละเอียด</label>
                        <FroalaEditor
                        tag='textarea'
                        config={this.config}
                        model={this.state.detail}
                        onModelChange={this.handleModelChange}

                        />


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
          

        )
      }
    }

    export default Add_equipment_register
