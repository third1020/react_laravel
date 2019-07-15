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

class Update_Modify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client_id: this.props.client_id,
            name: "",
            contact_id: "",
            getcontact: [],
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
            name: this.state.name,
            contact_id: this.state.contact_id
        };
        console.log(insertdata);

        axios
            .put(`/api/modify/update/${this.props.match.params.id}`, insertdata)
            .then(response => {
                Swal.fire("Successfully", "Add data successfully ", "success");

                this.setState({
                    name: "",
                    contact_id: "",
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
            .get(`/api/modify/update/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    name: res.data.user.name,
                    contact_id: res.data.user.contact_id
                });
            })
            .catch(err => {
                console.log(err);
            });

        axios
            .get("/api/contact/index")
            .then(res => {
                this.setState({
                    getcontact: res.data
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    getcontact: []
                });
            });
    }

    render() {
        const { getcontact } = this.state;
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
                                                    Contact
                                                </label>
                                                <FormSelect
                                                    id="feInputState"
                                                    name="contact_id"
                                                    className={`form-control ${
                                                        this.hasErrorFor(
                                                            "contact_id"
                                                        )
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                    value={
                                                        this.state.contact_id
                                                    }
                                                    onChange={
                                                        this.handleFieldChange
                                                    }
                                                >
                                                    <option value="">
                                                        Choose...
                                                    </option>

                                                    {getcontact.map(
                                                        (getcontact, idx) => (
                                                            <option
                                                                key={idx}
                                                                value={
                                                                    getcontact.id
                                                                }
                                                            >
                                                                {
                                                                    getcontact.name
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </FormSelect>
                                                {this.renderErrorFor(
                                                    "contact_id"
                                                )}
                                            </Col>
                                        </Row>

                                        <Button type="submit">
                                            Create New Modify
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

export default HocValidateUser(Update_Modify);
