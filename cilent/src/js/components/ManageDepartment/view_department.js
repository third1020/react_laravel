import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormInput,
    FormGroup,
    FormCheckbox,
    FormSelect,
    Button,
    Container
} from 'shards-react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { ToastContainer } from 'react-toastr';
import '../../../css/alert.css';
import '../../../css/animate.css';
import HocValidateUser from '../../../HocValidateUser';
let container;

class View_department extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client_id: this.props.client_id,
            name: '',

            errors: []
        };

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleCreate(event) {
        event.preventDefault();
        const { history } = this.props;

        const insertdata = {
            client_id: this.props.client_id,
            name: this.state.name
        };
    }

    hasErrorFor(field) {
        return !!this.state.errors[field];
    }

    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className="invalid-feedback">
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            );
        }
    }

    componentDidMount() {
        axios
            .get(`/api/department/update/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    name: res.data.user.name
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div style={{ paddingTop: '30px' }}>
                <Container>
                    <ListGroup flush>
                        <ListGroupItem className="p-3">
                            <Row>
                                <Col>
                                    <Form>
                                        <Row form>
                                            <Col md="12" className="form-group">
                                                <label htmlFor="feEmailAddress">
                                                    Name
                                                </label>
                                                <FormInput
                                                    id="name"
                                                    name="name"
                                                    className={`form-control ${
                                                        this.hasErrorFor('name')
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`}
                                                    placeholder="กรอกชื่อผู้ใช้"
                                                    type="text"
                                                    value={this.state.name}
                                                    onChange={
                                                        this.handleFieldChange
                                                    }
                                                    disabled
                                                />
                                                {this.renderErrorFor('name')}
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                </Container>
            </div>
        );
    }
}

export default HocValidateUser(View_department);
