import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_Priority extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'priority_name','priority_status','created_at','Action'];
     return (

       <DataTable
            url="/api/priority_table"
            columns={columns}
            name={"priority"}
            headname={" List Priority"}
            headTablename={"ตารางแสดงข้อมูล"}
            edit={"แก้ไข"} delete={"ลบ"}
            deletefail={"ลบข้อมูลไม่สำเร็จ"}
            deletesuccess={"ลบข้อมูลสำเร็จ"}
            addlink={"/manage_priority/add_priority"}
            addbutton={"เพิ่มผลกระทบ"}
            delectselect={"ลบข้อมูลที่ถูกเลือก"} />



     )
     }
   }

   export default List_Priority
