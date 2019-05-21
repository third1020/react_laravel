import React, {
    Component
} from 'react';


import Header from './Header';
import Dashboard from './Dashboard';
import Image from 'react-bootstrap/Image'
import Profile from './Profile';

import BoardHome from './BoardHome';
import PropTypes from 'prop-types';
// import { SideNav, Nav } from 'react-sidenav';



 class Home extends Component {

   constructor (props) {
     super(props)
     this.state = {
       id: '',

     }



     this.state.id = sessionStorage.getItem("id");


   }


    render() {
        return (
          <div >
             <div class="row" style={{padding:10}}>
                <div class="col-sm-12 col-md-12">
                   <div class="grid card">
                      <div class="card-body">

                      <center><Image src="https://storage.googleapis.com/image_react_laravel/Title%20Home.png" style={{width:'50%',height:'30%'}} fluid /></center>

                      </div>
                   </div>
                </div>
             </div>
             <div class="row" style={{padding:10}}>
               <div class="col-sm-12 col-md-4">
                <Profile id={this.state.id}/>
               </div>
               <div class="col-sm-12 col-md-8">
                  <div class="grid card">

                     <BoardHome id={this.state.id}/>

                  
                  </div>
               </div>
             </div>
             <div class="row">test3</div>
             <div class="row">test4</div>

          </div>

        );
    }
}

Home.propTypes = {
  id: PropTypes.number,

};

export default Home
