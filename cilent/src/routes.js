import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";

import ManageUser from "./js/components/User/list_user";
import ManageAddress from "./js/components/ManageAddress/list_address";
import ManagePermission from "./js/components/ManagePermission/list_permission";
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
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/ManageImpact",
    layout: DefaultLayout,
    component: Errors
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
