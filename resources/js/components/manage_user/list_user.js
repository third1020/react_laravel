import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'
   import DataTable from "..//DataTable";

   class List_user extends Component {
     constructor () {
       super()

       }



     render () {
       const columns = ['id', 'name', 'email','created_at'];
     return (
       <DataTable url="/api/users" columns={columns} headname={"รายชื่อผู้ใช้เห็นไหม 5555"} edit={"แก้ไข"} delete={"ลบ"}  />
     )
     }
   }

   export default List_user
