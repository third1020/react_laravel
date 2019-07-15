import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const HocValidateUser = WrappedComponent => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                cilent_id: '',
                permission_name: '',
                ManageUser: '',
                ManageNews: '',
                ManageMessage: '',
                ManageEquipment: '',
                ManageRequipment: '',
                ManageProblem: '',
                ManageIncident: '',
                ManageContact: '',
                ManageImpact: '',
                ManagePriority: '',
                ManageSolution: '',
                Report: ''
            };
        }

        getPermission = () => {
            const { history } = this.props;
            return axios
                .get('/api/profile', {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.Token}`
                    }
                })
                .then(response => {
                    if (response.status === 200) {
                        this.setState({
                            cilent_id: response.data.user.id
                        });
                    }
                })
                .catch(err => {
                    Swal.fire(
                        'คุณไม่มีสิทธิ์เข้าถึง url นี้',
                        'กรุณาทำการล็อคอินใหม่',
                        'error'
                    );
                    history.push('/');
                    console.log(err);
                });
        };

        componentDidMount() {
            this.getPermission();
        }

        render() {
            const {
                cilent_id,
                permission_name,
                ManageUser,
                ManageNews,
                ManageMessage,
                ManageEquipment,
                Report,
                ManageRequipment,
                ManageProblem,
                ManageIncident,
                ManageContact,
                ManageImpact,
                ManagePriority,
                ManageSolution
            } = this.state;
            return (
                <div>
                    <WrappedComponent
                        {...this.props}
                        permission_name={permission_name}
                        client_id={cilent_id}
                    />
                </div>
            );
        }
    };
};
export default HocValidateUser;
