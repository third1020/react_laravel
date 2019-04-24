import axios from 'axios'
   import React, { Component } from 'react'
   import { Link } from 'react-router-dom'

   class List_user extends Component {
     constructor () {
       super()
       this.state = {
         getuser: ['']
       }
     }

     componentDidMount () {
       axios.get('/api/permission').then(response => {
         this.setState({
           getuser: response.data
         })
       })
     }

     render () {
       const { getuser } = this.state
       return (
         <div className='container py-4' >
           <div style={{paddingLeft: '200' ,paddingRight: '5'}}>
             <div className='col-md-12'>
               <div className='card'>
                 <div className='card-header'>รายชื่อผู้ใช้งาน</div>
                 <div className='card-body'>
                 <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                   Create new project
                 </Link>
                 <ul className='list-group list-group-flush'>
                   {getuser.map(getuser => (
                     <Link
                       className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                       to={`/${getuser.id}`}
                       key={getuser.id}
                     >
                       {getuser.name}
                       <span className='badge badge-primary badge-pill'>
                         {getuser.id}
                       </span>
                     </Link>
                   ))}
                 </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
       )
     }
   }

   export default List_user
