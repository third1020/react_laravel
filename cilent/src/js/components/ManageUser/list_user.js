import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";
   import clsx from 'clsx';
   import { makeStyles, useTheme } from '@material-ui/core/styles';
   import Navigation from './Navigation';

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

   function ManageUser() {

     const classes = useStyles();
     const columns = ['id', 'name', 'email','nameuser','created_at','Action'];


     return (
       <div className={classes.root}>
         <Navigation />
         <main className={classes.content}>
           <div className={classes.toolbar} />



           <DataTable
               url="/api/users"
               columns={columns}
               name={"user"}
               headname={" List User - ข้อมูลผู้ใช้งาน "}
               headTablename={"ตารางแสดงข้อมูลสมาชิก"}
               edit={"แก้ไข"}
               delete={"ลบ"}
               deletefail={"ไม่สามารถลบข้อมูลผู้ใช้งานได้"}
               deletesuccess={"ลบข้อมูลผู้ใช้งานสำเร็จ"}
               addlink={"/manage_user/add_user"}
               addbutton={"เพิ่มผู้ใช้งาน"}
               delectselect={"ลบข้อมูลที่ถูกเลือก"}
                />


         </main>
       </div>
     );
   }

   export default ManageUser;
