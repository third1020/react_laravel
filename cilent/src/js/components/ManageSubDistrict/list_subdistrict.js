
   import React from 'react';
   import DataTable from "../DataTable";

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

   function ManageSubDistrict() {

     
     const columns = ['id','name', 'district_id','Action'];


     return (
       <div>

           <DataTable
           url="/api/subdistrict"
           columns={columns}
           name={"subdistrict"}
           headname={" List Sub District - ข้อมูลหมู่บ้าน"}
           headTablename={"ตารางแสดงข้อมูลหมู่บ้าน"}
           edit={"แก้ไข"}
           delete={"ลบ"}
           addlink={"/AddSubDistrict"}
           addbutton={"Add SubDistrict"}
           manage={"ManageSubDistrict"}
           updateurl={"UpdateSubDistrict"}
           viewurl ={"ViewSubDistrict"}
                />


       </div>
     );
   }

   export default HocValidateUser(ManageSubDistrict);
