import React from 'react';
import {
    Row,
    Col,
    FormSelect,
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from 'shards-react';

import { PieChart, Pie, Cell } from 'recharts';
import axios from 'axios';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

class ReportGeneral extends React.Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Pending', value: 0 },
                { name: 'Approve', value: 0 },
                { name: 'Auditor', value: 0 },
                { name: 'Rejected', value: 0 }
            ],
            date: 'All'
        };
    }

    SelectDate = event => {
        this.setState({
            date: event.target.value
        });

        let dt = '';
        var today = new Date();
        var filterDate = '';

        axios
            .get('/api/requestgeneral/index')
            .then(res => {
                if (this.state.date == 'last-month') {
                    filterDate = res.data.filter(item => {
                        dt = new Date(item.created_at);
                        today = new Date();

                        var datetime = dt.getMonth() + '/' + dt.getFullYear();
                        var todaytime =
                            today.getMonth() + '/' + today.getFullYear();

                        return datetime == todaytime;
                    });
                } else {
                    filterDate = res.data;
                }

                var padding = 0,
                    approve = 0,
                    auditor = 0,
                    rejected = 0;

                filterDate.map(item => {
                    if (item.status == 'Pending') {
                        padding++;
                    } else if (item.status == 'Approve') {
                        approve++;
                    } else if (item.status == 'Auditor') {
                        auditor++;
                    } else if (item.status == 'Rejected') {
                        rejected++;
                    }
                });

                this.setState({
                    data: [
                        { name: 'Pending', value: padding },
                        { name: 'Approve', value: approve },
                        { name: 'Auditor', value: auditor },
                        { name: 'Rejected', value: rejected }
                    ]
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    componentDidMount() {
        axios
            .get('/api/requestgeneral/index')
            .then(res => {
                console.log(res.data);

                var padding = 0,
                    approve = 0,
                    auditor = 0,
                    rejected = 0;

                res.data.map(item => {
                    if (item.status == 'Pending') {
                        padding++;
                    } else if (item.status == 'Approve') {
                        approve++;
                    } else if (item.status == 'Auditor') {
                        auditor++;
                    } else if (item.status == 'Rejected') {
                        rejected++;
                    }
                });

                this.setState({
                    data: [
                        { name: 'Pending', value: padding },
                        { name: 'Approve', value: approve },
                        { name: 'Auditor', value: auditor },
                        { name: 'Rejected', value: rejected }
                    ]
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const { title } = this.props;
        return (
            <Col lg="5" md="5" sm="5" className="mb-4">
                <Card small className="h-100">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">รายละเอียดคำร้องทั่วไป</h6>
                    </CardHeader>

                    <CardBody className="d-flex py-0">
                        <PieChart width={360} height={360}>
                            <Pie
                                data={this.state.data}
                                cx={180}
                                cy={180}
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="value"
                                onChange={this.SelectDate}
                            >
                                {this.state.data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </CardBody>
                    <center style={{ marginBottom: '20px', marginTop: '50px' }}>
                        <h5 style={{ color: '#0088FE' }}>
                            Pending {this.state.data[0].value}
                        </h5>
                        <h5 style={{ color: '#00C49F' }}>
                            Approve {this.state.data[1].value}
                        </h5>
                        <h5 style={{ color: '#FFBB28' }}>
                            Auditor {this.state.data[2].value}
                        </h5>
                        <h5 style={{ color: '#FF8042' }}>
                            Rejected {this.state.data[3].value}
                        </h5>
                    </center>
                    <CardFooter className="border-top">
                        <Row>
                            <Col>
                                <FormSelect
                                    size="sm"
                                    value={this.state.date}
                                    style={{ maxWidth: '130px' }}
                                    onChange={this.SelectDate}
                                >
                                    <option value="All">ทั้งหมด</option>
                                    <option value="last-month">เดือนนี้</option>
                                </FormSelect>
                            </Col>
                        </Row>
                    </CardFooter>
                </Card>
            </Col>
        );
    }
}

export default ReportGeneral;
