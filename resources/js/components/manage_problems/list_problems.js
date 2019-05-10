import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_Problems extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'Problems Tital','Problems Status','created_at'];
     return (

       <DataTable url="/api/problems_table" columns={columns} headname={" List Problems"} headTablename={"ตารางแสดงข้อมูล"} delete={"ลบ"}   deletefail={"ลบข้อมูลไม่สำเร็จ"} deletesuccess={"ลบข้อมูลสำเร็จ"} />



     )
     }
   }

   export default List_Problems
