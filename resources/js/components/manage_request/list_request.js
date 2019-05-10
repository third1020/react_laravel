import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_Request extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'Request Tital','Request Status','created_at'];
     return (

       <DataTable url="/api/request_table" columns={columns} headname={" List Request"} headTablename={"ตารางแสดงข้อมูล"} delete={"ลบ"}   deletefail={"ลบข้อมูลไม่สำเร็จ"} deletesuccess={"ลบข้อมูลสำเร็จ"} />



     )
     }
   }

   export default List_Request
