import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import ImageUploader from 'react-images-upload';


import { Button , Form , Col, Row} from 'react-bootstrap';
import axios from 'axios'
import { ToastContainer } from "react-toastr";
import "../../../css/alert.css";
import "../../../css/animate.css";

import '../../../css/froala-editor/froala_style.min.css';
import '../../../css/froala-editor/froala_editor.pkgd.min.css';

import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
import ScriptTag from 'react-script-tag';
let container;







    class Add_news extends Component {
      constructor (props) {
        super(props)



        this.state = {
          news_title: '',
          news_detail: '',
          news_types_id: '',
          img:'',
          getnews_type: [],
          errors: []
        }

        this.config = {
    reactIgnoreAttrs: ['tmpattr'],
    placeholderText: 'กรอกรายละเอียดข่าว',
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


        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreate= this.handleCreate.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.onDrop = this.onDrop.bind(this)
        this.handleModelChange = this.handleModelChange.bind(this)


      }

      handleModelChange(news_detail) {
    this.setState({
      news_detail: news_detail
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

          news_title: this.state.news_title,
          news_detail: this.state.news_detail,
          message_from: this.state.message_from,
          news_types_id: this.state.news_types_id,

        }

        axios.post('/api/news', insertdata)
          .then(response => {
            // redirect to the homepage
            this.setState({
              news_title: '',
              news_detail: '',
              news_types_id: '',

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
        axios.get('/api/querynews_type').then(response => {
          this.setState({
            getnews_type: response.data,

          })
        })

      }

      render () {
        const { getnews_type } = this.state


        return (



          <div className='container py-4' >
          <ScriptTag isHydrating={true} type="text/javascript" src="https://cdn.jsdelivr.net/npm/froala-editor@3.0.0-beta.1/js/froala_editor.min.js" />
          <ScriptTag isHydrating={true} type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.9.5/js/plugins/image.min.js" />

            <div style={{paddingLeft: '10' ,paddingRight: '5'}}>

              <div className='col-md-12'>
                <div className='card'>
                  <div className='card-header'>เพิ่มข่าว</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreate}>
                      <div className='form-group'>
                        <label htmlFor='news_title'>ชื่อข่าว</label>
                        <input
                          id='news_title'
                          name='news_title'
                          className={`form-control ${this.hasErrorFor('news_title') ? 'is-invalid' : ''}`}
                          placeholder="กรอกชื่อข่าว"
                          type='text'
                          value={this.state.news_title}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('news_title')}

                      </div>

                      <div className='form-group'>
                        <label htmlFor='news_detail'>รายละเอียด</label>

                        <FroalaEditor
                        tag='textarea'
                        config={this.config}
                        model={this.state.news_detail}
  			                onModelChange={this.handleModelChange}

                        />


                      </div>


                      <label htmlFor='news_types_id'>ประเภทข่าว</label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        {  this.state.news_types_id == '' ? (
                            <label class="input-group-text" for="inputGroupSelect01" style={{color:'red'}}>เลือกประเภทข่าว</label>
                        ):<label class="input-group-text" for="inputGroupSelect01">ประเภทข่าว :</label>}
                        </div>
                        <select class="custom-select" name="news_types_id" value={this.state.news_types_id} onChange={this.handleSelectChange} className={`form-control ${this.hasErrorFor('news_types_id') ? 'is-invalid' : ''}`}>
                        <option value="" >Choose...</option>
                          {getnews_type.map(getnews_type => (
                            <option value={getnews_type.id}>{getnews_type.type_name}</option>
                          ))}
                        </select>
                          {this.renderErrorFor('news_types_id')}
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

    export default Add_news
