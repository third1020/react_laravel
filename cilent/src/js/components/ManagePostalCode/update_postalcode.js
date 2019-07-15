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

class Update_PostalCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            sub_district_id: '',
            district_id: '',
            province_id: '',

            getsub_district: [],
            getdistrict: [],
            getprovince: [],
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
            code: this.state.code,
            sub_district_id: this.state.sub_district_id,
            district_id: this.state.district_id,
            province_id: this.state.province_id
        };
        console.log(insertdata);

        axios
            .put(
                `/api/postalcode/update/${this.props.match.params.id}`,
                insertdata
            )
            .then(response => {
                Swal.fire('Successfully', 'Add data successfully ', 'success');

                this.setState({
                    code: '',
                    sub_district_id: '',
                    district_id: '',
                    province_id: '',
                    errors: []
                });
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                });
                console.log(error.response.data.errors);

                Swal.fire('Errors', 'check the value of a form field', 'error');
            });
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
            .get('/api/subdistrict/index')
            .then(res => {
                this.setState({
                    getsubdistrict: res.data
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    getsubdistrict: []
                });
            });

        axios
            .get('/api/district/index')
            .then(res => {
                this.setState({
                    getdistrict: res.data
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    getdistrict: []
                });
            });

        axios
            .get('/api/province/index')
            .then(res => {
                this.setState({
                    getprovince: res.data
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    getprovince: []
                });
            });

        axios
            .get(`/api/postalcode/update/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    code: res.data.user.code,
                    sub_district_id: res.data.user.sub_district_id,
                    district_id: res.data.user.district_id,
                    province_id: res.data.user.province_id
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    getprovince: []
                });
            });
    }

    render() {
        const { getsubdistrict, getdistrict, getprovince } = this.state;
        return (
            <div style={{ paddingTop: '30px' }}>
                <Container>
                    <ListGroup flush>
                        <ListGroupItem className="p-3">
                            <Row>
                                <Col>
                                    <Form onSubmit={this.handleCreate}>
                                        <Row form>
                                            <Col md="12" className="form-group">
                                                <label htmlFor="feEmailAddress">
                                                    PostalCode
                                                </label>
                                                <FormInput
                                                    id="code"
                                                    name="code"
                                                    className={`form-control ${
                                                        this.hasErrorFor('code')
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`}
                                                    placeholder="กรอกชื่อผู้ใช้"
                                                    type="text"
                                                    value={this.state.code}
                                                    onChange={
                                                        this.handleFieldChange
                                                    }
                                                />
                                                {this.renderErrorFor('code')}
                                            </Col>
                                        </Row>

                                        <Row form>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feInputState">
                                                    District
                                                </label>
                                                <FormSelect
                                                    id="district_id"
                                                    name="district_id"
                                                    className={`form-control ${
                                                        this.hasErrorFor(
                                                            'district_id'
                                                        )
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`}
                                                    value={
                                                        this.state.district_id
                                                    }
                                                    onChange={
                                                        this.handleFieldChange
                                                    }
                                                >
                                                    <option value="">
                                                        Choose...
                                                    </option>

                                                    {getdistrict.map(
                                                        (getdistrict, idx) => (
                                                            <option
                                                                key={idx}
                                                                value={
                                                                    getdistrict.id
                                                                }
                                                            >
                                                                {
                                                                    getdistrict.name
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </FormSelect>
                                                {this.renderErrorFor(
                                                    'district_id'
                                                )}
                                            </Col>
                                        </Row>

                                        <Row form>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feInputState">
                                                    Sub District
                                                </label>
                                                <FormSelect
                                                    id="sub_district_id"
                                                    name="sub_district_id"
                                                    className={`form-control ${
                                                        this.hasErrorFor(
                                                            'sub_district_id'
                                                        )
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`}
                                                    value={
                                                        this.state
                                                            .sub_district_id
                                                    }
                                                    onChange={
                                                        this.handleFieldChange
                                                    }
                                                >
                                                    <option value="">
                                                        Choose...
                                                    </option>

                                                    {getsubdistrict.map(
                                                        (
                                                            getsubdistrict,
                                                            idx
                                                        ) => (
                                                            <option
                                                                key={idx}
                                                                value={
                                                                    getsubdistrict.id
                                                                }
                                                            >
                                                                {
                                                                    getsubdistrict.name
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </FormSelect>
                                                {this.renderErrorFor(
                                                    'sub_district_id'
                                                )}
                                            </Col>
                                        </Row>

                                        <Row form>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feInputState">
                                                    Province
                                                </label>
                                                <FormSelect
                                                    id="province_id"
                                                    name="province_id"
                                                    className={`form-control ${
                                                        this.hasErrorFor(
                                                            'province_id'
                                                        )
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`}
                                                    value={
                                                        this.state.province_id
                                                    }
                                                    onChange={
                                                        this.handleFieldChange
                                                    }
                                                >
                                                    <option value="">
                                                        Choose...
                                                    </option>

                                                    {getprovince.map(
                                                        (getprovince, idx) => (
                                                            <option
                                                                key={idx}
                                                                value={
                                                                    getprovince.id
                                                                }
                                                            >
                                                                {
                                                                    getprovince.name
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </FormSelect>
                                                {this.renderErrorFor(
                                                    'province_id'
                                                )}
                                            </Col>
                                        </Row>

                                        <Button type="submit">
                                            Create New PostalCode
                                        </Button>
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

export default HocValidateUser(Update_PostalCode);
