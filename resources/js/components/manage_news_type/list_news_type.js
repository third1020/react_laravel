import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_News_type extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'type_name','created_at'];
     return (

       <DataTable
            url="/api/news_type_table"
            columns={columns}
            name={"news_type"}
            headname={" List News Type"}
            headTablename={"ตารางแสดงข้อมูล"}
            edit={"แก้ไข"} delete={"ลบ"}
            deletefail={"ลบข้อมูลไม่สำเร็จ"}
            deletesuccess={"ลบข้อมูลสำเร็จ"}
            addlink={"/manage_news_type/add_news_type"}
            addbutton={"เพิ่มข่าว"}
            delectselect={"ลบข้อมูลที่ถูกเลือก"}

            />



     )
     }
   }

   export default List_News_type
