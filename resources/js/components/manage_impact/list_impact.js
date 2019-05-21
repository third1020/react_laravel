import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_Impact extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'impact_name','impact_value','created_at'];
     return (

       <DataTable url="/api/impact_table" columns={columns} name={"impact"} headname={"List Impact"} headTablename={"ตารางแสดงข้อมูล"}  edit={"แก้ไข"} delete={"ลบ"}   deletefail={"ลบข้อมูลไม่สำเร็จ"} deletesuccess={"ลบข้อมูลสำเร็จ"} />



     )
     }
   }

   export default List_Impact
