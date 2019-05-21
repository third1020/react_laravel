import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_Equipment_type extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'type_name','created_at'];
     return (

       <DataTable url="/api/equipment_type_table" columns={columns} name={"equipment_type"} headname={" List Equipment Type"} headTablename={"ตารางแสดงข้อมูล"} edit={"แก้ไข"} delete={"ลบ"}   deletefail={"ลบข้อมูลไม่สำเร็จ"} deletesuccess={"ลบข้อมูลสำเร็จ"} />



     )
     }
   }

   export default List_Equipment_type
