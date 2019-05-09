import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_user extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'name', 'email','nameuser','created_at'];
     return (

       <DataTable url="/api/users" columns={columns} headname={" List User - ข้อมูลผู้ใช้งาน "} headTablename={"ตารางแสดงข้อมูลสมาชิก"} edit={"แก้ไข"} delete={"ลบ"}  />



     )
     }
   }

   export default List_user
