import React, { Component } from 'react';



import { Button , Form} from 'react-bootstrap';

export default class Success extends Component {
    render() {
        return (

          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
              <div class="alert alert-success" role="alert">
          This is a success alert—check it out!
            <label>  This is a success alert—check it out!</label>
        </div>
              </div>
            </div>
          </div>



        );
    }
}
