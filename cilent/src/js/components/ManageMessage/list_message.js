import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_Message extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'message_title','message_from','message_to','status','created_at','Action'];
     return (

       <DataTable
            url="/api/message_table"
            columns={columns}
            name={"message"}
            headname={" List Message"}
            headTablename={"ตารางแสดงข้อมูล"}
            edit={"แก้ไข"} delete={"ลบ"}
            deletefail={"ลบข้อมูลไม่สำเร็จ"}
            deletesuccess={"ลบข้อมูลสำเร็จ"}
            addlink={"/manage_message/add_message"}
            addbutton={"เพิ่มข้อความ"}
            delectselect={"ลบข้อมูลที่ถูกเลือก"}
            />



     )
     }
   }

   export default List_Message
