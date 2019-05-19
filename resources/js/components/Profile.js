import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import ImageUploader from 'react-images-upload';
import PropTypes from 'prop-types';
import "../../css/image.css";
import { ToastContainer } from "react-toastr";
import "../../css/alert.css";
import "../../css/animate.css";
import Image from 'react-bootstrap/Image'


let container;





import { Button , Form , Col, Row} from 'react-bootstrap';
import axios from 'axios'


    class Profile extends Component {
      constructor (props) {
        super(props)
        this.state = {

          username: '',
          password: '',
          Name_lastname: '',
          ID_Card: '',
          Phone_Number: '',
          Email: '',
          permission: '',
          image: [],

        }



      }




      componentWillMount () {


        axios.get(`/api/user/${this.props.id}`).then(response => {
          this.setState({

            username: response.data.user.name,
            Name_lastname: response.data.user.nameuser,
            ID_Card: response.data.user.id_card,
            Phone_Number: response.data.user.phone_number,
            Email: response.data.user.email,
            permission: response.data.user.permission_id,
            image: [response.data.user.image]


          })
        })
      }





      render () {




        return (

          <div class="grid card">
             <div class="card-body">
                <div class="profile__avatar">

                <center><img src={this.state.image} style={{width:'200',hight:'200'}} class="rounded-circle"  />  </center>
                <center>{this.state.username} </center>
                <center>{this.state.Name_lastname} </center>
                <center>{this.state.ID_Card} </center>
                <center>{this.state.Phone_Number} </center>
                <center>{this.state.Email} </center>
          



                </div>

             </div>
          </div>




        )
      }
    }

    Profile.propTypes = {
      id: PropTypes.number,

    };

    export default Profile
