import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Update_user from './manage_user/update_user';
import Update_permission from './manage_permission/update_permission';
import Update_contact from './manage_contact/update_contact';





import { Button , Form} from 'react-bootstrap';

export default class Select_update extends Component {
    render() {
        return (

          <div>

          { this.props.ChooseUpdateForm == "user" ? (<Update_user id={this.props.id}/>) :null }
          { this.props.ChooseUpdateForm == "permission" ? (<Update_permission id={this.props.id}/>) :null }
          { this.props.ChooseUpdateForm == "contact" ? (<Update_contact id={this.props.id}/>) :null }

          </div>







        );
    }
}

Select_update.propTypes = {
  id: PropTypes.number,
  ChooseUpdateForm: PropTypes.string



};
