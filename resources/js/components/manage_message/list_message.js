import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_Message extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'Message Title','Message From','Message To','Status','created_at'];
     return (

       <DataTable url="/api/message_table" columns={columns} headname={" List Message"} headTablename={"ตารางแสดงข้อมูล"} delete={"ลบ"}   deletefail={"ลบข้อมูลไม่สำเร็จ"} deletesuccess={"ลบข้อมูลสำเร็จ"} />



     )
     }
   }

   export default List_Message
