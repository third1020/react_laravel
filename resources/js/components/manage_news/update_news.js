import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import ImageUploader from 'react-images-upload';
import PropTypes from 'prop-types';




import { Button , Form , Col, Row} from 'react-bootstrap';
import axios from 'axios'
import { ToastContainer } from "react-toastr";
import "../../../css/alert.css";
import "../../../css/animate.css";
let container;



    class Update_news extends Component {
      constructor (props) {
        super(props)
        this.state = {
          news_title: '',
          news_detail: '',
          news_types_id: '',

          getnews_type: [],
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

        axios.put(`/api/news_update/${this.props.id}`, insertdata)
          .then(response => {
            // redirect to the homepage
            this.setState({
              news_title: '',
              news_detail: '',
              message_from: '',
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

        axios.get(`/api/news/${this.props.id}`).then(response => {
          this.setState({

            news_title: response.data.news_title,
            news_detail: response.data.news_detail,
            message_from: response.data.message_from,
            news_types_id: response.data.news_types_id,


          })
        })

      }

      render () {
        const { getnews_type } = this.state



        return (


              <div className='col-lg-12' style={{width:900,padding:40}}>
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
                        <textarea
                          id='news_detail'
                          type='text'
                          placeholder="กรอกรายละเอียด"
                          className={`form-control ${this.hasErrorFor('news_detail') ? 'is-invalid' : ''}`}
                          name='news_detail'
                          rows="5"
                          value={this.state.news_detail}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('news_detail')}
                      </div>


                      <label htmlFor='news_types_id'>ประเภทข่าว</label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        {  this.state.news_types_id == '' ? (
                            <label class="input-group-text" for="inputGroupSelect01" style={{color:'red'}}>เลือกประเภทข่าว</label>
                        ):<label class="input-group-text" for="inputGroupSelect01">ประเภทข่าว :</label>}
                        </div>
                        <select class="custom-select" name="news_types_id" value={this.state.news_types_id} onChange={this.handleSelectChange} className={`form-control ${this.hasErrorFor('news_types_id') ? 'is-invalid' : ''}`}>

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
          
        )
      }
    }
    Update_news.propTypes = {
      id: PropTypes.number,

    };

    export default Update_news
