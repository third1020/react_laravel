import {BootstrapTable, TableHeaderColumn,DeleteButton ,ExportCSVButton ,ButtonGroup} from 'react-bootstrap-table';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
import { Link } from 'react-router-dom'
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { FaPen,FaTrash,FaFileExcel,FaCheckDouble,FaCheckSquare,FaFilePdf,FaPlusSquare} from 'react-icons/fa';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import jsPDF from 'jspdf';
import SelectUpdateForm from './SelectUpdateForm';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


 class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],

    }
  }

  customConfirm = (next, dropRowKeys) =>{
  var dropRowKeysStr = dropRowKeys;
  const swalWithBootstrapButtons = Swal.mixin({
customClass: {
  confirmButton: 'btn btn-success',
  cancelButton: 'btn btn-danger'
},
buttonsStyling: false,
})
return (
  swalWithBootstrapButtons.fire({
title: 'คุณแน่ใจว่าจะลบข้อมูลนี้?',
text: "เมื่อลบแล้วจะไม่สามารถย้อนกลับได้",
type: 'warning',
showCancelButton: true,
confirmButtonText: 'ยืนยันการลบข้อมูล',
cancelButtonText: 'ยกเลิก',
reverseButtons: true
}).then((result) => {
if (result.value) {
axios.delete(`${this.props.url}/delete_selected`, { data: { foo: dropRowKeysStr } })
.then(response => {
  swalWithBootstrapButtons.fire(
    'ลบข้อมูลสำเร็จ!',
    'ข้อมูลได้ถูกลบออกจากตารางแล้ว',
    'success'

  )
  console.log(result.value);
  console.log(response.data);
  this.RefreshState()
}).catch(e => {
  swalWithBootstrapButtons.fire(
    'ลบข้อมูลไม่สำเร็จ!',
    'เกิดข้อผิดพลาดในการส่งข้อมูล',
    'error'
  )
  console.log(result.value);
  console.log(e);
})


} else if (
// Read more about handling dismissals
result.dismiss === Swal.DismissReason.cancel
) {
swalWithBootstrapButtons.fire(
  'ยกเลิก',
  'ข้อมูลยังไม่ได้ทำการลบออก',
  'error'
)
}
})


);
}

createHeaders = (keys) => {
  const newkeys = keys.filter(word => word != "Action" && word != "id");
  return newkeys.map(key => ({
    'name': key,
    'prompt': key,
    'width':45,
    'align':'center',
    'padding':0
  }));
}
CreatePdf = () =>{
  var doc = new jsPDF()
  var header = this.createHeaders(this.props.columns);
  console.log("header :"+header);


doc.table(1, 1, this.state.products, header)

doc.save(`${this.props.name}.pdf`)

}

createCustomButtonGroup = props => {
  return (
    <ButtonGroup className='my-custom-class' sizeClass='btn-group-sm'>
    <Link to={this.props.addlink}>
    <button
      className={ `mb-2 mr-2 btn btn-success rounded`  }>
      <i style={{  fontSize:'1.5em',paddingRight:'5px'}} >
          <FaPlusSquare/>
       </i>
      {this.props.addbutton}
    </button>
    </Link>
      { props.exportCSVBtn }
      { props.insertBtn }
      { props.showSelectedOnlyBtn }
      { props.deleteBtn }

    </ButtonGroup>
  );
}

createCustomPDF = () =>{
  return (
    <button  className="mb-2 mr-2 btn btn-outline-warning rounded  "

             onClick={ () => this.CreatePdf() }
             >
                <i style={{  fontSize:'1.5em',color: '#ff8300',paddingRight:'5px'}} >
                    <FaFilePdf/>
                 </i>  PDF
     </button>
  );
}


  createCustomDeleteButton = (onClick) => {
    return (
      <button onClick={onClick} className="mb-2 mr-2 btn btn-outline-danger rounded  " style={{ fontSize:'1.5 em'}}  >
       <i style={{  fontSize:'1.5em',paddingRight:'5px'}} >  <FaTrash/></i>
            Delete Select
        </button>
    );
  }

  createCustomExportCSVButton = (onClick) => {
  return (
    <button onClick={onClick} className="mb-2 mr-2 btn btn-outline-success rounded " style={{  fontSize:'1.5 em'}} >
     <i style={{  fontSize:'1.5em',paddingRight:'5px'}} >  <FaFileExcel/></i>
           Excel
      </button>

  );
}

createCustomShowSelectButton = (onClick) => {
return (
  <button onClick={onClick} className="mb-2 mr-2 btn btn-outline-primary btn-lg rounded  " style={{  fontSize:'1.5 em'}} >
   <i style={{  fontSize:'1.5em',paddingRight:'5px'}} >  <FaCheckSquare/></i>
        Show Select
    </button>

);
}

  HandleUpdate = (id) => {

    confirmAlert({
  onClickOutside: () => { this.RefreshState();},
customUI: ({ onClose }) => {
return (
  <div style={{ height: '100%' ,width:'100%',left:50 }}>
  <SelectUpdateForm id={id} updateurl={this.props.updateurl+'/'+id} ChooseUpdateForm={this.props.name} />
  <footer className="modal-footer">

          <button type="button" className="btn btn-danger"   onClick={() => {
              this.RefreshState();
              onClose();
            }}>ปิด</button>
          </footer>
  </div>
);
}
});


  }

  HandleDelete = (row) => {
    const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false,
})
    return (
      swalWithBootstrapButtons.fire({
  title: 'คุณแน่ใจว่าจะลบข้อมูลนี้?',
  text: "เมื่อลบแล้วจะไม่สามารถย้อนกลับได้",
  type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'ยืนยันการลบข้อมูล',
  cancelButtonText: 'ยกเลิก',
  reverseButtons: true
}).then((result) => {
  if (result.value) {
    axios.delete(`${this.props.url}/delete/${row}`).then(response => {
      swalWithBootstrapButtons.fire(
        'ลบข้อมูลสำเร็จ!',
        'ข้อมูลได้ถูกลบออกจากตารางแล้ว',
        'success'
      )
      this.RefreshState()
      console.log(result.value);
      console.log(response.data);
    }).catch(e => {
      swalWithBootstrapButtons.fire(
        'ลบข้อมูลไม่สำเร็จ!',
        'เกิดข้อผิดพลาดในการส่งข้อมูล',
        'error'
      )
      console.log(result.value);
      console.log(e);
    })


  } else if (
    // Read more about handling dismissals
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'ยกเลิก',
      'ข้อมูลยังไม่ได้ทำการลบออก',
      'error'
    )
  }
})


);
 }

  csvFormatter = (cell, row) =>{
   return `${row.id}: ${cell} USD`;
 }

 priceFormatter = (cell, row) => {


  return (<div>                <button  onClick={() => this.HandleUpdate(row.id)} className="btn btn-sm btn-warning" style={{color: '#fff' ,backgroundColor:'#ffab43',borderColor:'#ffab43'}}  >
                                  <i style={{  fontSize:'1.2 em',color: ''}} ><FaPen/></i>
                                    Update
                                </button>

                                <button onClick={() =>this.HandleDelete(row.id)} className="btn btn-sm btn-danger" style={{  fontSize:'0.75 em'}} >
                                  <i style={{  fontSize:'1.2 em'}} ><FaTrash/></i>
                                      Delete
                                  </button>

            </div>);
}


RefreshState = () => {
  axios.get(`${this.props.url}/index`).then(response => {
    this.setState({
      products: response.data
    })
  }).catch(e =>{
    Swal.fire(
        'Errors',
        'Error in use',
        'error'
    )
  })
}

  componentDidMount(){
    axios.get(`${this.props.url}/index`).then(response => {
      this.setState({
        products: response.data
      })
    }).catch(e =>{
      Swal.fire(
          'Errors',
          'Error in use',
          'error'
      )
    })
  }


  render() {

const options = {
handleConfirmDeleteRow: this.customConfirm,
defaultSortOrder: 'desc',
exportCSVText: 'my_export',
deleteBtn: this.createCustomDeleteButton,
exportCSVBtn: this.createCustomExportCSVButton,
showSelectedOnlyBtn: this.createCustomShowSelectButton,
insertBtn: this.createCustomPDF,
btnGroup: this.createCustomButtonGroup
};

const selectRow = {
     mode: 'checkbox' ,
     showOnlySelected: true,
     bgColor: '#fff1f3'
   };

    return(

      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title={this.props.headname} subtitle="blog post" className="text-sm-left" />
        </Row>
  <Row>
    <Col>
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{this.props.headTablename}</h6>
        </CardHeader>
        <CardBody className="p-0 pb-3">
      <div style={{padding:"25px"}}>
      <BootstrapTable data={this.state.products}
                      options={ options}
                      dataSort={ true }
                      selectRow={ selectRow }
                      insertRow
                      deleteRow
                      pagination
                      multiColumnSearch={ true }
                      search={ true }
                      exportCSV={ true }
                      striped bordered hover
                      >


      {this.props.columns.map((colum) =>{
        if(colum == "id"){
         return  <TableHeaderColumn  dataField={colum} searchable={ false } isKey hidden >{colum}</TableHeaderColumn>

       }else if(colum == "Action"){
          return <TableHeaderColumn width='200' dataFormat={ this.priceFormatter } dataField='action' headerAlign='center' dataAlign='center' ali export={ false }>Action</TableHeaderColumn>
        }else{

          return <TableHeaderColumn tdStyle={ { whiteSpace: 'normal' } } dataField={colum} dataSort columnTitle>{colum}</TableHeaderColumn>
        }

      })
    }


        </BootstrapTable>
          </div>
        </CardBody>
      </Card>
    </Col>
  </Row>
</Container>

    )
  }
}

DataTable.propTypes = {
  name: PropTypes.string,
  headname: PropTypes.string,
  headTablename: PropTypes.string,
  edit:PropTypes.string,
  review:PropTypes.string,
  addlink:PropTypes.string,
  addbutton:PropTypes.string,
  columns:PropTypes.string,

};

export default DataTable
