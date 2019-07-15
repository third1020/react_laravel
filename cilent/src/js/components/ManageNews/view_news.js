import React, { Component } from "react";
import ReactDOM from "react-dom";
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

import HocValidateUser from "../../../HocValidateUser";

import "../../../css/froala-editor/froala_style.min.css";
import "../../../css/froala-editor/froala_editor.pkgd.min.css";

import FroalaEditor from "react-froala-wysiwyg";
import FroalaEditorImg from "react-froala-wysiwyg/FroalaEditorImg";

let container;

class View_News extends Component {
    constructor(props) {
        super(props);
        this.config = {
            reactIgnoreAttrs: ["tmpattr"],
            placeholderText: "กรอกรายละเอียดข้อความ",
            heightMin: 250,
            heightMax: 400,
            autoFocus: true,
            fontFamilySelection: true,
            fontSizeSelection: true,
            tabSpaces: 4,
            imageUpload: true,
            videoUpload: true,
            pluginsEnabled: [
                "align",
                "charCounter",
                "codeBeautifier",
                "codeView",
                "colors",
                "draggable",
                "embedly",
                "emoticons",
                "entities",
                "file",
                "fontFamily",
                "fontSize",
                "fullscreen",
                "image",
                "imageManager",
                "inlineStyle",
                "lineBreaker",
                "link",
                "lists",
                "paragraphFormat",
                "paragraphStyle",
                "quickInsert",
                "quote",
                "save",
                "table",
                "url",
                "video",
                "wordPaste"
            ],
            toolbarButtons: [
                "bold",
                "italic",
                "underline",
                "strikeThrough",
                "subscript",
                "superscript",
                "|",
                "fontFamily",
                "fontSize",
                "color",
                "inlineStyle",
                "paragraphStyle",
                "|",
                "paragraphFormat",
                "align",
                "formatOL",
                "formatUL",
                "outdent",
                "indent",
                "quote",
                "check",
                "|",
                "insertLink",
                "insertImage",
                "embedly",
                "insertFile",
                "insertTable",
                "|",
                "emoticons",
                "specialCharacters",
                "insertHR",
                "selectAll",
                "clearFormatting",
                "|",
                "spellChecker",
                "help",
                "html",
                "|",
                "undo",
                "redo"
            ],
            toolbarButtonsMD: [
                "bold",
                "italic",
                "underline",
                "strikeThrough",
                "subscript",
                "superscript",
                "|",
                "fontFamily",
                "fontSize",
                "color",
                "inlineStyle",
                "paragraphStyle",
                "|",
                "paragraphFormat",
                "align",
                "formatOL",
                "formatUL",
                "outdent",
                "indent",
                "quote",
                "check",
                "|",
                "insertLink",
                "insertImage",
                "embedly",
                "insertFile",
                "insertTable",
                "|",
                "emoticons",
                "specialCharacters",
                "insertHR",
                "selectAll",
                "clearFormatting",
                "|",
                "spellChecker",
                "help",
                "html",
                "|",
                "undo",
                "redo"
            ],
            toolbarButtonsSM: [
                "bold",
                "italic",
                "underline",
                "strikeThrough",
                "|",
                "fontFamily",
                "fontSize",
                "color",
                "|",
                "align",
                "formatOL",
                "formatUL",
                "outdent",
                "indent",
                "quote",
                "check",
                "|",
                "insertLink",
                "insertImage",
                "embedly",
                "insertFile",
                "insertTable",
                "|",
                "emoticons",
                "specialCharacters",
                "insertHR",
                "selectAll",
                "clearFormatting",
                "|",
                "spellChecker",
                "help",
                "html",
                "|",
                "undo",
                "redo"
            ],
            toolbarButtonsXS: [
                "bold",
                "italic",
                "underline",
                "|",
                "fontFamily",
                "fontSize",
                "color",
                "|",
                "align",
                "formatOL",
                "formatUL",
                "outdent",
                "indent",
                "check",
                "|",
                "insertLink",
                "insertImage",
                "insertFile",
                "insertTable",
                "|",
                "insertHR",
                "selectAll",
                "clearFormatting",
                "|",
                "spellChecker",
                "|",
                "undo",
                "redo"
            ],
            imageUploadParam: "file",
            imageUploadURL: "/api/uploadImage",
            imageUploadMethod: "POST",
            // Set max image size to 5MB.
            imageMaxSize: 5 * 1024 * 1024,
            // Allow to upload PNG and JPG.
            imageAllowedTypes: ["jpeg", "jpg", "png"],
            fileUploadParam: "file",
            fileUploadURL: "/api/uploadImage",
            fileUploadMethod: "POST",
            fileMaxSize: 20 * 1024 * 1024, // 10MB
            events: {
                "image.beforeUpload": function(images) {
                    // Return false if you want to stop the image upload.
                    console.log(images[0]);
                    if (images[0] !== "") {
                        return true;
                    }
                },
                "image.inserted": function($img, response) {
                    // Image was inserted in the editor.
                    console.log($img[0]);
                    console.log(response);
                }
            }
        };
        this.state = {
            client_id: this.props.client_id,
            name: "",
            detail: "",
            setting_news_id: "",
            getsetting_news: [],
            errors: []
        };

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
    }

    handleModelChange(detail) {
        this.setState({
            detail: detail
        });
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
            detail: this.state.detail,
            setting_news_id: this.state.setting_news_id
        };
        console.log(insertdata);

        axios
            .put(`/api/news/update/${this.props.match.params.id}`, insertdata)
            .then(response => {
                Swal.fire("Successfully", "Add data successfully ", "success");

                this.setState({
                    tital: "",
                    detail: "",
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
            .get("/api/settingnews/index")
            .then(res => {
                this.setState({
                    getsetting_news: res.data
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    getsetting_news: []
                });
            });

        axios
            .get(`/api/news/update/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    name: res.data.user.name,
                    detail: res.data.user.detail,
                    setting_news_id: res.data.user.setting_news_id
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const { getsetting_news } = this.state;
        return (
            <div style={{ paddingTop: "30px" }}>
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
                                            <Col xs="12" className="form-group">
                                                <div className="form-group">
                                                    <label htmlFor="detail">
                                                        Detail
                                                    </label>

                                                    <FroalaEditor
                                                        className={`form-control ${
                                                            this.hasErrorFor(
                                                                "detail"
                                                            )
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        tag="textarea"
                                                        config={this.config}
                                                        model={
                                                            this.state.detail
                                                        }
                                                        onModelChange={
                                                            this
                                                                .handleModelChange
                                                        }
                                                    />
                                                    {this.renderErrorFor(
                                                        "detail"
                                                    )}
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row form>
                                            <Col md="4" className="form-group">
                                                <label htmlFor="feInputState">
                                                    Setting News
                                                </label>
                                                <FormSelect
                                                    id="setting_news_id"
                                                    name="setting_news_id"
                                                    className={`form-control ${
                                                        this.hasErrorFor(
                                                            "setting_news_id"
                                                        )
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                    value={
                                                        this.state
                                                            .setting_news_id
                                                    }
                                                    onChange={
                                                        this.handleFieldChange
                                                    }
                                                >
                                                    <option value="">
                                                        Choose...
                                                    </option>

                                                    {getsetting_news.map(
                                                        (
                                                            getsetting_news,
                                                            idx
                                                        ) => (
                                                            <option
                                                                key={idx}
                                                                value={
                                                                    getsetting_news.id
                                                                }
                                                            >
                                                                {
                                                                    getsetting_news.name
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </FormSelect>
                                                {this.renderErrorFor(
                                                    "setting_news_id"
                                                )}
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

export default HocValidateUser(View_News);
