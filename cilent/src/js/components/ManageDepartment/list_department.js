
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

   function ManageDepartment() {


     const columns = ['id', 'name','Action'];


     return (
       <div>

           <DataTable

           url="/api/department"
           columns={columns}
           name={"department"}
           headname={" List Department - ข้อมูลแผนก "}
           headTablename={"ตารางแสดงข้อมูลแผนก"}
           edit={"แก้ไข"}
           delete={"ลบ"}
           addlink={"/AddDepartment"}
           addbutton={"Add Department"}
           manage={"ManageDepartment"}
           updateurl={"UpdateDepartment"}
           viewurl ={"ViewDepartment"}
                />


       </div>
     );
   }

   export default HocValidateUser(ManageDepartment);
