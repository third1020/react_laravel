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

class Add_Priority extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client_id: this.props.client_id,
            name: "",
            value: "",

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
            value: this.state.value
        };
        console.log(insertdata);

        axios
            .post("/api/priority/store", insertdata)
            .then(response => {
                Swal.fire("Successfully", "Add data successfully ", "success");

                this.setState({
                    name: "",
                    value: "",
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

    componentDidMount() {}

    render() {
        const { getlocation } = this.state;
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
                                                    Value
                                                </label>
                                                <FormSelect
                                                    id="value"
                                                    name="value"
                                                    className={`form-control ${
                                                        this.hasErrorFor(
                                                            "value"
                                                        )
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                    value={this.state.value}
                                                    onChange={
                                                        this.handleFieldChange
                                                    }
                                                >
                                                    <option value="None">
                                                        None
                                                    </option>
                                                    <option value="Low">
                                                        Low
                                                    </option>
                                                    <option value="Medium">
                                                        Medium
                                                    </option>
                                                    <option value="High">
                                                        High
                                                    </option>
                                                </FormSelect>
                                                {this.renderErrorFor("value")}
                                            </Col>
                                        </Row>

                                        <Button type="submit">
                                            Create New Priority
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

export default HocValidateUser(Add_Priority);
