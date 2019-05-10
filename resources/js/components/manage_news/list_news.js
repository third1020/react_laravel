import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_News extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'News Title','News type','created_at'];
     return (

       <DataTable url="/api/news_table" columns={columns} headname={" List News"} headTablename={"ตารางแสดงข้อมูล"} delete={"ลบ"}   deletefail={"ลบข้อมูลไม่สำเร็จ"} deletesuccess={"ลบข้อมูลสำเร็จ"} />



     )
     }
   }

   export default List_News
