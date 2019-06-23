import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import ImageUploader from 'react-images-upload';
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button,
  Container
} from "shards-react";
import Swal from 'sweetalert2'
import axios from 'axios'
import { ToastContainer } from "react-toastr";
import "../../../css/alert.css";
import "../../../css/animate.css";
import HocValidateUser from "../../../HocValidateUser";
let container;




    class Add_permission extends Component {
      constructor (props) {
        super(props)
          this.state = {
            permission_name: '',
            user: false,
            personcontact: false,
            equipment: false,
            request: false,
            news: false,
            image: false,
            message: false,
            modify: false,
            report: false,
            ManageUser: false,
            ManageUserView: false,
            ManageUserEdit: false,
            ManageUserDelete: false,
            ManagePermission: false,
            ManagePermissionView: false,
            ManagePermissionEdit: false,
            ManagePermissionDelete: false,
            ManageAddress: false,
            ManageAddressView: false,
            ManageAddressEdit: false,
            ManageAddressDelete: false,
            ManageCompany: false,
            ManageCompanyView: false,
            ManageCompanyEdit: false,
            ManageCompanyDelete: false,
            ManageDepartment: false,
            ManageDepartmentView: false,
            ManageDepartmentEdit: false,
            ManageDepartmentDelete: false,
            ManageDistrict: false,
            ManageDistrictView: false,
            ManageDistrictEdit: false,
            ManageDistrictDelete: false,
            ManageEquipment: false,
            ManageEquipmentView: false,
            ManageEquipmentEdit: false,
            ManageEquipmentDelete: false,
            ManageImage: false,
            ManageImageView: false,
            ManageImageEdit: false,
            ManageImageDelete: false,
            ManageImpact: false,
            ManageImpactView: false,
            ManageImpactEdit: false,
            ManageImpactDelete: false,
            ManageLocation: false,
            ManageLocationView: false,
            ManageLocationEdit: false,
            ManageLocationDelete: false,
            ManageMessage: false,
            ManageMessageView: false,
            ManageMessageEdit: false,
            ManageMessageDelete: false,
            ManageModify: false,
            ManageModifyView: false,
            ManageModifyEdit: false,
            ManageModifyDelete: false,
            ManageNews: false,
            ManageNewsView: false,
            ManageNewsEdit: false,
            ManageNewsDelete: false,
            ManagePersonContact: false,
            ManagePersonContactView: false,
            ManagePersonContactEdit: false,
            ManagePersonContactDelete: false,
            ManagePersonResponsible: false,
            ManagePersonResponsibleView: false,
            ManagePersonResponsibleEdit: false,
            ManagePersonResponsibleDelete: false,
            ManagePostalCode: false,
            ManagePostalCodeView: false,
            ManagePostalCodeEdit: false,
            ManagePostalCodeDelete: false,
            ManagePriority: false,
            ManagePriorityView: false,
            ManagePriorityEdit: false,
            ManagePriorityDelete: false,
            ManageProvince: false,
            ManageProvinceView: false,
            ManageProvinceEdit: false,
            ManageProvinceDelete: false,
            ManageRequestGeneral: false,
            ManageRequestGeneralView: false,
            ManageRequestGeneralEdit: false,
            ManageRequestGeneralDelete: false,
            ManageRequestIssuses: false,
            ManageRequestIssusesView: false,
            ManageRequestIssusesEdit: false,
            ManageRequestIssusesDelete: false,
            ManageSettingNews: false,
            ManageSettingNewsView: false,
            ManageSettingNewsEdit: false,
            ManageSettingNewsDelete: false,
            Report: false,
            errors: []
          };


          this.handleChange = this.handleChange.bind(this)
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreate= this.handleCreate.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)


      }


      handleFieldChange (event) {
        this.setState({
          permission_name : event.target.value
        })
      }

      handleChange(e, fruit) {
  const newState = {};
  newState[fruit] = !this.state[fruit];
  this.setState({ ...this.state, ...newState });



}

      handleCreate (event) {
        event.preventDefault()
        const { history } = this.props

        const insertdata = {
          permission_name : this.state.permission_name,
          user: this.state.user,
          personcontact: this.state.personcontact,
          equipment: this.state.equipment,
          request: this.state.request,
          news: this.state.news,
          image: this.state.image,
          message: this.state.message,
          modify: this.state.modify,
          report: this.state.report,
          ManageUser: this.state.ManageUser,
          ManageUserView: this.state.ManageUserView,
          ManageUserEdit: this.state.ManageUserEdit,
          ManageUserDelete: this.state.ManageUserDelete,
          ManagePermission: this.state.ManagePermission,
          ManagePermissionView: this.state.ManagePermissionView,
          ManagePermissionEdit: this.state.ManagePermissionEdit,
          ManagePermissionDelete: this.state.ManagePermissionDelete,
          ManageAddress: this.state.ManageAddress,
          ManageAddressView: this.state.ManageAddressView,
          ManageAddressEdit: this.state.ManageAddressEdit,
          ManageAddressDelete: this.state.ManageAddressDelete,
          ManageCompany: this.state.ManageCompany,
          ManageCompanyView: this.state.ManageCompanyView,
          ManageCompanyEdit: this.state.ManageCompanyEdit,
          ManageCompanyDelete: this.state.ManageCompanyDelete,
          ManageDepartment: this.state.ManageDepartment,
          ManageDepartmentView: this.state.ManageDepartmentView,
          ManageDepartmentEdit: this.state.ManageDepartmentEdit,
          ManageDepartmentDelete: this.state.ManageDepartmentDelete,
          ManageDistrict: this.state.ManageDistrict,
          ManageDistrictView: this.state.ManageDistrictView,
          ManageDistrictEdit: this.state.ManageDistrictEdit,
          ManageDistrictDelete: this.state.ManageDistrictDelete,
          ManageEquipment: this.state.ManageEquipment,
          ManageEquipmentView: this.state.ManageEquipmentView,
          ManageEquipmentEdit: this.state.ManageEquipmentEdit,
          ManageEquipmentDelete: this.state.ManageEquipmentDelete,
          ManageImage: this.state.ManageImage,
          ManageImageView: this.state.ManageImageView,
          ManageImageEdit: this.state.ManageImageEdit,
          ManageImageDelete: this.state.ManageImageDelete,
          ManageImpact: this.state.ManageImpact,
          ManageImpactView: this.state.ManageImpactView,
          ManageImpactEdit: this.state.ManageImpactEdit,
          ManageImpactDelete: this.state.ManageImpactDelete,
          ManageLocation: this.state.ManageLocation,
          ManageLocationView: this.state.ManageLocationView,
          ManageLocationEdit: this.state.ManageLocationEdit,
          ManageLocationDelete: this.state.ManageLocationDelete,
          ManageMessage: this.state.ManageMessage,
          ManageMessageView: this.state.ManageMessageView,
          ManageMessageEdit: this.state.ManageMessageEdit,
          ManageMessageDelete: this.state.ManageMessageDelete,
          ManageModify: this.state.ManageModify,
          ManageModifyView: this.state.ManageModifyView,
          ManageModifyEdit: this.state.ManageModifyEdit,
          ManageModifyDelete: this.state.ManageModifyDelete,
          ManageNews: this.state.ManageNews,
          ManageNewsView: this.state.ManageNewsView,
          ManageNewsEdit: this.state.ManageNewsEdit,
          ManageNewsDelete: this.state.ManageNewsDelete,
          ManagePersonContact: this.state.ManagePersonContact,
          ManagePersonContactView: this.state.ManagePersonContactView,
          ManagePersonContactEdit: this.state.ManagePersonContactEdit,
          ManagePersonContactDelete: this.state.ManagePersonContactDelete,
          ManagePersonResponsible: this.state.ManagePersonResponsible,
          ManagePersonResponsibleView: this.state.ManagePersonResponsibleView,
          ManagePersonResponsibleEdit: this.state.ManagePersonResponsibleEdit,
          ManagePersonResponsibleDelete: this.state.ManagePersonResponsibleDelete,
          ManagePostalCode: this.state.ManagePostalCode,
          ManagePostalCodeView: this.state.ManagePostalCodeView,
          ManagePostalCodeEdit: this.state.ManagePostalCodeEdit,
          ManagePostalCodeDelete: this.state.ManagePostalCodeDelete,
          ManagePriority: this.state.ManagePriority,
          ManagePriorityView: this.state.ManagePriorityView,
          ManagePriorityEdit: this.state.ManagePriorityEdit,
          ManagePriorityDelete: this.state.ManagePriorityDelete,
          ManageProvince: this.state.ManageProvince,
          ManageProvinceView: this.state.ManageProvinceView,
          ManageProvinceEdit: this.state.ManageProvinceEdit,
          ManageProvinceDelete: this.state.ManageProvinceDelete,
          ManageRequestGeneral: this.state.ManageRequestGeneral,
          ManageRequestGeneralView: this.state.ManageRequestGeneralView,
          ManageRequestGeneralEdit: this.state.ManageRequestGeneralEdit,
          ManageRequestGeneralDelete: this.state.ManageRequestGeneralDelete,
          ManageRequestIssuses: this.state.ManageRequestIssuses,
          ManageRequestIssusesView: this.state.ManageRequestIssusesView,
          ManageRequestIssusesEdit: this.state.ManageRequestIssusesEdit,
          ManageRequestIssusesDelete: this.state.ManageRequestIssusesDelete,
          ManageSettingNews: this.state.ManageSettingNews,
          ManageSettingNewsView: this.state.ManageSettingNewsView,
          ManageSettingNewsEdit: this.state.ManageSettingNewsEdit,
          ManageSettingNewsDelete: this.state.ManageSettingNewsDelete,
          Report: this.state.Report
        }

        axios.post('/api/permission/store', insertdata)
  .then(response => {
    console.log(response.data);
    Swal.fire(
        'Successfully',
        'Add data successfully ',
        'success'
    )
    this.setState({
      permission_name: '',
      user: false,
      personcontact: false,
      equipment: false,
      request: false,
      news: false,
      image: false,
      message: false,
      modify: false,
      report: false,
      ManageUser: false,
      ManageUserView: false,
      ManageUserEdit: false,
      ManageUserDelete: false,
      ManagePermission: false,
      ManagePermissionView: false,
      ManagePermissionEdit: false,
      ManagePermissionDelete: false,
      ManageAddress: false,
      ManageAddressView: false,
      ManageAddressEdit: false,
      ManageAddressDelete: false,
      ManageCompany: false,
      ManageCompanyView: false,
      ManageCompanyEdit: false,
      ManageCompanyDelete: false,
      ManageDepartment: false,
      ManageDepartmentView: false,
      ManageDepartmentEdit: false,
      ManageDepartmentDelete: false,
      ManageDistrict: false,
      ManageDistrictView: false,
      ManageDistrictEdit: false,
      ManageDistrictDelete: false,
      ManageEquipment: false,
      ManageEquipmentView: false,
      ManageEquipmentEdit: false,
      ManageEquipmentDelete: false,
      ManageImage: false,
      ManageImageView: false,
      ManageImageEdit: false,
      ManageImageDelete: false,
      ManageImpact: false,
      ManageImpactView: false,
      ManageImpactEdit: false,
      ManageImpactDelete: false,
      ManageLocation: false,
      ManageLocationView: false,
      ManageLocationEdit: false,
      ManageLocationDelete: false,
      ManageMessage: false,
      ManageMessageView: false,
      ManageMessageEdit: false,
      ManageMessageDelete: false,
      ManageModify: false,
      ManageModifyView: false,
      ManageModifyEdit: false,
      ManageModifyDelete: false,
      ManageNews: false,
      ManageNewsView: false,
      ManageNewsEdit: false,
      ManageNewsDelete: false,
      ManagePersonContact: false,
      ManagePersonContactView: false,
      ManagePersonContactEdit: false,
      ManagePersonContactDelete: false,
      ManagePersonResponsible: false,
      ManagePersonResponsibleView: false,
      ManagePersonResponsibleEdit: false,
      ManagePersonResponsibleDelete: false,
      ManagePostalCode: false,
      ManagePostalCodeView: false,
      ManagePostalCodeEdit: false,
      ManagePostalCodeDelete: false,
      ManagePriority: false,
      ManagePriorityView: false,
      ManagePriorityEdit: false,
      ManagePriorityDelete: false,
      ManageProvince: false,
      ManageProvinceView: false,
      ManageProvinceEdit: false,
      ManageProvinceDelete: false,
      ManageRequestGeneral: false,
      ManageRequestGeneralView: false,
      ManageRequestGeneralEdit: false,
      ManageRequestGeneralDelete: false,
      ManageRequestIssuses: false,
      ManageRequestIssusesView: false,
      ManageRequestIssusesEdit: false,
      ManageRequestIssusesDelete: false,
      ManageSettingNews: false,
      ManageSettingNewsView: false,
      ManageSettingNewsEdit: false,
      ManageSettingNewsDelete: false,
      Report: false,
      errors: []
    })


  })
  .catch(error => {
    this.setState({
      errors: error.response.data.errors
    })
    console.log(error.response.data.errors);

    Swal.fire(
        'Errors',
        'check the value of a form field',
        'error'
    )

});



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





      render () {
        return (

      <div style={{paddingTop:"30px"}}>
        <Container>
          <ListGroup flush>
            <ListGroupItem className="p-3">
              <Row>
                <Col>
                  <Form onSubmit={this.handleCreate}>
                    <Row form>

                      <Col md="12" className="form-group">

                        <label htmlFor="feEmailAddress">Permission Name</label>
                        <FormInput

                        name='permission_name'
                        className={`form-control ${this.hasErrorFor('permission_name') ? 'is-invalid' : ''}`}
                        placeholder="กรอกชื่อผู้ใช้"
                        type='text'
                        value={this.state.permission_name}
                        onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('permission_name')}
                      </Col>
                      <Col>
                      <ListGroupItem className="px-3 pb-3">
                        <FormCheckbox
                        checked={this.state.ManageUser}
                        onChange={e => this.handleChange(e, "ManageUser")}>
                          User
                        </FormCheckbox>
                        {this.state.ManageUser == true ?(
                          <Col>
                        <div >
                          <FormCheckbox
                              inline
                              checked={this.state.ManageUser}
                              onChange={e => this.handleChange(e, "ManageUser")}
                              className="mystyle"

                            >
                            ManageUser
                        </FormCheckbox>
                        <FormCheckbox
                            inline
                            checked={this.state.ManageUserView}
                            onChange={e => this.handleChange(e, "ManageUserView")}
                          >
                          View
                      </FormCheckbox>
                      <FormCheckbox
                          inline
                          checked={this.state.ManageUserEdit}
                          onChange={e => this.handleChange(e, "ManageUserEdit")}
                        >
                        Edit
                    </FormCheckbox>
                    <FormCheckbox
                        inline
                        checked={this.state.ManageUserDelete}
                        onChange={e => this.handleChange(e, "ManageUserDelete")}
                      >
                      Delete
                  </FormCheckbox>
                        </div>

                        <div>

                        <FormCheckbox
                            inline
                            checked={this.state.ManagePermission}
                            onChange={e => this.handleChange(e, "ManagePermission")}
                            className="mystyle"
                          >
                          ManagePermission
                      </FormCheckbox>
                      <FormCheckbox
                          inline
                          checked={this.state.ManagePermissionView}
                          onChange={e => this.handleChange(e, "ManagePermissionView")}
                        >
                        View
                    </FormCheckbox>
                    <FormCheckbox
                        inline
                        checked={this.state.ManagePermissionEdit}
                        onChange={e => this.handleChange(e, "ManagePermissionEdit")}
                      >
                      Edit
                  </FormCheckbox>
                  <FormCheckbox
                      inline
                      checked={this.state.ManagePermissionDelete}
                      onChange={e => this.handleChange(e, "ManagePermissionDelete")}
                    >
                    Delete
                </FormCheckbox>
                      </div>
                        </Col>

                        ):null}


                        <FormCheckbox
                        checked={this.state.ManagePersonContact}
                        onChange={e => this.handleChange(e, "ManagePersonContact")}>
                          Person
                        </FormCheckbox>
                        {this.state.ManagePersonContact == true ?(
                          <Col>
                        <div >
                          <FormCheckbox
                              inline
                              checked={this.state.ManagePersonContact}
                              onChange={e => this.handleChange(e, "ManagePersonContact")}
                              className="mystyle"

                            >
                            ManageUser
                        </FormCheckbox>
                        <FormCheckbox
                            inline
                            checked={this.state.ManagePersonContactView}
                            onChange={e => this.handleChange(e, "ManagePersonContactView")}
                          >
                          View
                      </FormCheckbox>
                      <FormCheckbox
                          inline
                          checked={this.state.ManagePersonContactEdit}
                          onChange={e => this.handleChange(e, "ManagePersonContactEdit")}
                        >
                        Edit
                    </FormCheckbox>
                    <FormCheckbox
                        inline
                        checked={this.state.ManagePersonContactDelete}
                        onChange={e => this.handleChange(e, "ManagePersonContactDelete")}
                      >
                      Delete
                  </FormCheckbox>
                        </div>

                        <div>

                        <FormCheckbox
                            inline
                            checked={this.state.ManagePersonResponsible}
                            onChange={e => this.handleChange(e, "ManagePersonResponsible")}
                            className="mystyle2"
                          >
                          ManagePersonResponsible
                      </FormCheckbox>
                      <FormCheckbox
                          inline
                          checked={this.state.ManagePersonResponsibleView}
                          onChange={e => this.handleChange(e, "ManagePersonResponsibleView")}
                        >
                        View
                    </FormCheckbox>
                    <FormCheckbox
                        inline
                        checked={this.state.ManagePersonResponsibleEdit}
                        onChange={e => this.handleChange(e, "ManagePersonResponsibleEdit")}
                      >
                      Edit
                  </FormCheckbox>
                  <FormCheckbox
                      inline
                      checked={this.state.ManagePersonResponsibleDelete}
                      onChange={e => this.handleChange(e, "ManagePersonResponsibleDelete")}
                    >
                    Delete
                </FormCheckbox>
                      </div>
                        </Col>

                        ):null}

                        <FormCheckbox
                        checked={this.state.ManageAddress}
                        onChange={e => this.handleChange(e, "ManageAddress")}
                        >
                          Address
                        </FormCheckbox>

                        {this.state.ManageAddress == true ?(
                          <Col>
                        <div>
                          <FormCheckbox
                              inline
                              checked={this.state.ManageAddress}
                              onChange={e => this.handleChange(e, "ManageAddress")}
                              className="mystyle"

                            >
                            ManageAddress
                        </FormCheckbox>
                        <FormCheckbox
                            inline
                            checked={this.state.ManageAddressView}
                            onChange={e => this.handleChange(e, "ManageAddressView")}
                          >
                          View
                      </FormCheckbox>
                      <FormCheckbox
                          inline
                          checked={this.state.ManageAddressEdit}
                          onChange={e => this.handleChange(e, "ManageAddressEdit")}
                        >
                        Edit
                    </FormCheckbox>
                    <FormCheckbox
                        inline
                        checked={this.state.ManageAddressDelete}
                        onChange={e => this.handleChange(e, "ManageAddressDelete")}
                      >
                      Delete
                  </FormCheckbox>
                        </div>

                        <div>

                        <FormCheckbox
                            inline
                            checked={this.state.ManageCompany}
                            onChange={e => this.handleChange(e, "ManageCompany")}
                            className="mystyle"
                          >
                          ManageCompany
                      </FormCheckbox>
                      <FormCheckbox
                          inline
                          checked={this.state.ManageCompanyView}
                          onChange={e => this.handleChange(e, "ManageCompanyView")}
                        >
                        View
                    </FormCheckbox>
                    <FormCheckbox
                        inline
                        checked={this.state.ManageCompanyEdit}
                        onChange={e => this.handleChange(e, "ManageCompanyEdit")}
                      >
                      Edit
                  </FormCheckbox>
                  <FormCheckbox
                      inline
                      checked={this.state.ManageCompanyDelete}
                      onChange={e => this.handleChange(e, "ManageCompanyDelete")}
                    >
                    Delete
                </FormCheckbox>
                      </div>
                      <div>

                      <FormCheckbox
                          inline
                          checked={this.state.ManageDepartment}
                          onChange={e => this.handleChange(e, "ManageDepartment")}
                          className="mystyle"
                        >
                        ManageDepartment
                    </FormCheckbox>
                    <FormCheckbox
                        inline
                        checked={this.state.ManageDepartmentView}
                        onChange={e => this.handleChange(e, "ManageDepartmentView")}
                      >
                      View
                  </FormCheckbox>
                  <FormCheckbox
                      inline
                      checked={this.state.ManageDepartmentEdit}
                      onChange={e => this.handleChange(e, "ManageDepartmentEdit")}
                    >
                    Edit
                </FormCheckbox>
                <FormCheckbox
                    inline
                    checked={this.state.ManageDepartmentDelete}
                    onChange={e => this.handleChange(e, "ManageDepartmentDelete")}
                  >
                  Delete
              </FormCheckbox>
                    </div>

                    <div>
                    <FormCheckbox
                        inline
                        checked={this.state.ManageProvince}
                        onChange={e => this.handleChange(e, "ManageProvince")}
                        className="mystyle"
                      >
                      ManageProvince
                  </FormCheckbox>
                  <FormCheckbox
                      inline
                      checked={this.state.ManageProvinceView}
                      onChange={e => this.handleChange(e, "ManageProvinceView")}
                    >
                    View
                </FormCheckbox>
                <FormCheckbox
                    inline
                    checked={this.state.ManageProvinceEdit}
                    onChange={e => this.handleChange(e, "ManageProvinceEdit")}
                  >
                  Edit
              </FormCheckbox>
              <FormCheckbox
                  inline
                  checked={this.state.ManageProvinceDelete}
                  onChange={e => this.handleChange(e, "ManageProvinceDelete")}
                >
                Delete
            </FormCheckbox>
                  </div>

                  <div>
                  <FormCheckbox
                      inline
                      checked={this.state.ManageDistrict}
                      onChange={e => this.handleChange(e, "ManageDistrict")}
                      className="mystyle"
                    >
                    ManageDistrict
                </FormCheckbox>
                <FormCheckbox
                    inline
                    checked={this.state.ManageDistrictView}
                    onChange={e => this.handleChange(e, "ManageDistrictView")}
                  >
                  View
              </FormCheckbox>
              <FormCheckbox
                  inline
                  checked={this.state.ManageDistrictEdit}
                  onChange={e => this.handleChange(e, "ManageDistrictEdit")}
                >
                Edit
            </FormCheckbox>
            <FormCheckbox
                inline
                checked={this.state.ManageDistrictDelete}
                onChange={e => this.handleChange(e, "ManageDistrictDelete")}
              >
              Delete
          </FormCheckbox>
                </div>

                <div>
                <FormCheckbox
                    inline
                    checked={this.state.ManagePostalCode}
                    onChange={e => this.handleChange(e, "ManagePostalCode")}
                    className="mystyle"
                  >
                  ManagePostalCode
              </FormCheckbox>
              <FormCheckbox
                  inline
                  checked={this.state.ManagePostalCodeView}
                  onChange={e => this.handleChange(e, "ManagePostalCodeView")}
                >
                View
            </FormCheckbox>
            <FormCheckbox
                inline
                checked={this.state.ManagePostalCodeEdit}
                onChange={e => this.handleChange(e, "ManagePostalCodeEdit")}
              >
              Edit
          </FormCheckbox>
          <FormCheckbox
              inline
              checked={this.state.ManagePostalCodeDelete}
              onChange={e => this.handleChange(e, "ManagePostalCodeDelete")}
            >
            Delete
        </FormCheckbox>
              </div>

              <div>
              <FormCheckbox
                  inline
                  checked={this.state.ManageLocation}
                  onChange={e => this.handleChange(e, "ManageLocation")}
                  className="mystyle"
                >
                ManageLocation
            </FormCheckbox>
            <FormCheckbox
                inline
                checked={this.state.ManageLocationView}
                onChange={e => this.handleChange(e, "ManageLocationView")}
              >
              View
          </FormCheckbox>
          <FormCheckbox
              inline
              checked={this.state.ManageLocationEdit}
              onChange={e => this.handleChange(e, "ManageLocationEdit")}
            >
            Edit
        </FormCheckbox>
        <FormCheckbox
            inline
            checked={this.state.ManageLocationDelete}
            onChange={e => this.handleChange(e, "ManageLocationDelete")}
          >
          Delete
      </FormCheckbox>
            </div>

                        </Col>

                        ):null}

                        <FormCheckbox
                        checked={this.state.ManageEquipment}
                        onChange={e => this.handleChange(e, "ManageEquipment")}>
                          Equipment
                        </FormCheckbox>
                        {this.state.ManageEquipment ? (
                          <Col>

                                            <div>

                                            <FormCheckbox
                                                inline
                                                checked={this.state.ManageEquipment}
                                                onChange={e => this.handleChange(e, "ManageEquipment")}
                                                className="mystyle"
                                              >
                                              ManageEquipment
                                          </FormCheckbox>
                                          <FormCheckbox
                                              inline
                                              checked={this.state.ManageEquipmentView}
                                              onChange={e => this.handleChange(e, "ManageEquipmentView")}
                                            >
                                            View
                                        </FormCheckbox>
                                        <FormCheckbox
                                            inline
                                            checked={this.state.ManageEquipmentEdit}
                                            onChange={e => this.handleChange(e, "ManageEquipmentEdit")}
                                          >
                                          Edit
                                      </FormCheckbox>
                                      <FormCheckbox
                                          inline
                                          checked={this.state.ManageEquipmentDelete}
                                          onChange={e => this.handleChange(e, "ManageEquipmentDelete")}
                                        >
                                        Delete
                                    </FormCheckbox>
                                          </div>
                                </Col>
                        ) :null}

                        <FormCheckbox
                        checked={this.state.ManageRequestGeneral}
                        onChange={e => this.handleChange(e, "ManageRequestGeneral")}>
                          Request
                        </FormCheckbox>
                        {this.state.ManageRequestGeneral ? (
                          <Col>
                                            <div>
                                            <FormCheckbox
                                                inline
                                                checked={this.state.ManageRequestGeneral}
                                                onChange={e => this.handleChange(e, "ManageRequestGeneral")}
                                                className="mystyle"
                                              >
                                              ManageRequestGeneral
                                          </FormCheckbox>
                                          <FormCheckbox
                                              inline
                                              checked={this.state.ManageRequestGeneralView}
                                              onChange={e => this.handleChange(e, "ManageRequestGeneralView")}
                                            >
                                            View
                                        </FormCheckbox>
                                        <FormCheckbox
                                            inline
                                            checked={this.state.ManageRequestGeneralEdit}
                                            onChange={e => this.handleChange(e, "ManageRequestGeneralEdit")}
                                          >
                                          Edit
                                      </FormCheckbox>
                                      <FormCheckbox
                                          inline
                                          checked={this.state.ManageRequestGeneralDelete}
                                          onChange={e => this.handleChange(e, "ManageRequestGeneralDelete")}
                                        >
                                        Delete
                                    </FormCheckbox>
                                          </div>

                                          <div>
                                          <FormCheckbox
                                              inline
                                              checked={this.state.ManageRequestIssuses}
                                              onChange={e => this.handleChange(e, "ManageRequestIssuses")}
                                              className="mystyle"
                                            >
                                            ManageRequestIssuses
                                        </FormCheckbox>
                                        <FormCheckbox
                                            inline
                                            checked={this.state.ManageRequestIssusesView}
                                            onChange={e => this.handleChange(e, "ManageRequestIssusesView")}
                                          >
                                          View
                                      </FormCheckbox>
                                      <FormCheckbox
                                          inline
                                          checked={this.state.ManageRequestIssusesEdit}
                                          onChange={e => this.handleChange(e, "ManageRequestIssusesEdit")}
                                        >
                                        Edit
                                    </FormCheckbox>
                                    <FormCheckbox
                                        inline
                                        checked={this.state.ManageRequestIssusesDelete}
                                        onChange={e => this.handleChange(e, "ManageRequestIssusesDelete")}
                                      >
                                      Delete
                                  </FormCheckbox>
                                        </div>
                                </Col>
                        ) :null}
                        <FormCheckbox
                        checked={this.state.ManageNews}
                        onChange={e => this.handleChange(e, "ManageNews")}>
                          News
                        </FormCheckbox>

                        {this.state.ManageNews ? (
                          <Col>
                                            <div>
                                            <FormCheckbox
                                                inline
                                                checked={this.state.ManageNews}
                                                onChange={e => this.handleChange(e, "ManageNews")}
                                                className="mystyle"
                                              >
                                              ManageNews
                                          </FormCheckbox>
                                          <FormCheckbox
                                              inline
                                              checked={this.state.ManageNewsView}
                                              onChange={e => this.handleChange(e, "ManageNewsView")}
                                            >
                                            View
                                        </FormCheckbox>
                                        <FormCheckbox
                                            inline
                                            checked={this.state.ManageNewsEdit}
                                            onChange={e => this.handleChange(e, "ManageNewsEdit")}
                                          >
                                          Edit
                                      </FormCheckbox>
                                      <FormCheckbox
                                          inline
                                          checked={this.state.ManageNewsDelete}
                                          onChange={e => this.handleChange(e, "ManageNewsDelete")}
                                        >
                                        Delete
                                    </FormCheckbox>
                                          </div>

                                          <div>
                                          <FormCheckbox
                                              inline
                                              checked={this.state.ManageSettingNews}
                                              onChange={e => this.handleChange(e, "ManageSettingNews")}
                                              className="mystyle"
                                            >
                                            ManageSettingNews
                                        </FormCheckbox>
                                        <FormCheckbox
                                            inline
                                            checked={this.state.ManageSettingNewsView}
                                            onChange={e => this.handleChange(e, "ManageSettingNewsView")}
                                          >
                                          View
                                      </FormCheckbox>
                                      <FormCheckbox
                                          inline
                                          checked={this.state.ManageSettingNewsEdit}
                                          onChange={e => this.handleChange(e, "ManageSettingNewsEdit")}
                                        >
                                        Edit
                                    </FormCheckbox>
                                    <FormCheckbox
                                        inline
                                        checked={this.state.ManageSettingNewsDelete}
                                        onChange={e => this.handleChange(e, "ManageSettingNewsDelete")}
                                      >
                                      Delete
                                  </FormCheckbox>
                                        </div>
                                </Col>
                        ) :null}

                        <FormCheckbox
                        checked={this.state.ManageImage}
                        onChange={e => this.handleChange(e, "ManageImage")}>
                          Image
                        </FormCheckbox>

                        {this.state.ManageImage == true ? (
                          <Col>
                                            <div>
                                            <FormCheckbox
                                                inline
                                                checked={this.state.ManageImage}
                                                onChange={e => this.handleChange(e, "ManageImage")}
                                                className="mystyle"
                                              >
                                              ManageImage
                                          </FormCheckbox>
                                          <FormCheckbox
                                              inline
                                              checked={this.state.ManageImageView}
                                              onChange={e => this.handleChange(e, "ManageImageView")}
                                            >
                                            View
                                        </FormCheckbox>
                                        <FormCheckbox
                                            inline
                                            checked={this.state.ManageImageEdit}
                                            onChange={e => this.handleChange(e, "ManageImageEdit")}
                                          >
                                          Edit
                                      </FormCheckbox>
                                      <FormCheckbox
                                          inline
                                          checked={this.state.ManageImageDelete}
                                          onChange={e => this.handleChange(e, "ManageImageDelete")}
                                        >
                                        Delete
                                    </FormCheckbox>
                                          </div>

                                </Col>
                        ) :null}
                        <FormCheckbox
                        checked={this.state.ManageMessage}
                        onChange={e => this.handleChange(e, "ManageMessage")}>
                          Message
                        </FormCheckbox>

                        {this.state.ManageMessage == true? (
                          <Col>
                                            <div>
                                            <FormCheckbox
                                                inline
                                                checked={this.state.ManageMessage}
                                                onChange={e => this.handleChange(e, "ManageMessage")}
                                                className="mystyle"
                                              >
                                              ManageMessage
                                          </FormCheckbox>
                                          <FormCheckbox
                                              inline
                                              checked={this.state.ManageMessageView}
                                              onChange={e => this.handleChange(e, "ManageMessageView")}
                                            >
                                            View
                                        </FormCheckbox>
                                        <FormCheckbox
                                            inline
                                            checked={this.state.ManageMessageEdit}
                                            onChange={e => this.handleChange(e, "ManageMessageEdit")}
                                          >
                                          Edit
                                      </FormCheckbox>
                                      <FormCheckbox
                                          inline
                                          checked={this.state.ManageMessageDelete}
                                          onChange={e => this.handleChange(e, "ManageMessageDelete")}
                                        >
                                        Delete
                                    </FormCheckbox>
                                          </div>

                                </Col>
                        ) :null}

                        <FormCheckbox
                        checked={this.state.ManageModify}
                        onChange={e => this.handleChange(e, "ManageModify")}>
                          Modify
                        </FormCheckbox>

                        {this.state.ManageModify == true? (
                          <Col>
                                            <div>
                                            <FormCheckbox
                                                inline
                                                checked={this.state.ManageModify}
                                                onChange={e => this.handleChange(e, "ManageModify")}
                                                className="mystyle"
                                              >
                                              ManageModify
                                          </FormCheckbox>
                                          <FormCheckbox
                                              inline
                                              checked={this.state.ManageModifyView}
                                              onChange={e => this.handleChange(e, "ManageModifyView")}
                                            >
                                            View
                                        </FormCheckbox>
                                        <FormCheckbox
                                            inline
                                            checked={this.state.ManageModifyEdit}
                                            onChange={e => this.handleChange(e, "ManageModifyEdit")}
                                          >
                                          Edit
                                      </FormCheckbox>
                                      <FormCheckbox
                                          inline
                                          checked={this.state.ManageModifyDelete}
                                          onChange={e => this.handleChange(e, "ManageModifyDelete")}
                                        >
                                        Delete
                                    </FormCheckbox>
                                          </div>

                                </Col>
                        ) :null}

                        <FormCheckbox
                        checked={this.state.ManagePriority}
                        onChange={e => this.handleChange(e, "ManagePriority")}>
                          Priority
                        </FormCheckbox>

                        {this.state.ManagePriority == true? (
                          <Col>
                                            <div>
                                            <FormCheckbox
                                                inline
                                                checked={this.state.ManagePriority}
                                                onChange={e => this.handleChange(e, "ManagePriority")}
                                                className="mystyle"
                                              >
                                              ManagePriority
                                          </FormCheckbox>
                                          <FormCheckbox
                                              inline
                                              checked={this.state.ManagePriorityView}
                                              onChange={e => this.handleChange(e, "ManagePriorityView")}
                                            >
                                            View
                                        </FormCheckbox>
                                        <FormCheckbox
                                            inline
                                            checked={this.state.ManagePriorityEdit}
                                            onChange={e => this.handleChange(e, "ManagePriorityEdit")}
                                          >
                                          Edit
                                      </FormCheckbox>
                                      <FormCheckbox
                                          inline
                                          checked={this.state.ManagePriorityDelete}
                                          onChange={e => this.handleChange(e, "ManagePriorityDelete")}
                                        >
                                        Delete
                                    </FormCheckbox>
                                          </div>

                                </Col>
                        ) :null}

                        <FormCheckbox
                        checked={this.state.ManageImpact}
                        onChange={e => this.handleChange(e, "ManageImpact")}>
                          Impact
                        </FormCheckbox>

                        {this.state.ManageImpact == true? (
                          <Col>
                                            <div>
                                            <FormCheckbox
                                                inline
                                                checked={this.state.ManageImpact}
                                                onChange={e => this.handleChange(e, "ManageImpact")}
                                                className="mystyle"
                                              >
                                              ManageMessage
                                          </FormCheckbox>
                                          <FormCheckbox
                                              inline
                                              checked={this.state.ManageImpactView}
                                              onChange={e => this.handleChange(e, "ManageImpactView")}
                                            >
                                            View
                                        </FormCheckbox>
                                        <FormCheckbox
                                            inline
                                            checked={this.state.ManageImpactEdit}
                                            onChange={e => this.handleChange(e, "ManageImpactEdit")}
                                          >
                                          Edit
                                      </FormCheckbox>
                                      <FormCheckbox
                                          inline
                                          checked={this.state.ManageImpactDelete}
                                          onChange={e => this.handleChange(e, "ManageImpactDelete")}
                                        >
                                        Delete
                                    </FormCheckbox>
                                          </div>

                                </Col>
                        ) :null}

                        <FormCheckbox
                        checked={this.state.Report}
                        onChange={e => this.handleChange(e, "Report")}>
                          Report
                        </FormCheckbox>

                      </ListGroupItem>
                      </Col>

                    </Row>
                    <Button type="submit">Create New Permission</Button>
                  </Form>
                </Col>

              </Row>
            </ListGroupItem>
          </ListGroup>
        </Container>
      </div>





        )
      }
    }

    export default HocValidateUser(Add_permission)
