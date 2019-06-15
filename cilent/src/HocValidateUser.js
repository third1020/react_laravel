
import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

const HocValidateUser = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
              permission_name : '',
              ManageUser : '',
              ManageNews : '',
              ManageMessage :'',
              ManageEquipment : '',
              ManageRequipment : '',
              ManageProblem : '',
              ManageIncident : '',
              ManageContact :'',
              ManageImpact : '',
              ManagePriority :'',
              ManageSolution : '',
              Report :''
            };
        }

        getPermission = () => {
          const { history } = this.props
    return axios
        .get('api/profile', {
            headers: { Authorization: `Bearer ${sessionStorage.Token}` }
        })
        .then(response => {
          console.log(response.data);

          if(response.status === 200){
            axios.post('api/permission/getPermission',{
              permission_id: response.data.user.permission_id
            }).then(res => {
              sessionStorage.setItem('permission_name',res.data.getpermission.permission_name);
              sessionStorage.setItem('ManageUser',res.data.getpermission.ManageUser);
              sessionStorage.setItem('ManageNews',res.data.getpermission.ManageUser);
              sessionStorage.setItem('ManageMessage',res.data.getpermission.ManageUser);
              sessionStorage.setItem('ManageEquipment',res.data.getpermission.ManageEquipment);
              sessionStorage.setItem('ManageRequipment',res.data.getpermission.ManageRequipment);
              sessionStorage.setItem('ManageProblem',res.data.getpermission.ManageProblem);
              sessionStorage.setItem('ManageIncident',res.data.getpermission.ManageIncident);
              sessionStorage.setItem('ManageContact',res.data.getpermission.ManageContact);
              sessionStorage.setItem('ManageImpact',res.data.getpermission.ManageImpact);
              sessionStorage.setItem('ManagePriority',res.data.getpermission.ManagePriority);
              sessionStorage.setItem('ManageSolution',res.data.getpermission.ManageSolution);
              sessionStorage.setItem('Report',res.data.getpermission.Report);

            }).catch(err => {
              console.log(err);
            })
          }
        })
        .catch(err => {
          Swal.fire(
              'คุณไม่มีสิทธิ์เข้าถึง url นี้',
              'กรุณาทำการล็อคอินใหม่',
              'error'
          )
          history.push('/');
            console.log(err)
        })
}

        componentDidMount() {
          this.getPermission()

        }

        render() {
            const {permission_name,ManageUser,ManageNews,ManageMessage,ManageEquipment,Report,
              ManageRequipment,ManageProblem,ManageIncident,ManageContact,ManageImpact,ManagePriority,ManageSolution} = this.state;
            return(
                <div>
                    <WrappedComponent{...this.props} permission_name={permission_name}  />
                </div>
            )
        }
    }
};
export default HocValidateUser;
