import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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

import HocValidateUser from '../../../HocValidateUser';

import '../../../css/froala-editor/froala_style.min.css';
import '../../../css/froala-editor/froala_editor.pkgd.min.css';

import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';

let container;

class Add_Message extends Component {
    constructor(props) {
        super(props);
        this.config = {
            reactIgnoreAttrs: ['tmpattr'],
            placeholderText: 'กรอกรายละเอียดข้อความ',
            heightMin: 250,
            heightMax: 400,
            autoFocus: true,
            fontFamilySelection: true,
            fontSizeSelection: true,
            tabSpaces: 4,
            imageUpload: true,
            videoUpload: true,
            pluginsEnabled: [
                'align',
                'charCounter',
                'codeBeautifier',
                'codeView',
                'colors',
                'draggable',
                'embedly',
                'emoticons',
                'entities',
                'file',
                'fontFamily',
                'fontSize',
                'fullscreen',
                'image',
                'imageManager',
                'inlineStyle',
                'lineBreaker',
                'link',
                'lists',
                'paragraphFormat',
                'paragraphStyle',
                'quickInsert',
                'quote',
                'save',
                'table',
                'url',
                'video',
                'wordPaste'
            ],
            toolbarButtons: [
                'bold',
                'italic',
                'underline',
                'strikeThrough',
                'subscript',
                'superscript',
                '|',
                'fontFamily',
                'fontSize',
                'color',
                'inlineStyle',
                'paragraphStyle',
                '|',
                'paragraphFormat',
                'align',
                'formatOL',
                'formatUL',
                'outdent',
                'indent',
                'quote',
                'check',
                '|',
                'insertLink',
                'insertImage',
                'embedly',
                'insertFile',
                'insertTable',
                '|',
                'emoticons',
                'specialCharacters',
                'insertHR',
                'selectAll',
                'clearFormatting',
                '|',
                'spellChecker',
                'help',
                'html',
                '|',
                'undo',
                'redo'
            ],
            toolbarButtonsMD: [
                'bold',
                'italic',
                'underline',
                'strikeThrough',
                'subscript',
                'superscript',
                '|',
                'fontFamily',
                'fontSize',
                'color',
                'inlineStyle',
                'paragraphStyle',
                '|',
                'paragraphFormat',
                'align',
                'formatOL',
                'formatUL',
                'outdent',
                'indent',
                'quote',
                'check',
                '|',
                'insertLink',
                'insertImage',
                'embedly',
                'insertFile',
                'insertTable',
                '|',
                'emoticons',
                'specialCharacters',
                'insertHR',
                'selectAll',
                'clearFormatting',
                '|',
                'spellChecker',
                'help',
                'html',
                '|',
                'undo',
                'redo'
            ],
            toolbarButtonsSM: [
                'bold',
                'italic',
                'underline',
                'strikeThrough',
                '|',
                'fontFamily',
                'fontSize',
                'color',
                '|',
                'align',
                'formatOL',
                'formatUL',
                'outdent',
                'indent',
                'quote',
                'check',
                '|',
                'insertLink',
                'insertImage',
                'embedly',
                'insertFile',
                'insertTable',
                '|',
                'emoticons',
                'specialCharacters',
                'insertHR',
                'selectAll',
                'clearFormatting',
                '|',
                'spellChecker',
                'help',
                'html',
                '|',
                'undo',
                'redo'
            ],
            toolbarButtonsXS: [
                'bold',
                'italic',
                'underline',
                '|',
                'fontFamily',
                'fontSize',
                'color',
                '|',
                'align',
                'formatOL',
                'formatUL',
                'outdent',
                'indent',
                'check',
                '|',
                'insertLink',
                'insertImage',
                'insertFile',
                'insertTable',
                '|',
                'insertHR',
                'selectAll',
                'clearFormatting',
                '|',
                'spellChecker',
                '|',
                'undo',
                'redo'
            ],
            imageUploadParam: 'file',
            imageUploadURL: '/api/uploadImage',
            imageUploadMethod: 'POST',
            // Set max image size to 5MB.
            imageMaxSize: 5 * 1024 * 1024,
            // Allow to upload PNG and JPG.
            imageAllowedTypes: ['jpeg', 'jpg', 'png'],
            fileUploadParam: 'file',
            fileUploadURL: '/api/uploadImage',
            fileUploadMethod: 'POST',
            fileMaxSize: 20 * 1024 * 1024, // 10MB
            events: {
                'image.beforeUpload': function(images) {
                    // Return false if you want to stop the image upload.
                    console.log(images[0]);
                    if (images[0] !== '') {
                        return true;
                    }
                },
                'image.inserted': function($img, response) {
                    // Image was inserted in the editor.
                    console.log($img[0]);
                    console.log(response);
                }
            }
        };
        this.state = {
            client_id: this.props.client_id,
            tital: '',
            detail: '',
            status: '',
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
            tital: this.state.tital,
            detail: this.state.detail,
            status: this.state.status
        };
        console.log(insertdata);

        axios
            .post('/api/message/store', insertdata)
            .then(response => {
                Swal.fire('Successfully', 'Add data successfully ', 'success');

                this.setState({
                    tital: '',
                    detail: '',
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

    render() {
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
                                                    Tital
                                                </label>
                                                <FormInput
                                                    id="tital"
                                                    name="tital"
                                                    className={`form-control ${
                                                        this.hasErrorFor(
                                                            'tital'
                                                        )
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`}
                                                    placeholder="กรอกชื่อผู้ใช้"
                                                    type="text"
                                                    value={this.state.tital}
                                                    onChange={
                                                        this.handleFieldChange
                                                    }
                                                />
                                                {this.renderErrorFor('tital')}
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
                                                                'detail'
                                                            )
                                                                ? 'is-invalid'
                                                                : ''
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
                                                        'detail'
                                                    )}
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row form>
                                            <Col md="4" className="form-group">
                                                <label htmlFor="feInputState">
                                                    Status
                                                </label>
                                                <FormSelect
                                                    id="status"
                                                    name="status"
                                                    className={`form-control ${
                                                        this.hasErrorFor(
                                                            'status'
                                                        )
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`}
                                                    value={this.state.status}
                                                    onChange={
                                                        this.handleFieldChange
                                                    }
                                                >
                                                    <option value="">
                                                        Choose...
                                                    </option>
                                                    <option value="O">
                                                        Open
                                                    </option>
                                                    <option value="C">
                                                        Close
                                                    </option>
                                                </FormSelect>
                                                {this.renderErrorFor('status')}
                                            </Col>
                                        </Row>

                                        <Button type="submit">
                                            Create New Message
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

export default HocValidateUser(Add_Message);
