import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_Equipment extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'equipment_name','equipment_number','contact_detail','created_at'];
     return (

       <DataTable url="/api/equipment_table" columns={columns} name={"equipment"} headname={" List Equipment"} headTablename={"ตารางแสดงข้อมูล"} edit={"แก้ไข"} delete={"ลบ"}   deletefail={"ลบข้อมูลไม่สำเร็จ"} deletesuccess={"ลบข้อมูลสำเร็จ"} />



     )
     }
   }

   export default List_Equipment
