import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Update_user from './manage_user/update_user';
import Success from './success_insert';


import { Link } from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer } from "react-toastr";
import "../../css/alert.css";
import "../../css/animate.css";
import '../../css/react-confirm-alert.css';
let container;

 class DataTable extends Component {
  constructor(props) {
    super(props);

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
    };

      this.handleFieldChange = this.handleFieldChange.bind(this)

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
      <Update_user id={id}/>
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
                                  <button  onClick={() => this.handleUpdate(user.id)} className="btn btn-sm btn-primary" style={{color: '#fff'}}  >
                                    {this.props.edit}
                                </button>)
                                :null}

                                { this.props.delete != null ?
                                  (<button onClick={() => this.handleDelete(user.id)} className="btn btn-sm btn-danger" >
                                      {this.props.delete}
                                  </button>)
                                  : null}

            </td>

          </tr>

              })

    } else {
      return <tr>
        <td colSpan={this.props.columns.length} className="text-center">ไม่พบข้อมูล</td>
      </tr>
    }
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

      <div className='container py-4' >
        <div style={{paddingLeft: '200' ,paddingRight: '5'}}>
          <div className='col-lg-12'>
          <h3 class="page-header">{this.props.headname}</h3>
            <div className='card'>
              <div className='card-header'>{this.props.headTablename}</div>
              <div className='card-body'>
      <div className="data-table">
      <div style={{position:'right'}}>
      <label>
      Search:<input
          class="form-control input-sm"
          placeholder="search text"
          type='search'
          value={this.state.search}
          onChange={this.handleFieldChange}
        />
        </label>

      </div>

        <Table striped bordered hover>
          <thead>
            <tr>{ this.tableHeads() }  <th>Action</th> </tr>


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
  </div>
</div>

    );
  }
}

DataTable.propTypes = {
  headname: PropTypes.string,
  headTablename: PropTypes.string,
  edit:PropTypes.string,
  delete:PropTypes.string,
  deletesuccess:PropTypes.string,
  deletefail:PropTypes.string


};

export default DataTable
