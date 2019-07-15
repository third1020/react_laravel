import React, { Component } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
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
} from "shards-react";
import Swal from "sweetalert2";
import axios from "axios";
import { ToastContainer } from "react-toastr";
import "../../../css/alert.css";
import "../../../css/animate.css";
import HocValidateUser from "../../../HocValidateUser";
let container;

class Add_district extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            province_id: "",

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
            name: this.state.name,
            province_id: this.state.province_id
        };
        console.log(insertdata);

        axios
            .post("/api/district/store", insertdata)
            .then(response => {
                Swal.fire("Successfully", "Add data successfully ", "success");

                this.setState({
                    name: "",
                    province_id: "",
                    errors: []
                });
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                });
                console.log(error.response.data.errors);

                Swal.fire("Errors", "check the value of a form field", "error");
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
            .get("/api/province/index")
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
    }

    render() {
        const { getprovince } = this.state;
        return (
            <div style={{ paddingTop: "30px" }}>
                <Container>
                    <ListGroup flush>
                        <ListGroupItem className="p-3">
                            <Row>
                                <Col>
                                    <Form onSubmit={this.handleCreate}>
                                        <Row form>
                                            <Col md="12" className="form-group">
                                                <label htmlFor="feEmailAddress">
                                                    Name
                                                </label>
                                                <FormInput
                                                    id="name"
                                                    name="name"
                                                    className={`form-control ${
                                                        this.hasErrorFor("name")
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                    placeholder="กรอกชื่อผู้ใช้"
                                                    type="text"
                                                    value={this.state.name}
                                                    onChange={
                                                        this.handleFieldChange
                                                    }
                                                />
                                                {this.renderErrorFor("name")}
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
                                                            "province_id"
                                                        )
                                                            ? "is-invalid"
                                                            : ""
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
                                                    "province_id"
                                                )}
                                            </Col>
                                        </Row>

                                        <Button type="submit">
                                            Create New District
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

export default HocValidateUser(Add_district);
