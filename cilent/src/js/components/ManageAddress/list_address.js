import axios from 'axios'
   import React, { Component } from 'react'
   import DataTable from "../DataTable";
   import clsx from 'clsx';
   import { makeStyles, useTheme } from '@material-ui/core/styles';
   import HocValidateUser from "../../../HocValidateUser";

   const drawerWidth = 240;

   const useStyles = makeStyles(theme => ({
     root: {
       display: 'flex',
     },
     appBar: {
       zIndex: theme.zIndex.drawer + 1,
       transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
       }),
     },
     appBarShift: {
       marginLeft: drawerWidth,
       width: `calc(100% - ${drawerWidth}px)`,
       transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
       }),
     },
     menuButton: {
       marginRight: 36,
     },
     hide: {
       display: 'none',
     },
     drawer: {
       width: drawerWidth,
       flexShrink: 0,
       whiteSpace: 'nowrap',
     },
     drawerOpen: {
       width: drawerWidth,
       transition: theme.transitions.create('width', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
       }),
     },
     drawerClose: {
       transition: theme.transitions.create('width', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
       }),
       overflowX: 'hidden',
       width: theme.spacing(7) + 1,
       [theme.breakpoints.up('sm')]: {
         width: theme.spacing(9) + 1,
       },
     },
     toolbar: {
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'flex-end',
       padding: '0 8px',
       ...theme.mixins.toolbar,
     },
     content: {
       flexGrow: 1,
       padding: theme.spacing(3),
     },
   }));

   function ManageAddress() {

     const classes = useStyles();
     const columns = ['id','province_id', 'district_id', 'sub_district_id','postal_code_id','Action'];


     return (
       <div>

           <DataTable

               url="/api/address"
               updateurl="/api/address/update"
               columns={columns}
               name={"address"}
               headname={" List Address - ข้อมูลที่อยู่ "}
               headTablename={"ตารางแสดงข้อมูลที่อยู่"}
               edit={"แก้ไข"}
               delete={"ลบ"}
               addlink={"/AddAddress"}
               addbutton={"Add Address"}
                />


       </div>
     );
   }

   export default HocValidateUser(ManageAddress);
