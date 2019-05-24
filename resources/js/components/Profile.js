import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import ImageUploader from 'react-images-upload';
import PropTypes from 'prop-types';
import "../../css/image.css";
import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer } from "react-toastr";
import "../../css/alert.css";
import "../../css/animate.css";
import "../../css/front.css";
import "../../css/profile.css";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Update_user from './manage_user/update_user'
import {FaStar} from 'react-icons/fa';



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

      edituser(){
        confirmAlert({
      onClickOutside: () => {   window.location.reload(true);},
      customUI: ({ onClose }) => {
        return (


          <div style={{ height: '100%' ,left:50 }}>
          <Update_user id={sessionStorage.getItem("id")}/>
          <footer class="modal-footer">

                  <button type="button" class="btn btn-danger"   onClick={() => {
                      window.location.reload(true);
                      onClose();
                    }}>ปิด</button>
                  </footer>


          </div>
        );
      }

    });

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

          <div class="container portfolio" class="bodyprofile">
          	<div class="row">
          		<div class="col-md-12">
          			<div class="heading">
          				<h3>About {this.state.username}</h3>
          			</div>
          		</div>
          	</div>
          	<div class="bio-info">
          		<div class="row">
          			<div class="col-md-6">
          				<div class="row">
          					<div class="col-md-12">
          						<div class="bio-image">
          							<img src={this.state.image} style={{width:'180px',height:'180px'}} class="rounded-circle" alt="image" />
          						</div>
          					</div>
          				</div>
          			</div>
          			<div class="col-md-6">
          				<div class="bio-content">

          					<h1>{this.state.username}</h1>
          					<h6>ชื่อผู้ใช้งาน: {this.state.Name_lastname}</h6>
                    <h6>รหัสบัตรประจำตัวประชาชน: {this.state.ID_Card}</h6>
                    <h6>เบอร์ติดต่อ: {this.state.Phone_Number}</h6>
                    <h6>อีเมลย์: {this.state.Email}</h6>

          				<i style={{ fontSize: '1.5em',align: 'justify',position: 'relative',color:'yellow'}}><FaStar/></i>
                  <i style={{ fontSize: '1.5em',align: 'justify',position: 'relative',color:'yellow'}}><FaStar/></i>
                  <i style={{ fontSize: '1.5em',align: 'justify',position: 'relative',color:'yellow'}}><FaStar/></i>
                  <i style={{ fontSize: '1.5em',align: 'justify',position: 'relative',color:'yellow'}}><FaStar/></i>
                  <i style={{ fontSize: '1.5em',align: 'justify',position: 'relative',color:'yellow'}}><FaStar/></i>

                    <center>


                  <Button variant="primary" onClick={() => this.edituser()} >Edit Profile</Button>
                  </center>
          				</div>
          			</div>
          		</div>
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
