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
import ManageUser from "./js/components/User/list_user";
import Add_user from "./js/components/User/add_user";
import BlogPosts from "./views/BlogPosts";

var permission = [
  "ManageUser",
  "ManageNews",
  "ManageMessage",
  "ManageEquipment",
  "ManageRequipment",
  "ManageProblem",
  "ManageIncident",
  "ManageContact",
  "ManageImpact",
  "ManagePriority",
  "ManageSolution",
  "Report"
];
export default [

  {
    path: "/ManageNews",
    layout: DefaultLayout,
    component: Errors
  },

  {
    path: "/ManageMessage",
    layout: DefaultLayout,
    component: Errors
  },

  {
    path: "/ManageEquipment",
    layout: DefaultLayout,
    component: Errors
  },

  {
    path: "/ManageRequipment",
    layout: DefaultLayout,
    component: Errors
  },

  {
    path: "/ManageProblem",
    layout: DefaultLayout,
    component: Errors
  },

  {
    path: "/ManageIncident",
    layout: DefaultLayout,
    component: Errors
  },

  {
    path: "/ManageIncident",
    layout: DefaultLayout,
    component: Errors
  },

  {
    path: "/ManageContact",
    layout: DefaultLayout,
    component: Errors
  },

  {
    path: "/ManageContact",
    layout: DefaultLayout,
    component: Errors
  },

  {
    path: "/ManageContact",
    layout: DefaultLayout,
    component: Errors
  },

  {
    path: "/ManageContact",
    layout: DefaultLayout,
    component: Errors
  },

  {
    path: "/ManageImpact",
    layout: DefaultLayout,
    component: Errors
  },

  {
    path: "/ManagePriority",
    layout: DefaultLayout,
    component: Errors
  },

  {
    path: "/ManageSolution",
    layout: DefaultLayout,
    component: Errors
  },

  {
    path: "/Report",
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
    path: "/ManageUser",
    layout: DefaultLayout,
    component: ManageUser
  },
  {
    path: "/AddUser",
    layout: DefaultLayout,
    component: Add_user
  },

  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },

];
