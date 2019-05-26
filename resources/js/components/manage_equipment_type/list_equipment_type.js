import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_Equipment_type extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'type_name','created_at','Action'];
     return (

       <DataTable
            url="/api/equipment_type_table"
            columns={columns}
            name={"equipment_type"}
            headname={" List Equipment Type"}
            headTablename={"ตารางแสดงข้อมูล"}
            edit={"แก้ไข"} delete={"ลบ"}
            deletefail={"ลบข้อมูลไม่สำเร็จ"}
            deletesuccess={"ลบข้อมูลสำเร็จ"}
            addlink={"/manage_equipment_type/add_equipment_type"}
            addbutton={"เพิ่มประเภทอุปกรณ์"}
            delectselect={"ลบข้อมูลที่ถูกเลือก"}
            />



     )
     }
   }

   export default List_Equipment_type
