import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import View_user from './js/components/User/view_user';
import Update_user from './js/components/User/update_user';


import ManageUser from "./js/components/User/list_user";
import ManageAddress from "./js/components/ManageAddress/list_address";
import ManagePermission from "./js/components/ManagePermission/list_permission";
import ManageCompany from "./js/components/ManageCompany/list_company";
import ManageDepartment from "./js/components/ManageDepartment/list_department";
import ManageDistrict from "./js/components/ManageDistrict/list_district";
import ManageEquipment from "./js/components/ManageEquipment/list_equipment";
import ManageImage from "./js/components/ManageImage/list_image";
import ManageImpact from "./js/components/ManageImpact/list_impact";
import ManageLocation from "./js/components/ManageLocation/list_location";
import ManageMessage from "./js/components/ManageMessage/list_message";
import ManageModify from "./js/components/ManageModify/list_modify";
import ManageNews from "./js/components/ManageNews/list_news";
import ManagePersonContact from "./js/components/ManagePersonContact/list_personcontact";
import ManagePersonResponsible from "./js/components/ManagePersonResponsible/list_personresponsible";
import ManagePostalCode from "./js/components/ManagePostalCode/list_postalcode";
import ManagePriority from "./js/components/ManagePriority/list_priority";
import ManageProvince from "./js/components/ManageProvince/list_province";
import ManageRequestGeneral from "./js/components/ManageRequestGeneral/list_requestgeneral";
import ManageRequestIssuses from "./js/components/ManageRequestIssuses/list_requestissuses";
import ManageSettingNews from "./js/components/ManageSettingNews/list_settingnews";
import ManageSubDistrict from "./js/components/ManageSubDistrict/list_subdistrict";

import Add_user from "./js/components/User/add_user";
import Add_permission from "./js/components/ManagePermission/add_permission";
import Add_address from "./js/components/ManageAddress/add_address";
import Add_company from "./js/components/ManageCompany/add_company";
import Add_department from "./js/components/ManageDepartment/add_department";
import Add_district from "./js/components/ManageDistrict/add_district";
import Add_equipment from "./js/components/ManageEquipment/add_equipment";
import Add_impact from "./js/components/ManageImpact/add_impact";
import Add_Location from "./js/components/ManageLocation/add_location";
import Add_Message from "./js/components/ManageMessage/add_message";
import Add_Modify from "./js/components/ManageModify/add_modify";
import Add_News from "./js/components/ManageNews/add_news";
import Add_PersonContact from "./js/components/ManagePersonContact/add_personcontact";
import Add_PersonResponsible from "./js/components/ManagePersonResponsible/add_personresponsible";
import Add_PostalCode from "./js/components/ManagePostalCode/add_postalcode";
import Add_Priority from "./js/components/ManagePriority/add_priority";
import Add_Province from "./js/components/ManageProvince/add_province";
import Add_RequestGeneral from "./js/components/ManageRequestGeneral/add_requestgeneral";
import Add_RequestIssuses from "./js/components/ManageRequestIssuses/add_requestissuses";
import Add_SettingNews from "./js/components/ManageSettingNews/add_settingnews";
import Add_SubDistrict from "./js/components/ManageSubDistrict/add_subdistrict";


import Update_permission from "./js/components/ManagePermission/update_permission";
import Update_address from "./js/components/ManageAddress/update_address";
import Update_company from "./js/components/ManageCompany/update_company";
import Update_department from "./js/components/ManageDepartment/update_department";
import Update_district from "./js/components/ManageDistrict/update_district";
import Update_equipment from "./js/components/ManageEquipment/update_equipment";
import Update_impact from "./js/components/ManageImpact/update_impact";
import Update_Location from "./js/components/ManageLocation/update_location";
import Update_Message from "./js/components/ManageMessage/update_message";
import Update_Modify from "./js/components/ManageModify/update_modify";
import Update_News from "./js/components/ManageNews/update_news";
import Update_PersonContact from "./js/components/ManagePersonContact/update_personcontact";
import Update_PersonResponsible from "./js/components/ManagePersonResponsible/update_personresponsible";
import Update_PostalCode from "./js/components/ManagePostalCode/update_postalcode";
import Update_Priority from "./js/components/ManagePriority/update_priority";
import Update_Province from "./js/components/ManageProvince/update_province";
import Update_RequestGeneral from "./js/components/ManageRequestGeneral/update_requestgeneral";
import Update_RequestIssuses from "./js/components/ManageRequestIssuses/update_requestissuses";
import Update_SettingNews from "./js/components/ManageSettingNews/update_settingnews";
import Update_SubDistrict from "./js/components/ManageSubDistrict/update_subdistrict";




import View_address from "./js/components/ManageAddress/view_address";
import View_company from "./js/components/ManageCompany/view_company";
import View_department from "./js/components/ManageDepartment/view_department";
import View_district from "./js/components/ManageDistrict/view_district";
import View_equipment from "./js/components/ManageEquipment/view_equipment";
import View_impact from "./js/components/ManageImpact/view_impact";
import View_Location from "./js/components/ManageLocation/view_location";
import View_Message from "./js/components/ManageMessage/view_message";
import View_Modify from "./js/components/ManageModify/view_modify";
import View_News from "./js/components/ManageNews/view_news";
import View_PersonContact from "./js/components/ManagePersonContact/view_personcontact";
import View_PersonResponsible from "./js/components/ManagePersonResponsible/view_personresponsible";
import View_PostalCode from "./js/components/ManagePostalCode/view_postalcode";
import View_Priority from "./js/components/ManagePriority/view_priority";
import View_Province from "./js/components/ManageProvince/view_province";
import View_RequestGeneral from "./js/components/ManageRequestGeneral/view_requestgeneral";
import View_RequestIssuses from "./js/components/ManageRequestIssuses/view_requestissuses";
import View_SettingNews from "./js/components/ManageSettingNews/view_settingnews";
import View_SubDistrict from "./js/components/ManageSubDistrict/view_subdistrict";



import Report from "./js/components/Report/report_incident";


export default [

  {
    path: "/Dashboard",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },

  {
    path: "/ManageUser",
    layout: DefaultLayout,
    component: ManageUser
  },
  {
    path: "/ManagePermission",
    layout: DefaultLayout,
    component: ManagePermission
  },
  {
    path: "/ManageAddress",
    layout: DefaultLayout,
    component: ManageAddress
  },
  {
    path: "/ManageCompany",
    layout: DefaultLayout,
    component: ManageCompany
  },
  {
    path: "/ManageDepartment",
    layout: DefaultLayout,
    component: ManageDepartment
  },
  {
    path: "/ManageDistrict",
    layout: DefaultLayout,
    component: ManageDistrict
  },
  {
    path: "/ManageEquipment",
    layout: DefaultLayout,
    component: ManageEquipment
  },
  {
    path: "/ManageImage",
    layout: DefaultLayout,
    component: ManageImage
  },
  {
    path: "/ManageImpact",
    layout: DefaultLayout,
    component: ManageImpact
  },
  {
    path: "/ManageLocation",
    layout: DefaultLayout,
    component: ManageLocation
  },
  {
    path: "/ManageMessage",
    layout: DefaultLayout,
    component: ManageMessage
  },
  {
    path: "/ManageModify",
    layout: DefaultLayout,
    component: ManageModify
  },
  {
    path: "/ManageNews",
    layout: DefaultLayout,
    component: ManageNews
  },
  {
    path: "/ManagePersonContact",
    layout: DefaultLayout,
    component: ManagePersonContact
  },
  {
    path: "/ManagePersonResponsible",
    layout: DefaultLayout,
    component: ManagePersonResponsible
  },
  {
    path: "/ManagePostalCode",
    layout: DefaultLayout,
    component: ManagePostalCode
  },
  {
    path: "/ManagePriority",
    layout: DefaultLayout,
    component: ManagePriority
  },
  {
    path: "/ManageProvince",
    layout: DefaultLayout,
    component: ManageProvince
  },
  {
    path: "/ManageRequestGeneral",
    layout: DefaultLayout,
    component: ManageRequestGeneral
  },
  {
    path: "/ManageRequestIssuses",
    layout: DefaultLayout,
    component: ManageRequestIssuses
  },
  {
    path: "/ManageSettingNews",
    layout: DefaultLayout,
    component: ManageSettingNews
  },
  {
    path: "/ManageSubDistrict",
    layout: DefaultLayout,
    component: ManageSubDistrict
  },

  {
    path: "/AddUser",
    layout: DefaultLayout,
    component: Add_user
  },
  {
    path: "/AddPermission",
    layout: DefaultLayout,
    component: Add_permission
  },
  {
    path: "/AddAddress",
    layout: DefaultLayout,
    component: Add_address
  },
  {
    path: "/AddCompany",
    layout: DefaultLayout,
    component: Add_company
  },
  {
    path: "/AddDepartment",
    layout: DefaultLayout,
    component: Add_department
  },
  {
    path: "/AddDistrict",
    layout: DefaultLayout,
    component: Add_district
  },
  {
    path: "/AddEquipment",
    layout: DefaultLayout,
    component: Add_equipment
  },
  {
    path: "/AddImpact",
    layout: DefaultLayout,
    component: Add_impact
  },
  {
    path: "/AddLocation",
    layout: DefaultLayout,
    component: Add_Location
  },
  {
    path: "/AddMessage",
    layout: DefaultLayout,
    component: Add_Message
  },
  {
    path: "/AddModify",
    layout: DefaultLayout,
    component: Add_Modify
  },
  {
    path: "/AddNews",
    layout: DefaultLayout,
    component: Add_News
  },
  {
    path: "/AddPersonContact",
    layout: DefaultLayout,
    component: Add_PersonContact
  },
  {
    path: "/AddPersonResponsible",
    layout: DefaultLayout,
    component: Add_PersonResponsible
  },
  {
    path: "/AddPostalCode",
    layout: DefaultLayout,
    component: Add_PostalCode
  },
  {
    path: "/AddPriority",
    layout: DefaultLayout,
    component: Add_Priority
  },
  {
    path: "/AddProvince",
    layout: DefaultLayout,
    component: Add_Province
  },
  {
    path: "/AddRequestGeneral",
    layout: DefaultLayout,
    component: Add_RequestGeneral
  },
  {
    path: "/AddRequestIssues",
    layout: DefaultLayout,
    component: Add_RequestIssuses
  },
  {
    path: "/AddSettingNews",
    layout: DefaultLayout,
    component: Add_SettingNews
  },
  {
    path: "/AddSubDistrict",
    layout: DefaultLayout,
    component: Add_SubDistrict
  },


  {
    path: "/UpdatePermssion/:id",
    layout: DefaultLayout,
    component: Update_permission
  },
  {
    path: "/UpdateAddress/:id",
    layout: DefaultLayout,
    component: Update_address
  },
  {
    path: "/UpdateCompany/:id",
    layout: DefaultLayout,
    component: Update_company
  },
  {
    path: "/UpdateDepartment/:id",
    layout: DefaultLayout,
    component: Update_department
  },
  {
    path: "/UpdateDistrict/:id",
    layout: DefaultLayout,
    component: Update_district
  },
  {
    path: "/UpdateEquipment/:id",
    layout: DefaultLayout,
    component: Update_equipment
  },
  {
    path: "/UpdateImpact/:id",
    layout: DefaultLayout,
    component: Update_impact
  },
  {
    path: "/UpdateLocation/:id",
    layout: DefaultLayout,
    component: Update_Location
  },
  {
    path: "/UpdateMessage/:id",
    layout: DefaultLayout,
    component: Update_Message
  },
  {
    path: "/UpdateModify/:id",
    layout: DefaultLayout,
    component: Update_Modify
  },
  {
    path: "/UpdateNews/:id",
    layout: DefaultLayout,
    component: Update_News
  },
  {
    path: "/UpdatePersonContact/:id",
    layout: DefaultLayout,
    component: Update_PersonContact
  },
  {
    path: "/UpdatePersonResponsible/:id",
    layout: DefaultLayout,
    component: Update_PersonResponsible
  },
  {
    path: "/UpdatePostalCode/:id",
    layout: DefaultLayout,
    component: Update_PostalCode
  },
  {
    path: "/UpdatePriority/:id",
    layout: DefaultLayout,
    component: Update_Priority
  },
  {
    path: "/UpdateProvince/:id",
    layout: DefaultLayout,
    component: Update_Province
  },
  {
    path: "/UpdateRequestGeneral/:id",
    layout: DefaultLayout,
    component: Update_RequestGeneral
  },
  {
    path: "/UpdateRequestIssuses/:id",
    layout: DefaultLayout,
    component: Update_RequestIssuses
  },
  {
    path: "/UpdateSettingNews/:id",
    layout: DefaultLayout,
    component: Update_SettingNews
  },
  {
    path: "/UpdateSubDistrict/:id",
    layout: DefaultLayout,
    component: Update_SubDistrict
  },
  {
    path: "/UpdateUser/:id",
    layout: DefaultLayout,
    component:   Update_user
  },



  {
    path: "/ViewAddress/:id",
    layout: DefaultLayout,
    component: View_address
  },
  {
    path: "/ViewCompany/:id",
    layout: DefaultLayout,
    component: View_company
  },
  {
    path: "/ViewDepartment/:id",
    layout: DefaultLayout,
    component: View_department
  },
  {
    path: "/ViewDistrict/:id",
    layout: DefaultLayout,
    component: View_district
  },
  {
    path: "/ViewEquipment/:id",
    layout: DefaultLayout,
    component: View_equipment
  },
  {
    path: "/ViewImpact/:id",
    layout: DefaultLayout,
    component: View_impact
  },
  {
    path: "/ViewLocation/:id",
    layout: DefaultLayout,
    component: View_Location
  },
  {
    path: "/ViewMessage/:id",
    layout: DefaultLayout,
    component: View_Message
  },
  {
    path: "/ViewModify/:id",
    layout: DefaultLayout,
    component: View_Modify
  },
  {
    path: "/ViewNews/:id",
    layout: DefaultLayout,
    component: View_News
  },
  {
    path: "/ViewPersonContact/:id",
    layout: DefaultLayout,
    component: View_PersonContact
  },
  {
    path: "/ViewPersonResponsible/:id",
    layout: DefaultLayout,
    component: View_PersonResponsible
  },
  {
    path: "/ViewPostalCode/:id",
    layout: DefaultLayout,
    component: View_PostalCode
  },
  {
    path: "/ViewPriority/:id",
    layout: DefaultLayout,
    component: View_Priority
  },
  {
    path: "/ViewProvince/:id",
    layout: DefaultLayout,
    component: View_Province
  },
  {
    path: "/ViewRequestGeneral/:id",
    layout: DefaultLayout,
    component: View_RequestGeneral
  },
  {
    path: "/ViewRequestIssuses/:id",
    layout: DefaultLayout,
    component: View_RequestIssuses
  },
  {
    path: "/ViewSettingNews/:id",
    layout: DefaultLayout,
    component: View_SettingNews
  },
  {
    path: "/ViewSubDistrict/:id",
    layout: DefaultLayout,
    component: View_SubDistrict
  },
  {
    path: "/ViewUser/:id",
    layout: DefaultLayout,
    component: View_user
  },




  {
    path: "/Report",
    layout: DefaultLayout,
    component: Report
  },



];
