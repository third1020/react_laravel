import React, { Component } from 'react';
import PropTypes from 'prop-types';
import View_user from './User/view_user';
// import Update_permission from './manage_permission/update_permission';
// import Update_contact from './manage_contact/update_contact';
// import Update_equipment from './manage_equipment/update_equipment';
// import Update_equipment_register from './manage_equipment_register/update_equipment_register';
// import Update_equipment_type from './manage_equipment_type/update_equipment_type';
// import Update_impact from './manage_impact/update_impact';
// import Update_incident from './manage_incident/update_incident';
// import Update_message from './manage_message/update_message';
// import Update_news from './manage_news/update_news';
// import Update_news_type from './manage_news_type/update_news_type';
// import Update_priority from './manage_priority/update_priority';
// import Update_problems from './manage_problems/update_problems';
// import Update_request from './manage_request/update_request';

// { this.props.ChooseUpdateForm == "permission" ? (<Update_permission id={this.props.id}/>) :null }
// { this.props.ChooseUpdateForm == "contact" ? (<Update_contact id={this.props.id}/>) :null }
// { this.props.ChooseUpdateForm == "equipment" ? (<Update_equipment id={this.props.id}/>) :null }
// { this.props.ChooseUpdateForm == "equipment_register" ? (<Update_equipment_register id={this.props.id}/>) :null }
// { this.props.ChooseUpdateForm == "equipment_type" ? (<Update_equipment_type id={this.props.id}/>) :null }
// { this.props.ChooseUpdateForm == "impact" ? (<Update_impact id={this.props.id}/>) :null }
// { this.props.ChooseUpdateForm == "incident" ? (<Update_incident id={this.props.id}/>) :null }
// { this.props.ChooseUpdateForm == "message" ? (<Update_message id={this.props.id}/>) :null }
// { this.props.ChooseUpdateForm == "news" ? (<Update_news id={this.props.id}/>) :null }
// { this.props.ChooseUpdateForm == "news_type" ? (<Update_news_type id={this.props.id}/>) :null }
// { this.props.ChooseUpdateForm == "priority" ? (<Update_priority id={this.props.id}/>) :null }
// { this.props.ChooseUpdateForm == "problems" ? (<Update_problems id={this.props.id}/>) :null }
// { this.props.ChooseUpdateForm == "request" ? (<Update_request id={this.props.id}/>) :null }

import { Button, Form } from 'react-bootstrap';

export default class SelectViewForm extends Component {
    render() {
        return (
            <div>
                {this.props.ChooseUpdateForm == 'user' ? (
                    <View_user
                        id={this.props.id}
                        updateurl={this.props.updateurl}
                    />
                ) : null}
            </div>
        );
    }
}

SelectViewForm.propTypes = {
    id: PropTypes.number,
    ChooseUpdateForm: PropTypes.string
};
