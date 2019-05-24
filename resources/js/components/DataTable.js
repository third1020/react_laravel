import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Success from './success_insert';
import Select_update from './Select_update';

import { Link } from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer } from "react-toastr";
import "../../css/alert.css";
import "../../css/animate.css";
import "../../css/search.css";
import '../../css/react-confirm-alert.css';

import '../../css/froala-editor/froala_style.min.css';
import '../../css/froala-editor/froala_editor.pkgd.min.css';

import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import {FaStar,FaPlusSquare,FaFilePdf,FaFileExcel,FaTrashAlt,FaTrash,FaPen,FaRegCheckSquare,FaCheckDouble,FaMinus} from 'react-icons/fa';
let container;

 class DataTable extends Component {
  constructor(props) {
    super(props);
    if(this.props.review == "review"){
      this.config = {
    reactIgnoreAttrs: ['tmpattr'],
  heightMin: 250,
  heightMax: 400,
  autoFocus: true,
  fontFamilySelection: true,
  fontSizeSelection: true,
}
      this.state = {
        entities: {
          data: [],
          meta: {
            current_page: 1,
            from: 1,
            last_page: 1,
            per_page: 3,
            to: 1,
            total: 1,
          },
        },
        search : '',
        first_page: 1,
        current_page: 1,
        sorted_column: this.props.columns[0],
        offset: 4,
        order: 'desc',
      };

    }else{

    this.state = {
      entities: {
        data: [],
        meta: {
          current_page: 1,
          from: 1,
          last_page: 1,
          per_page: 10,
          to: 1,
          total: 1,
        },
      },
      search : '',
      first_page: 1,
      current_page: 1,
      sorted_column: this.props.columns[0],
      offset: 4,
      order: 'asc',
      checkedList: [],
      statuslist : []
    };

  }

      this.handleFieldChange = this.handleFieldChange.bind(this)
      this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
      this.DeleteSelectAll = this.DeleteSelectAll.bind(this)


  }

  DeleteSelectAll (event) {
    alert(this.state.checkedList);
    var arrayid = this.state.checkedList;
    console.log(arrayid);
    axios.delete(`${this.props.url}`, { data: { foo: arrayid } })
    .then(response => {
      console.log(response);
      container.success(`${this.props.deletesuccess}`, `success`, {
          closeButton: true,
          timeOut: 5000
        })
        window.scrollTo(0, 0);
    })
    .catch(error => {
      container.error(`${this.props.deletefail}`, `errors`, {
          closeButton: true,

          timeOut: 5000,
          extendedTimeOut: 2000
        })
      window.scrollTo(0, 0);
    })
    this.setState({checkedList : []}, () => {this.fetchEntities()});

  }

  handleCheckboxChange (event) {

    if(event.target.checked){

      this.state.checkedList.push(event.target.name);

    }else if(event.target.checked == false){
     this.state.checkedList = this.state.checkedList.filter(el => el !== event.target.name);

    }
  }




  handleFieldChange () {
    this.setState({
      search: event.target.value , current_page: 1
    }, () => {this.fetchEntities()})
  }



  handleUpdate(id) {

    confirmAlert({
      onClickOutside: () => { this.fetchEntities();},
  customUI: ({ onClose }) => {
    return (
      <div style={{ height: '100%' ,left:50 }}>
      <Select_update id={id} ChooseUpdateForm={this.props.name}/>
      <footer class="modal-footer">

              <button type="button" class="btn btn-danger"   onClick={() => {
                  this.fetchEntities();
                  onClose();
                }}>ปิด</button>
              </footer>


      </div>
    );
  }

});

    }


  handleDelete(id) {

    const list = this.state.entities.data.find((user) => {
      return user.id == id
    })
    // remove from local state
    confirmAlert({
  customUI: ({ onClose }) => {
    return (
      <div className='custom-ui'>
        <h1>ยืนยันการลบข้อมูล User </h1>
        <p>ID:{list.id}</p>


<footer class="modal-footer">

        <button type="button" class="btn btn-success"
          onClick={() => {
            this.refreshremove(id);
            onClose();
          }}
        >
          ยืนยัน
        </button>

        <button type="button" class="btn btn-danger" onClick={onClose}>ไม่ต้องการ</button>
        </footer>
      </div>
    );
  }
  });

  }



  refreshremove(id){
    const isNotId = user => user.id !== id;
    const updated = this.state.entities.data.filter(isNotId);
      this.setState({ data: updated }, () => {this.fetchEntities()});
    //
    axios.delete(`${this.props.url}/${id}`)
    .then(response => {

      container.success(`${this.props.deletesuccess}`, `success`, {
          closeButton: true,
          timeOut: 5000
        })
        window.scrollTo(0, 0);

    })
    .catch(error => {


      container.error(`${this.props.deletefail}`, `errors`, {
          closeButton: true,

          timeOut: 5000,
          extendedTimeOut: 2000
        })
      window.scrollTo(0, 0);
    })

  }

  fetchEntities() {
    let fetchUrl = `${this.props.url}/?page=${this.state.current_page}&column=${this.state.sorted_column}&order=${this.state.order}&per_page=${this.state.entities.meta.per_page}&search=${this.state.search}`;
    axios.get(fetchUrl)
      .then(response => {
          this.setState({ entities: response.data });

          console.log(this.state.entities.data)
      })
      .catch(e => {
        console.error(e);
      });
  }

  changePage(pageNumber) {
    this.setState({ current_page: pageNumber }, () => {this.fetchEntities()});
  }

  columnHead(value) {
    return value.split('_').join(' ').toUpperCase()
  }

  pagesNumbers() {
    if (!this.state.entities.meta.to) {
      return [];
    }
    let from = this.state.entities.meta.current_page - this.state.offset;
    if (from < 1) {
      from = 1;
    }
    let to = from + (this.state.offset * 2);
    if (to >= this.state.entities.meta.last_page) {
      to = this.state.entities.meta.last_page;
    }
    let pagesArray = [];
    for (let page = from; page <= to; page++) {
      pagesArray.push(page);
    }
    return pagesArray;
  }



  componentDidMount() {

      this.setState({ current_page: this.state.entities.meta.current_page ,search : this.state.search }, () => {this.fetchEntities()});

    }

  tableHeads() {
    let icon;
    if (this.state.order === 'asc') {
      icon = <i className="fas fa-arrow-up"></i>;
    } else {
      icon = <i className="fas fa-arrow-down"></i>;
    }
    return this.props.columns.map(column => {
      return <th className="table-head" key={column} onClick={() => this.sortByColumn(column)}>
        { this.columnHead(column) }
        { column === this.state.sorted_column && icon }
      </th>
    });
  }


  userList() {
    if (this.state.entities.data.length) {

        return this.state.entities.data.map(user => {
          return <tr key={ user.id }>
            {Object.keys(user).map(key => <td key={key}>{ user[key] }</td> )}

            <td>
                              { this.props.edit != null ?(
                                  <button  onClick={() => this.handleUpdate(user.id)} className="btn btn-sm btn-warning" style={{color: '#fff' ,backgroundColor:'#ffab43',borderColor:'#ffab43'}}  >
                                  <i style={{  fontSize:'1.2 em',color: ''}} ><FaPen/></i>
                                    {this.props.edit}
                                </button>)
                                :null}

                                { this.props.delete != null ?
                                  (<button onClick={() => this.handleDelete(user.id)} className="btn btn-sm btn-danger" >
                                  <i style={{  fontSize:'1.2 em',color: ''}} ><FaTrash/></i>
                                      {this.props.delete}
                                  </button>)
                                  : null}



            </td>
            <td>
            <center>

            <input type="checkbox" name={user.id} checked={this.state.statuslist[user.id]} onChange={this.handleCheckboxChange} />

            </center>

            </td>

          </tr>

              })

    } else {
      return <tr>
        <td colSpan={this.props.columns.length} className="text-center">ไม่พบข้อมูล</td>
      </tr>
    }
  }

  reviewList() {
    if (this.state.entities.data.length) {

        return this.state.entities.data.map(user => {
          return <div key={ user.id }>


            <div style={{borderBottom:'solid', borderBottomColor:'#e7e7e7',borderBottomWidth: '1px',marginBottom: '30'}}>
            <div class="card-body">
             <h5 class="card-title" style={{fontWeight:'700', color:'#70bbfd'}}>{user.news_title} <small style={{color:'#999' ,fontSize:'10px',fontWeight:'400'}}> {user.created_at}</small></h5>
             <FroalaEditorView
                model={user.news_detail}
                config={this.config}
                />
              <span style={{fontSize:'12px',float: 'right' ,backgroundColor:'rgb(52, 195, 218)',padding: '6px' ,textTransform:'uppercase' ,color:'#fff',borderRadius:'.25rem',fontWeight:'600'}}>{user.news_type}</span>
            </div>
          </div>
        </div>

              })

    } else {
      return <tr>
        <td colSpan={this.props.columns.length} className="text-center">ไม่พบข้อมูล</td>
      </tr>
    }

    let girlsAges = this.state.entities.data.map(user => user.news_title);

    console.log(girlsAges);  //[19, 10, 29, 23]


  }

  sortByColumn(column) {
    if (column === this.state.sorted_column) {
      this.state.order === 'asc' ? this.setState({ order: 'desc', current_page: this.state.first_page }, () => {this.fetchEntities()}) : this.setState({ order: 'asc' }, () => {this.fetchEntities()});
    } else {
      this.setState({ sorted_column: column, order: 'asc', current_page: this.state.first_page }, () => {this.fetchEntities()});
    }
  }

  pageList() {
    return this.pagesNumbers().map(page => {
      return <li className={ page === this.state.entities.meta.current_page ? 'page-item active' : 'page-item' } key={page}>
        <button className="page-link" onClick={() => this.changePage(page)}>{page}</button>
      </li>
    })
  }

  render() {
    return (
  <div style={{paddingLeft: '10' ,paddingRight: '5'}}>
      {this.props.review =="review"?


      <div className="data-table">
      <div style={{position:'right'}}>

      Search:<input
          class="form-control input-sm"
          placeholder="search text"
          type='search'
          value={this.state.search}
          onChange={this.handleFieldChange}
        />


      </div>


            { this.reviewList() }

        { (this.state.entities.data && this.state.entities.data.length > 0) &&
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <button className="page-link"
                  disabled={ 1 === this.state.entities.meta.current_page }
                  onClick={() => this.changePage(this.state.entities.meta.current_page - 1)}
                >
                  Previous
                </button>
              </li>
              { this.pageList() }
              <li className="page-item">
                <button className="page-link"
                  disabled={this.state.entities.meta.last_page === this.state.entities.meta.current_page}
                  onClick={() => this.changePage(this.state.entities.meta.current_page + 1)}
                >
                  Next
                </button>
              </li>
              <span style={{ marginTop: '8px' }}> &nbsp; <i>Displaying { this.state.entities.data.length } of { this.state.entities.meta.total } entries.</i></span>
            </ul>
          </nav>
        }
        <ToastContainer
          ref={ref => container = ref}
          className="toast-top-right"
        />
        </div>

  :
              <div>
                <div className='col-md-12 col-lg-12'>
                <h3 class="page-header">{this.props.headname}</h3>
                  <div className='card'>
                    <div className='card-header'>{this.props.headTablename}</div>
                    <div className='card-body'>




                      <div>
                      <p></p>

                      <button  class="btn btn-outline-success" style={{ marginLeft: '30px',marginBottom: '10px'}}><i style={{ fontSize:'1.5em', color:'green'}}><FaPlusSquare/></i> New</button>

                        <label for="searchWeb" style={{
                          fontSize: '18px',
                          fontWeight: '900',
                          color: '#008cff',
                          padding:'10',

                        }}>Search :   </label>
                        <input
                        style={{

                          fontFamily: 'Nunito',
                          width: '350',
                          padding: '5px 10px',
                          backgroundColor: 'transparent',
                          transition: 'transform 250ms ease-in-out',
                          fontSize: '18px',
                          lineHeight: '18px',
                          color: '#575756',
                          borderRadius:'120px'

                        }}
                            placeholder="search text"
                            type='search'
                            value={this.state.search}
                            onChange={this.handleFieldChange}
                          />

                          <button  class="btn btn-outline-warning" style={{ marginLeft: '8px',marginBottom: '10px',color: '#ff9f4c',borderColor:'#ff9f4c'}}><i style={{  fontSize:'1.5em',color: '#ff9f4c'}} ><FaFilePdf/></i>  PDF</button>
                          <button  class="btn btn-outline-success" style={{ marginLeft: '8px',marginBottom: '10px'}}><i style={{  fontSize:'1.5em'}} ><FaFileExcel/></i>  Excel</button>
                          <button  class="btn btn-outline-danger" style={{ marginLeft: '8px',marginBottom: '10px' ,float: 'right'}} onClick={() => this.DeleteSelectAll()}><i style={{  fontSize:'1.5em'}}><FaTrashAlt/></i>  Delete Selected</button>
                    </div>
            <div className="data-table">
              <Table striped bordered hover>
                <thead>
                  <tr>{ this.tableHeads() }  <th>Action</th> <th><center>Status</center></th> </tr>
                </thead>
                <tbody>{ this.userList() } </tbody>
              </Table>
              { (this.state.entities.data && this.state.entities.data.length > 0) &&
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <button className="page-link"
                        disabled={ 1 === this.state.entities.meta.current_page }
                        onClick={() => this.changePage(this.state.entities.meta.current_page - 1)}
                      >
                        Previous
                      </button>
                    </li>
                    { this.pageList() }
                    <li className="page-item">
                      <button className="page-link"
                        disabled={this.state.entities.meta.last_page === this.state.entities.meta.current_page}
                        onClick={() => this.changePage(this.state.entities.meta.current_page + 1)}
                      >
                        Next
                      </button>
                    </li>
                    <span style={{ marginTop: '8px' }}> &nbsp; <i>Displaying { this.state.entities.data.length } of { this.state.entities.meta.total } entries.</i></span>
                  </ul>
                </nav>
              }
              <ToastContainer
                ref={ref => container = ref}
                className="toast-top-right"
              />
              </div>
             </div>
            </div>
          </div>
        </div>}
        </div>

    );
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


};

export default DataTable
