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
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Update_user from './manage_user/update_user'



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
             <div class="card-body" >
                <div >


                <center>
                  <Card.Img variant="top" src={this.state.image} style={{width:'140px',height:'140px',paddingTop:'10'}} class="rounded-circle" />
                  </center>
                     <Card.Body>
                       <Card.Title><center><h2 class="cursive">{this.state.username} </h2></center></Card.Title>
                          <Card.Text>


                          <p style={{paddingLeft:70}}>ชื่อผู้ใช้งาน: {this.state.Name_lastname} </p>
                          <p style={{paddingLeft:70}}>รหัสบัตรประจำตัวประชาชน: {this.state.ID_Card} </p>
                          <p style={{paddingLeft:70}}>เบอร์ติดต่อ: {this.state.Phone_Number} </p>
                          <p style={{paddingLeft:70}}>อีเมลย์: {this.state.Email} </p>

                          </Card.Text>
                          <center>
                        <Button variant="primary" onClick={() => this.edituser()} >Edit Profile</Button>
                        </center>
                    </Card.Body>









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
