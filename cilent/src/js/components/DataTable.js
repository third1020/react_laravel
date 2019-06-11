import {BootstrapTable, TableHeaderColumn,DeleteButton } from 'react-bootstrap-table';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { FaPen,FaTrash} from 'react-icons/fa';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

 class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }


  }

  handleDeleteButtonClick = (onClick) => {
  // Custom your onClick event here,
  // it's not necessary to implement this function if you have no any process before onClick
  console.log('This is my custom function for DeleteButton click event');
  onClick();
}
createCustomDeleteButton = (onClick) => {
  return (
    <DeleteButton
      btnText='CustomDeleteText'
      btnContextual='btn-warning'
      className='my-custom-class'
      btnGlyphicon='glyphicon-edit'
      onClick={ () => this.handleDeleteButtonClick(onClick) }/>
  );
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
    }).catch(e => {
      swalWithBootstrapButtons.fire(
        'ลบข้อมูลไม่สำเร็จ!',
        'เกิดข้อผิดพลาดในการส่งข้อมูล',
        'error'
      )
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

  csvFormatter(cell, row) {
   return `${row.id}: ${cell} USD`;
 }

 priceFormatter = (cell, row) => {
  console.log(cell);

  return (<div>                <button  onClick={() => alert('id  :' +row.id)} className="btn btn-sm btn-warning" style={{color: '#fff' ,backgroundColor:'#ffab43',borderColor:'#ffab43'}}  >
                                  <i style={{  fontSize:'1.2 em',color: ''}} ><FaPen/></i>
                                    Update
                                </button>

                                <button onClick={() => this.HandleDelete(row.id)} className="btn btn-sm btn-danger" style={{  fontSize:'0.75 em'}} >
                                  <i style={{  fontSize:'1.2 em'}} ><FaTrash/></i>
                                      Delete
                                  </button>

            </div>);
}


  componentDidMount(){
    axios.get(`${this.props.url}/indexretrun`).then(response => {
      this.setState({
        products: response.data
      })
    }).catch(e =>{
      alert("errors");
    })
  }


  render() {
const selectRow = {
  mode: 'checkbox',
  bgColor: 'pink'
};

const options = {
defaultSortName: 'name',  // default sort column name
defaultSortOrder: 'desc',
exportCSVText: 'my_export',
  deleteBtn: this.createCustomDeleteButton
};
    return(

      <BootstrapTable data={this.state.products}
                      options={ options }

                      options={ { noDataText: 'This is custom text for empty data' } }
                      dataSort={ true }
                      selectRow={ selectRow }
                      deleteRow
                      pagination
                      multiColumnSearch={ true }
                      search={ true }
                      exportCSV={ true }
                      striped bordered hover>

      {this.props.columns.map((colum) =>{
        if(colum == "id"){
         return  <TableHeaderColumn  dataField={colum} searchable={ false } isKey hidden >{colum}</TableHeaderColumn>

       }else if(colum == "Action"){
          return <TableHeaderColumn width='200' dataFormat={ this.priceFormatter } dataField='action' headerAlign='center' dataAlign='center' ali export={ false }>Action</TableHeaderColumn>
        }else{

          return <TableHeaderColumn  dataField={colum} dataSort columnTitle>{colum}</TableHeaderColumn>
        }

      })
    }

        </BootstrapTable>
    )
  }
}

DataTable.propTypes = {
  name: PropTypes.string,
  headname: PropTypes.string,
  headTablename: PropTypes.string,
  edit:PropTypes.string,
  delete:PropTypes.string,
  deletesuccess:PropTypes.string,
  deletefail:PropTypes.string,
  review:PropTypes.string,
  addlink:PropTypes.string,
  addbutton:PropTypes.string,
  delectselect:PropTypes.string,
  columns:PropTypes.string,

};

export default DataTable
