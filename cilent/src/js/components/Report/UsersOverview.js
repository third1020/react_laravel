import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Button,
    InputGroup,
    DatePicker,
    InputGroupAddon,
    InputGroupText
} from 'shards-react';
import classNames from 'classnames';

import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend
} from 'recharts';
import '../../../assets/range-date-picker.css';

class UsersOverview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: '',
            endDate: '',
            arrayday: '',
            numday: 28,
            name: 'test',
            getrequestgeneral: [],
            getrequestissues: [],
            width: window.innerWidth,
            data: [
                { name: '', คำร้องทั่วไป: 0 },
                { name: '', คำร้องปัญหาต่างๆ: 0 }
            ]
        };

        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.ChangeFormatTime = this.ChangeFormatTime.bind(this);
        this.appendLeadingZeroes = this.appendLeadingZeroes.bind(this);

        this.canvasRef = React.createRef();
    }

    handleStartDateChange(value) {
        this.setState({
            startDate: new Date(value)
        });
    }

    handleEndDateChange(value) {
        this.setState({
            endDate: new Date(value)
        });
    }

    appendLeadingZeroes(n) {
        if (n <= 9) {
            return '0' + n;
        }
        return n;
    }

    ChangeFormatTime() {
        this.setState({
            data: []
        });

        var arr = new Array(),
            dt = new Date(this.state.startDate),
            count = 0;

        let reportGeneral = [];
        let reportIssues = [];
        let formatted_endDate;
        let formatted_startDate;

        while (dt <= this.state.endDate) {
            arr.push(new Date(dt));
            dt.setDate(dt.getDate() + 1);
            count += 1;
        }

        this.setState({
            numday: count,
            arrayday: arr
        });
        if (this.state.startDate != '') {
            formatted_startDate =
                this.state.startDate.getFullYear() +
                '-' +
                this.appendLeadingZeroes(this.state.startDate.getMonth() + 1) +
                '-' +
                this.appendLeadingZeroes(this.state.startDate.getDate()) +
                ' ' +
                this.appendLeadingZeroes(this.state.startDate.getHours()) +
                ':' +
                this.appendLeadingZeroes(this.state.startDate.getMinutes()) +
                ':' +
                this.appendLeadingZeroes(this.state.startDate.getSeconds());
        }

        if (this.state.endDate != '') {
            formatted_endDate =
                this.state.endDate.getFullYear() +
                '-' +
                this.appendLeadingZeroes(this.state.endDate.getMonth() + 1) +
                '-' +
                this.appendLeadingZeroes(this.state.endDate.getDate()) +
                ' ' +
                this.appendLeadingZeroes(this.state.endDate.getHours()) +
                ':' +
                this.appendLeadingZeroes(this.state.endDate.getMinutes()) +
                ':' +
                this.appendLeadingZeroes(this.state.endDate.getSeconds());
        }

        if (this.state.startDate && this.state.endDate != '') {
            for (let i = 0; i < this.state.getrequestgeneral.length; i++) {
                if (
                    formatted_startDate <
                        this.state.getrequestgeneral[i].created_at &&
                    this.state.getrequestgeneral[i].created_at <
                        formatted_endDate
                ) {
                    reportGeneral.push(this.state.getrequestgeneral[i]);
                }
            }

            for (let i = 0; i < this.state.getrequestissues.length; i++) {
                if (
                    formatted_startDate <
                        this.state.getrequestissues[i].created_at &&
                    this.state.getrequestissues[i].created_at <
                        formatted_endDate
                ) {
                    reportIssues.push(this.state.getrequestissues[i]);
                }
            }
        }

        console.log(reportIssues);

        var num = 0,
            setdata = [];
        // pending = 0,
        // approve = 0,
        // auditor = 0,
        // rejected = 0;

        // reportGeneral.map(item => {
        //
        //   if(item.status == "Pending"){
        //     pending++
        //   }else if(item.status == "Approve"){
        //      approve++
        //   }else if(item.status == "Auditor"){
        //      auditor++
        //   }else if(item.status == "Rejected"){
        //      rejected++
        //   }
        // })

        var countrequestgenaral = [];
        var countrequestissues = [];

        for (let i = 0; i < count; i++) {
            var daymonthgeneral =
                this.appendLeadingZeroes(arr[i].getDate()) +
                '/' +
                this.appendLeadingZeroes(arr[i].getMonth() + 1);

            const valuegenaral = reportGeneral.filter(item => {
                var daydbrequestgeneral = new Date(item.created_at);
                var dayformatdb =
                    this.appendLeadingZeroes(daydbrequestgeneral.getDate()) +
                    '/' +
                    this.appendLeadingZeroes(
                        daydbrequestgeneral.getMonth() + 1
                    );

                return daymonthgeneral == dayformatdb;
            });

            var daymonthissues =
                this.appendLeadingZeroes(arr[i].getDate()) +
                '/' +
                this.appendLeadingZeroes(arr[i].getMonth() + 1);

            const valueissues = reportIssues.filter(item => {
                var daydbrequestissues = new Date(item.created_at);
                var dayformatdb =
                    this.appendLeadingZeroes(daydbrequestissues.getDate()) +
                    '/' +
                    this.appendLeadingZeroes(daydbrequestissues.getMonth() + 1);

                return daymonthissues == dayformatdb;
            });

            setdata.push({
                name: daymonthgeneral,
                คำร้องทั่วไป: valuegenaral.length,
                คำร้องปัญหาต่างๆ: valueissues.length
            });
        }

        this.setState({
            data: setdata
        });

        if (setdata == '') {
            Swal.fire(
                'ไม่พบข้อมูล',
                'ไม่พบข้อมูลในวันที่ท่านเลือก กรุณาตรวจสอบใหม่อีกครั้ง',
                'error'
            );
        }
    }

    componentDidMount() {
        axios
            .get('/api/requestgeneral/index')
            .then(res => {
                this.setState({
                    getrequestgeneral: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });

        axios
            .get('/api/requestissues/index')
            .then(res => {
                this.setState({
                    getrequestissues: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const { title } = this.props;
        const { className } = this.props;
        const classes = classNames(
            className,
            'd-flex',
            'my-auto',
            'date-range'
        );
        const { width } = this.state;
        return (
            <Col xl="12" lg="12" md="12" sm="12" className="mb-4">
                <Card small className="h-100">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">ดูรายงานคำร้อง</h6>
                    </CardHeader>
                    <CardBody className="pt-0">
                        <Row className="border-bottom py-2 bg-light">
                            <Col sm="6" className="d-flex mb-2 mb-sm-0">
                                <InputGroup className={classes}>
                                    <DatePicker
                                        size="sm"
                                        selected={this.state.startDate}
                                        onChange={this.handleStartDateChange}
                                        placeholderText="Start Date"
                                        dropdownMode="select"
                                        className="text-center"
                                    />
                                    <DatePicker
                                        size="sm"
                                        selected={this.state.endDate}
                                        onChange={this.handleEndDateChange}
                                        placeholderText="End Date"
                                        dropdownMode="select"
                                        className="text-center"
                                    />
                                    <InputGroupAddon type="append">
                                        <InputGroupText>
                                            <i className="material-icons">
                                                &#xE916;
                                            </i>
                                        </InputGroupText>
                                    </InputGroupAddon>

                                    <Button
                                        size="sm"
                                        className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
                                        onClick={this.ChangeFormatTime}
                                    >
                                        ค้นหารายงานคำร้อง &rarr;
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Row>

                        {this.state.data == '' ? (
                            <div>
                                <h4>กรุณากำหนดช่วงเวลาในการ</h4>
                            </div>
                        ) : (
                            <LineChart
                                width={(window.innerWidth * 3) / 4}
                                height={400}
                                data={this.state.data}
                                onChange={this.ChangeFormatTime}
                                margin={{
                                    top: 50,
                                    right: 10,
                                    left: 5,
                                    bottom: 5
                                }}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="คำร้องปัญหาต่างๆ"
                                    stroke="#ef0909"
                                    activeDot={{ r: 8 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="คำร้องทั่วไป"
                                    stroke="#0be232"
                                />
                            </LineChart>
                        )}
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default UsersOverview;
