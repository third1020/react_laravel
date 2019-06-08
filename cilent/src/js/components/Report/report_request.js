import React, {
    Component
} from 'react';


import {
  PieChart, Pie, Sector, Cell,RadialBarChart, RadialBar, Legend
} from 'recharts';

import Chart from 'react-google-charts';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import PropTypes from 'prop-types';




const data2 = [

  {
    name: '0-19', uv: 26.69, pv: 4567, fill: '#83a6ed ',
  },
  {
    name: '20-39', uv: 15.69, pv: 1398, fill: '#8dd1e1',
  },
  {
    name: '40-59', uv: 8.22, pv: 9800, fill: '#82ca9d',
  },
  {
    name: '60-79', uv: 8.63, pv: 3908, fill: '#a4de6c',
  },
  {
    name: '80-100', uv: 2.63, pv: 4800, fill: '#d0ed57',
  },
  {
    name: '100+', uv: 6.67, pv: 4800, fill: '#ffc658',
  },
];

const style = {
  top: 0,
  left: 350,
  lineHeight: '30px',
};


 class Report_request extends Component {



   constructor (props) {
     super(props)
     this.state = {
       workaround:0,
       confirm:0,
       access:0,
       cancel:0,
      startDate: new Date(),
      endDate: new Date(),
      getrequest:[],
      data: [
        {name: 'Group A', value:0},
        {name: 'Group B', value:0},
        {name: 'Group C', value:0},
        {name: 'Group D', value:0}
      ]

    };






    this.handleChangeEnd = this.handleChangeEnd.bind(this)
    this.handleChangeStart = this.handleChangeStart.bind(this)
    this.FilterData = this.FilterData.bind(this)
    this.appendLeadingZeroes = this.appendLeadingZeroes.bind(this)

   }

   handleChangeStart(date) {
    console.log(date);
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd(date) {
    console.log(date);

   this.setState({
     endDate: date
   });
 }

 appendLeadingZeroes(n){
  if(n <= 9){
    return "0" + n;
  }
  return n
}

 FilterData(){

   let reportfilter = [];

   let access = [];
   let confirm = [];
   let workaround = [];
   let cancel = [];
   let status0 = [];


let formatted_startDate = this.state.startDate.getFullYear() + "-"
                       + this.appendLeadingZeroes(this.state.startDate.getMonth() + 1) + "-"
                       + this.appendLeadingZeroes(this.state.startDate.getDate()) + " "
                       + this.appendLeadingZeroes(this.state.startDate.getHours()) + ":"
                       + this.appendLeadingZeroes(this.state.startDate.getMinutes()) + ":"
                       + this.appendLeadingZeroes(this.state.startDate.getSeconds())

let formatted_endDate = this.state.endDate.getFullYear() + "-"
                        + this.appendLeadingZeroes(this.state.endDate.getMonth() + 1) + "-"
                        + this.appendLeadingZeroes(this.state.endDate.getDate()) + " "
                        + this.appendLeadingZeroes(this.state.endDate.getHours()) + ":"
                        + this.appendLeadingZeroes(this.state.endDate.getMinutes()) + ":"
                        + this.appendLeadingZeroes(this.state.endDate.getSeconds())


   for (let i = 0; i < this.state.getrequest.length; i++) {

     if(formatted_startDate< this.state.getrequest[i].created_at &&  this.state.getrequest[i].created_at <  formatted_endDate){
       reportfilter.push(this.state.getrequest[i]);
     }
}

     for(let i = 0; i < reportfilter.length; i++){

       console.log(reportfilter.request_status);

       if(reportfilter[i].request_status == "4"){

         access.push(reportfilter);

       }else if(reportfilter[i].request_status == "3"){

         confirm.push(reportfilter);

       }else if(reportfilter[i].request_status == "2"){

         workaround.push(reportfilter);

       }else if(reportfilter[i].request_status == "1"){

         cancel.push(reportfilter);

       }else{

         status0.push(reportfilter);

       }

     }

     this.setState({
       access: access.length,
       confirm: confirm.length,
       workaround: workaround.length,
       cancel: cancel.length,

     })

     console.log(access.length);
     console.log(confirm.length);
     console.log(workaround.length);
     console.log(cancel.length);
     console.log(status0.length);
     console.log(formatted_startDate);
     console.log(reportfilter);
     console.log(formatted_endDate);



 }

 componentWillMount () {
   axios.get('/api/queryrequest').then(response => {
     this.setState({
       getrequest: response.data

     })
   })
 }






    render() {

      const data =[
        { name: 'Group A', value: this.state.workaround },
        { name: 'Group B', value: this.state.confirm },
        { name: 'Group C', value: this.state.access },
        { name: 'Group D', value: this.state.cancel },
      ];

      const data2 = [

        {
          name: '0-19', uv: this.state.workaround, pv: 4567, fill: '#83a6ed ',
        },
        {
          name: '20-39', uv: this.state.confirm, pv: 1398, fill: '#8dd1e1',
        },
        {
          name: '40-59', uv: this.state.access, pv: 9800, fill: '#82ca9d',
        },
        {
          name: '60-79', uv: this.state.cancel, pv: 3908, fill: '#a4de6c',
        },
        {
          name: '80-100', uv: 2.63, pv: 4800, fill: '#d0ed57',
        },
        {
          name: '100+', uv: 6.67, pv: 4800, fill: '#ffc658',
        },
      ];

      const data3 =[
        ['Mouth', 'อยู่ระหว่างดำเนินการ', 'ยกเลิก', 'รอการอนุมัติ','อนุมัติ'],
        ['มีนาคม', 0, 0, 0,0],
        ['เมษายน', 0, 0, 0,0],
        ['พฤษภาคม', this.state.workaround, this.state.confirm, this.state.access,this.state.cancel],
        ['มิถุนายน', 0, 0, 0,0],

      ]



      const COLORS = ['#4285f4', '#0f9d58', '#FFBB28', '#db4437'];

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

      const style = {
        top: 0,
        left: 350,
        lineHeight: '30px',
      };




        return (

         <div>

         <div class="row" name="row-1" style={{padding:'20'}}>
           <div class="col-lg-12">
             <div class="card bg-light mb-3">
               <div class="card-body">
                 <h5 class="card-title">Report request</h5>

                 ค้นหาตั้งแต่เวลา :

                 <DatePicker
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                    dateFormat="yyyy MMMM, d h:mm aa"
                    timeCaption="time"
                    showTimeSelect


                 />
                 ถึง

                 <DatePicker
                   selected={this.state.endDate}
                   selectsEnd
                   startDate={this.state.startDate}
                   endDate={this.state.endDate}
                   onChange={this.handleChangeEnd}
                   dateFormat="yyyy MMMM, d h:mm aa"
                   timeCaption="time"
                   showTimeSelect
                  />

                  <button type="button" class="btn btn-info" onClick={this.FilterData}>รายงานความต้องการ</button>


               </div>
             </div>
           </div>
          </div>


          <div class="row" name="row-1" style={{padding:'20'}}>
            <div class="col-lg-12">
              <div class="card bg-light mb-3">
                <div class="card-body">
                  <h5 class="card-title">สรุปรายเดือน</h5>

                  <Chart
          width={'100%'}
          height={'400px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={data3}
          options={{
            // Material design options
            chart: {
              title: 'สถานะความต้องการ',
              subtitle: 'เดือน 3-5',
            },
          }}
          // For tests
          rootProps={{ 'data-testid': '2' }}
        />


                </div>
              </div>
            </div>
           </div>



          <div class="row" name="row-2" style={{padding:'20'}}>
            <div class="col-lg-6">
              <div class="card text-white bg-dark mb-3">
                <div class="card-body">
                <div>

                <PieChart width={400} height={400}>
                  <Pie
                    data={data}
                    cx={160}
                    cy={160}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={130}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {
                      data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                  </Pie>

                </PieChart>
                </div>


                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card text-white bg-dark mb-3">
                <div class="card-body">
                <RadialBarChart width={400} height={400} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data2}>
       <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
       <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
     </RadialBarChart>

     <h5 class="card-title">Special title treatment</h5>
     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                </div>
              </div>
            </div>
          </div>



        </div>





        );
    }
}

Report_request.propTypes = {
  id: PropTypes.number,

};

export default Report_request
