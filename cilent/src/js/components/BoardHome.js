import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import ImageUploader from 'react-images-upload';
import PropTypes from 'prop-types';
import '../../css/image.css';
import { ToastContainer } from 'react-toastr';
import '../../css/alert.css';
import '../../css/animate.css';
import '../../css/front.css';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CardGroup from 'react-bootstrap/CardGroup';
import DataTable from './DataTable';
import Profile from './Profile';

let container;

import { Button, Form, Col, Row } from 'react-bootstrap';
import axios from 'axios';

class BoardHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getnews_type: [],
            getnews: [],
            errors: []
        };
    }

    componentWillMount() {
        axios.get('/api/querynews_type').then(response => {
            this.setState({
                getnews_type: response.data
            });
        });

        axios.get(`/api/querynews`).then(response => {
            this.setState({
                getnews: response.data
            });
        });
        console.log(this.state.getnews);
    }

    render() {
        const { getnews } = this.state;
        const columns = ['id', 'news_title', 'news_types_id', 'created_at'];

        return (
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                    <p>{this.state.getnews_type.length}</p>
                </Tab>

                <Tab eventKey="profile" title="profile">
                    <Profile id={sessionStorage.getItem('id')} />
                </Tab>
                <Tab eventKey="news" title="News">
                    <DataTable
                        url="/api/news_table"
                        columns={columns}
                        name={'news'}
                        headname={' List News'}
                        headTablename={'ตารางแสดงข้อมูล'}
                        edit={'แก้ไข'}
                        delete={'ลบ'}
                        deletefail={'ลบข้อมูลไม่สำเร็จ'}
                        deletesuccess={'ลบข้อมูลสำเร็จ'}
                        review={'review'}
                    />
                </Tab>
                <Tab eventKey="activity" title="Activity">
                    <p>ActivityActivityActivityActivityActivity</p>
                </Tab>
            </Tabs>
        );
    }
}

BoardHome.propTypes = {
    id: PropTypes.number
};

export default BoardHome;
