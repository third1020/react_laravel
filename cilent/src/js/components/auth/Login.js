import axios from 'axios'
import React, { Component } from 'react';


import "../../../css/login.css";
import Swal from 'sweetalert2/dist/sweetalert2.js'


import "../../../css/util.css";

import {FaUserAlt } from 'react-icons/fa';


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',

    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleCreateNewProject = this.handleCreateNewProject.bind(this)


  }

  componentDidMount() {

  }

  handleFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCreateNewProject(event) {
    event.preventDefault()



    const project = {
      username: this.state.username,
      password: this.state.password,

    }

    axios.post('/api/login', project)
      .then(response => {
        // redirect to the homepage
        console.log(response.data);

        if(response.data.data.token != null){
          sessionStorage.setItem("Token", response.data.data.token);
          axios.get('api/profile', {
                  headers: { Authorization: `Bearer ${sessionStorage.Token}` }
              })
              .then(response => {

                console.log(response)

                if(response.status === 200){
                  Swal.fire({
                title: 'Loading...',
                onBeforeOpen: () => { Swal.showLoading()}
              }

            )
                  axios.post('api/permission/getPermission',{
                    permission_id: response.data.user.permission_id

                  }).then(res => {

                    console.log(res.data);
                    sessionStorage.setItem('permission_name',res.data.getpermission.permission_name);
                    sessionStorage.setItem('ManageUser',res.data.getpermission.ManageUser);
                    sessionStorage.setItem('ManageUserView',res.data.getpermission.ManageUserView);
                    sessionStorage.setItem('ManageUserEdit',res.data.getpermission.ManageUserEdit);
                    sessionStorage.setItem('ManageUserDelete',res.data.getpermission.ManageUserDelete);

                    sessionStorage.setItem('ManagePermission',res.data.getpermission.ManagePermission);
                    sessionStorage.setItem('ManagePermissionView',res.data.getpermission.ManagePermissionView);
                    sessionStorage.setItem('ManagePermissionEdit',res.data.getpermission.ManagePermissionEdit);
                    sessionStorage.setItem('ManagePermissionDelete',res.data.getpermission.ManagePermissionDelete);

                    sessionStorage.setItem('ManageAddress',res.data.getpermission.ManageAddress);
                    sessionStorage.setItem('ManageAddressView',res.data.getpermission.ManageAddressView);
                    sessionStorage.setItem('ManageAddressEdit',res.data.getpermission.ManageAddressEdit);
                    sessionStorage.setItem('ManageAddressDelete',res.data.getpermission.ManageAddressDelete);

                    sessionStorage.setItem('ManageCompany',res.data.getpermission.ManageCompany);
                    sessionStorage.setItem('ManageCompanyView',res.data.getpermission.ManageCompanyView);
                    sessionStorage.setItem('ManageCompanyEdit',res.data.getpermission.ManageCompanyEdit);
                    sessionStorage.setItem('ManageCompanyDelete',res.data.getpermission.ManageCompanyDelete);

                    sessionStorage.setItem('ManageDepartment',res.data.getpermission.ManageDepartment);
                    sessionStorage.setItem('ManageDepartmentView',res.data.getpermission.ManageDepartmentView);
                    sessionStorage.setItem('ManageDepartmentEdit',res.data.getpermission.ManageDepartmentEdit);
                    sessionStorage.setItem('ManageDepartmentDelete',res.data.getpermission.ManageDepartmentDelete);

                    sessionStorage.setItem('ManageDistrict',res.data.getpermission.ManageDistrict);
                    sessionStorage.setItem('ManageDistrictView',res.data.getpermission.ManageDistrictView);
                    sessionStorage.setItem('ManageDistrictEdit',res.data.getpermission.ManageDistrictEdit);
                    sessionStorage.setItem('ManageDistrictDelete',res.data.getpermission.ManageDistrictDelete);

                    sessionStorage.setItem('ManageEquipment',res.data.getpermission.ManageEquipment);
                    sessionStorage.setItem('ManageEquipmentView',res.data.getpermission.ManageEquipmentView);
                    sessionStorage.setItem('ManageEquipmentEdit',res.data.getpermission.ManageEquipmentEdit);
                    sessionStorage.setItem('ManageEquipmentDelete',res.data.getpermission.ManageEquipmentDelete);

                    sessionStorage.setItem('ManageImage',res.data.getpermission.ManageImage);
                    sessionStorage.setItem('ManageImageView',res.data.getpermission.ManageImageView);
                    sessionStorage.setItem('ManageImageEdit',res.data.getpermission.ManageImageEdit);
                    sessionStorage.setItem('ManageImageDelete',res.data.getpermission.ManageImageDelete);

                    sessionStorage.setItem('ManageImpact',res.data.getpermission.ManageImpact);
                    sessionStorage.setItem('ManageImpactView',res.data.getpermission.ManageImpactView);
                    sessionStorage.setItem('ManageImpactEdit',res.data.getpermission.ManageImpactEdit);
                    sessionStorage.setItem('ManageImpactDelete',res.data.getpermission.ManageImpactDelete);

                    sessionStorage.setItem('ManageLocation',res.data.getpermission.ManageLocation);
                    sessionStorage.setItem('ManageLocationView',res.data.getpermission.ManageLocationView);
                    sessionStorage.setItem('ManageLocationEdit',res.data.getpermission.ManageLocationEdit);
                    sessionStorage.setItem('ManageLocationDelete',res.data.getpermission.ManageLocationDelete);

                    sessionStorage.setItem('ManageMessage',res.data.getpermission.ManageMessage);
                    sessionStorage.setItem('ManageMessageView',res.data.getpermission.ManageMessageView);
                    sessionStorage.setItem('ManageMessageEdit',res.data.getpermission.ManageMessageEdit);
                    sessionStorage.setItem('ManageMessageDelete',res.data.getpermission.ManageMessageDelete);

                    sessionStorage.setItem('ManageModify',res.data.getpermission.ManageModify);
                    sessionStorage.setItem('ManageModifyView',res.data.getpermission.ManageModifyView);
                    sessionStorage.setItem('ManageModifyEdit',res.data.getpermission.ManageModifyEdit);
                    sessionStorage.setItem('ManageModifyDelete',res.data.getpermission.ManageModifyDelete);

                    sessionStorage.setItem('ManageNews',res.data.getpermission.ManageNews);
                    sessionStorage.setItem('ManageNewsView',res.data.getpermission.ManageNewsView);
                    sessionStorage.setItem('ManageNewsEdit',res.data.getpermission.ManageNewsEdit);
                    sessionStorage.setItem('ManageNewsDelete',res.data.getpermission.ManageNewsDelete);

                    sessionStorage.setItem('ManagePersonContact',res.data.getpermission.ManagePersonContact);
                    sessionStorage.setItem('ManagePersonContactView',res.data.getpermission.ManagePersonContactView);
                    sessionStorage.setItem('ManagePersonContactEdit',res.data.getpermission.ManagePersonContactEdit);
                    sessionStorage.setItem('ManagePersonContactDelete',res.data.getpermission.ManagePersonContactDelete);

                    sessionStorage.setItem('ManagePersonResponsible',res.data.getpermission.ManagePersonResponsible);
                    sessionStorage.setItem('ManagePersonResponsibleView',res.data.getpermission.ManagePersonResponsibleView);
                    sessionStorage.setItem('ManagePersonResponsibleEdit',res.data.getpermission.ManagePersonResponsibleEdit);
                    sessionStorage.setItem('ManagePersonResponsibleDelete',res.data.getpermission.ManagePersonResponsibleDelete);

                    sessionStorage.setItem('ManagePostalCode',res.data.getpermission.ManagePostalCode);
                    sessionStorage.setItem('ManagePostalCodeView',res.data.getpermission.ManagePostalCodeView);
                    sessionStorage.setItem('ManagePostalCodeEdit',res.data.getpermission.ManagePostalCodeEdit);
                    sessionStorage.setItem('ManagePostalCodeDelete',res.data.getpermission.ManagePostalCodeDelete);

                    sessionStorage.setItem('ManagePriority',res.data.getpermission.ManagePriority);
                    sessionStorage.setItem('ManagePriorityView',res.data.getpermission.ManagePriorityView);
                    sessionStorage.setItem('ManagePriorityEdit',res.data.getpermission.ManagePriorityEdit);
                    sessionStorage.setItem('ManagePriorityDelete',res.data.getpermission.ManagePriorityDelete);

                    sessionStorage.setItem('ManageProvince',res.data.getpermission.ManageProvince);
                    sessionStorage.setItem('ManageProvinceView',res.data.getpermission.ManageProvinceView);
                    sessionStorage.setItem('ManageProvinceEdit',res.data.getpermission.ManageProvinceEdit);
                    sessionStorage.setItem('ManageProvinceDelete',res.data.getpermission.ManageProvinceDelete);

                    sessionStorage.setItem('ManageRequestGeneral',res.data.getpermission.ManageRequestGeneral);
                    sessionStorage.setItem('ManageRequestGeneralView',res.data.getpermission.ManageRequestGeneralView);
                    sessionStorage.setItem('ManageRequestGeneralEdit',res.data.getpermission.ManageRequestGeneralEdit);
                    sessionStorage.setItem('ManageRequestGeneralDelete',res.data.getpermission.ManageRequestGeneralDelete);

                    sessionStorage.setItem('ManageRequestIssuses',res.data.getpermission.ManageRequestIssuses);
                    sessionStorage.setItem('ManageRequestIssusesView',res.data.getpermission.ManageRequestIssusesView);
                    sessionStorage.setItem('ManageRequestIssusesEdit',res.data.getpermission.ManageRequestIssusesEdit);
                    sessionStorage.setItem('ManageRequestIssusesDelete',res.data.getpermission.ManageRequestIssusesDelete);

                    sessionStorage.setItem('ManageSettingNews',res.data.getpermission.ManageSettingNews);
                    sessionStorage.setItem('ManageSettingNewsView',res.data.getpermission.ManageSettingNewsView);
                    sessionStorage.setItem('ManageSettingNewsEdit',res.data.getpermission.ManageSettingNewsEdit);
                    sessionStorage.setItem('ManageSettingNewsDelete',res.data.getpermission.ManageSettingNewsDelete);

                    sessionStorage.setItem('Report',res.data.getpermission.Report);


                    window.location.href = "/Dashboard"





                  }).catch(err => {
                    console.log(err);


                  })
                }



              }).catch(err => {
                console.log(err);

              })





        }else{

          alert(response.data.error);
        }
      })
      .catch(error => {
        Swal.fire({
          type: 'error',
          title: 'Login error',
          text: 'Incorrect username or password.'

        })
      })
  }




  render() {
    return (

	<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src="../../../images/img-01.png"></img>
				</div>

				<form className="login100-form validate-form" onSubmit={this.handleCreateNewProject}>
					<span className="login100-form-title">
						Member Login
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100"
                   type="text"
                   name="username"
                   value={this.state.username}
                   onChange={this.handleFieldChange}
                   placeholder="Username"
                   />
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i  aria-hidden="true"><FaUserAlt/></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100"
                   type="password"
                   name="password"
                   value={this.state.password}
                   onChange={this.handleFieldChange}
                   placeholder="Password"
                   />
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"> </i>
						</span>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Login
						</button>
					</div>

					<div className="text-center p-t-12">

					</div>

					<div className="text-center p-t-136">

					</div>
				</form>
			</div>
		</div>
	</div>
    )
  }
}
