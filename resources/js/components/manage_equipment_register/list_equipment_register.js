import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "../DataTable";


   class List_Equipment_register extends Component {
     constructor () {
       super()

       }

     render () {
       const columns = ['id', 'equipment_name','equipment_type','username','department','created_at'];
     return (

       <DataTable
            url="/api/equipment_register_table"
            columns={columns}
            name={"equipment_register"}
            headname={" List Equipment_register"}
            headTablename={"ตารางแสดงข้อมูล"}
            edit={"แก้ไข"} delete={"ลบ"}
            deletefail={"ลบข้อมูลไม่สำเร็จ"}
            deletesuccess={"ลบข้อมูลสำเร็จ"}
            addlink={"/manage_equipment_register/add_equipment_register"}
            addbutton={"เพิ่มเลขทะเบียนอุปกรณ์"}
            delectselect={"ลบข้อมูลที่ถูกเลือก"}
            />



     )
     }
   }

   export default List_Equipment_register
