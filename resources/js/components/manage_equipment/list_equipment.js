import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_Equipment extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'Equipment Name','Equipment Number','Equipment Detail','created_at'];
     return (

       <DataTable url="/api/equipment_table" columns={columns} headname={" List Equipment"} headTablename={"ตารางแสดงข้อมูล"} delete={"ลบ"}   deletefail={"ลบข้อมูลไม่สำเร็จ"} deletesuccess={"ลบข้อมูลสำเร็จ"} />



     )
     }
   }

   export default List_Equipment
