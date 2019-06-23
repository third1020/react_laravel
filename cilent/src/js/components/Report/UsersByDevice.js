import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  FormSelect,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "shards-react";

import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';
import axios from 'axios';



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};



class UsersByDevice extends React.Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';
  constructor(props) {
    super(props);
    this.state = {data : [
      { name: 'Pending', value: 400 },
      { name: 'Approve', value: 300 },
      { name: 'Auditor', value: 300 },
      { name: 'Rejected', value: 200 },
    ],
      getrequestgeneral: []
   }
  }

   Showdata = () => {
     var datatime = []
     axios.get('/api/requestgeneral/index')
     .then(res => {

       this.setState({
         data: res.data
       })
     }).catch(err =>{
       console.log(err);
     })

     console.log(this.state.data);

   }

  componentDidMount() {



  }


  render() {
    const { title } = this.props;
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="d-flex py-0">
        <PieChart width={400} height={400}>
               <Pie
                 data={this.state.data}
                 cx={180}
                 cy={180}
                 labelLine={false}
                 label={renderCustomizedLabel}
                 outerRadius={140}
                 fill="#8884d8"
                 dataKey="value"
                 onChange={this.Showdata}
               >
                 {
                   this.state.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                 }
               </Pie>
             </PieChart>

        </CardBody>
        <center style={{marginBottom:'20px'}}><h5 style={{color:'#0088FE'}}>Pending</h5> <h5 style={{color:'#00C49F'}}>Approve</h5><h5 style={{color:'#FFBB28'}}>Auditor</h5><h5 style={{color:'#FF8042'}}>Rejected</h5></center>


        <CardFooter className="border-top">
          <Row>
            <Col>
              <FormSelect
                size="sm"
                value="last-week"
                style={{ maxWidth: "130px" }}
                onChange={() => {}}
              >
                <option value="last-week">Last Week</option>
                <option value="today">Today</option>
                <option value="last-month">Last Month</option>
                <option value="last-year">Last Year</option>
              </FormSelect>
            </Col>
            <Col className="text-right view-report">
              {/* eslint-disable-next-line */}
              <button onClick={this.Showdata}>test</button>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    );
  }
}

export default UsersByDevice
