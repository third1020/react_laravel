import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_News extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'news_title','news_detail','news_types_id','created_at','Action'];
     return (

       <DataTable
           url="/api/news_table"
           columns={columns}
           name={"news"}
           headname={" List News"}
           headTablename={"ตารางแสดงข้อมูล"}
           edit={"แก้ไข"} delete={"ลบ"}
           deletefail={"ลบข้อมูลไม่สำเร็จ"}
           deletesuccess={"ลบข้อมูลสำเร็จ"}
           addlink={"/manage_news/add_news"}
           addbutton={"เพิ่มข่าว"}
           delectselect={"ลบข้อมูลที่ถูกเลือก"}
           />



     )
     }
   }

   export default List_News
