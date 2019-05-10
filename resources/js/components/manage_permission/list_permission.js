import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_Permisson extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'Permission name','created_at'];
     return (

       <DataTable url="/api/permission_table" columns={columns} headname={" List Permission - ข้อมูลสิทธิ์ผู้ใช้ "} headTablename={"ตารางแสดงข้อมูลสิทธิ์ผู้ใช้"} delete={"ลบ"}  one={"permission_name"} deletefail={"ไม่สามารถลบสิทธิ์ผู้ใช้ได้เนื่องจากข้อมูลยังผูกอยู่กับผู้ใช้งาน"} deletesuccess={"ลบข้อมูลสิทธิ์ผู้ใช้สำเร็จ"} />



     )
     }
   }

   export default List_Permisson
