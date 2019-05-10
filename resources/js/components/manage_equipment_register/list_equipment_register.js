import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_Equipment_register extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'Equipment Register Name','Equipment Register Type','Username','Department','created_at'];
     return (

       <DataTable url="/api/equipment_register_table" columns={columns} headname={" List Equipment_register"} headTablename={"ตารางแสดงข้อมูล"} delete={"ลบ"}   deletefail={"ลบข้อมูลไม่สำเร็จ"} deletesuccess={"ลบข้อมูลสำเร็จ"} />



     )
     }
   }

   export default List_Equipment_register
