import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_Contact extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'Contact Name','Contact Phone','Contact Email','Contact Address','created_at'];
     return (

       <DataTable url="/api/contact_table" columns={columns} name={"contact"} headname={" List Contact - ข้อมูลผู้ติดต่อ "} headTablename={"ตารางแสดงข้อมูลผู้ติดต่อ"} edit={"แก้ไข"} delete={"ลบ"}   deletefail={"ไม่สามารถข้อมูลผู้ติดต่อได้เนื่องจากข้อมูลยังผูกอยู่กับผู้ใช้งาน"} deletesuccess={"ข้อมูลผู้ติดต่อสำเร็จ"} />



     )
     }
   }

   export default List_Contact
