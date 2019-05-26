import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_Request extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'request_tital','request_status','created_at','Action'];
     return (

       <DataTable
             url="/api/request_table"
             columns={columns}
             name={"request"}
             headname={" List Request"}
             headTablename={"ตารางแสดงข้อมูล"}
             edit={"แก้ไข"} delete={"ลบ"}
             deletefail={"ลบข้อมูลไม่สำเร็จ"}
             deletesuccess={"ลบข้อมูลสำเร็จ"}
             addlink={"/manage_request/add_request"}
             addbutton={"เพิ่มความต้องการ"}
             delectselect={"ลบข้อมูลที่ถูกเลือก"}
             />



     )
     }
   }

   export default List_Request
