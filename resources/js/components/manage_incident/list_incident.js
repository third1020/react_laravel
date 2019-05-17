import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_Incident extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'Incident Title','Incident Detail','Incident status','created_at'];
     return (

       <DataTable url="/api/incident_table" columns={columns} name={"incident"} headname={" List Incident"} headTablename={"ตารางแสดงข้อมูล"} edit={"แก้ไข"} delete={"ลบ"}   deletefail={"ลบข้อมูลไม่สำเร็จ"} deletesuccess={"ลบข้อมูลสำเร็จ"} />



     )
     }
   }

   export default List_Incident
