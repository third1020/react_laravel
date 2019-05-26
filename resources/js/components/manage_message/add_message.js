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



    class Add_message extends Component {
      constructor (props) {
        super(props)
        this.state = {
          message_title: '',
          message_message: '',
          message_from: sessionStorage.getItem("id"),
          message_to: '',

          getuser: [],
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
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.onDrop = this.onDrop.bind(this)
        this.state.message_from = sessionStorage.getItem("id");



      }

      handleModelChange(message_message) {
    this.setState({
      message_message: message_message
    });
  }



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

      handleSelectChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


      handleCreate (event) {


        event.preventDefault()



        const { history } = this.props

        const insertdata = {

          message_title: this.state.message_title,
          message_message: this.state.message_message,
          message_from: this.state.message_from,
          message_to: this.state.message_to,

        }

        axios.post('/api/message', insertdata)
          .then(response => {
            // redirect to the homepage
            this.setState({
              message_title: '',
              message_message: '',

              message_to: '',

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
        axios.get('/api/queryuser').then(response => {
          this.setState({
            getuser: response.data,

          })
        })

      }

      render () {
        const { getuser } = this.state



        return (


              <div className='col-lg-12'>
                <div className='card'>
                  <div className='card-header'>เพิ่มข้อความ</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreate}>
                      <div className='form-group'>
                        <label htmlFor='message_title'>หัวเรื่องข้อความ</label>
                        <input
                          id='message_title'
                          name='message_title'
                          className={`form-control ${this.hasErrorFor('message_title') ? 'is-invalid' : ''}`}
                          placeholder="กรอกชื่อผู้ใช้"
                          type='text'
                          value={this.state.message_title}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('message_title')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='message_message'>รายละเอียดข้อความ</label>
                        <FroalaEditor
                        tag='textarea'
                        config={this.config}
                        model={this.state.message_message}
  			                onModelChange={this.handleModelChange}

                        />

                      </div>


                      <label htmlFor='message_to'>ส่งข้อความถึง</label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        {  this.state.message_to == '' ? (
                            <label class="input-group-text" for="inputGroupSelect01" style={{color:'red'}}>เลือกชื่อผู้ที่ต้องการส่งข้อความถึง</label>
                        ):<label class="input-group-text" for="inputGroupSelect01">ส่งข้อความถึงคุณ</label>}
                        </div>
                        <select class="custom-select" name="message_to" value={this.state.message_to} onChange={this.handleSelectChange} className={`form-control ${this.hasErrorFor('message_to') ? 'is-invalid' : ''}`}>
                        <option value="" >Choose...</option>
                          {getuser.map(getuser => (
                            <option value={getuser.id}>{getuser.name}</option>
                          ))}
                        </select>
                          {this.renderErrorFor('message_to')}
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

    export default Add_message
