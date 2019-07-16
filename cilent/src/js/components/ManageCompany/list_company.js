
   import React from 'react';
   import DataTable from "../DataTable";

   import { makeStyles, } from '@material-ui/core/styles';
   import HocValidateUser from "../../../HocValidateUser";

   const drawerWidth = 240;


   function ManageCompany() {


     const columns = ['id', 'name', 'location_id','Action'];


     return (
       <div>

           <DataTable

           url="/api/company"
           columns={columns}
           name={"company"}
           headname={" List Company - ข้อมูลบริษัท "}
           headTablename={"ตารางแสดงข้อมูลบริษัท"}
           edit={"แก้ไข"}
           delete={"ลบ"}
           addlink={"/AddCompany"}
           addbutton={"Add Company"}
           manage={"ManageCompany"}
           updateurl={"UpdateCompany"}
           viewurl ={"ViewCompany"}

                />


       </div>
     );
   }

   export default HocValidateUser(ManageCompany);
