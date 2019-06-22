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


export default [

  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },

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
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
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



];
