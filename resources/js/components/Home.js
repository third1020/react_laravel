import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BoardHome from './BoardHome';



// import { SideNav, Nav } from 'react-sidenav';



class Home extends Component {

   constructor(props) {
      super(props)
      this.state = {
         id: '',
      }
      this.state.id = sessionStorage.getItem("id");
   }


   render() {
      return (
         <div >
            <div class="row" style={{ padding: 10 }}>
               <div class="col-sm-12 col-md-12">
                  <div class="grid card">
                     <div class="card-body">

                        <center></center>

                     </div>
                  </div>
               </div>
            </div>
            <div class="row" style={{ padding: 10 }}>
               <div class="col-sm-12 col-md-12">
                  <div class="grid card">
                     <BoardHome id={this.state.id} />
                  </div>
               </div>
            </div>


         </div>

      );
   }
}

Home.propTypes = {
   id: PropTypes.number,

};

export default Home
