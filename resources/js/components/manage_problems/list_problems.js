import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_Problems extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'problems_tital','problems_status','created_at'];
     return (

       <DataTable url="/api/problems_table" columns={columns} name={"problems"} headname={" List Problems"} headTablename={"ตารางแสดงข้อมูล"} edit={"แก้ไข"} delete={"ลบ"}   deletefail={"ลบข้อมูลไม่สำเร็จ"} deletesuccess={"ลบข้อมูลสำเร็จ"} />



     )
     }
   }

   export default List_Problems
