import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import mockData from '../../redux/sample-data.js';
import { connect } from 'react-redux';
import './table.scss';

class Table extends Component {

  productRow(cell, data){
    return <div className="product-intro">
      <img alt="" className="thumbnail" src={ data.thumbnailImage }/>
      <p>{ data.name }</p>
      <a href={ data.productUrl }  rel="noopener noreferrer" 
      target="_blank" className="link glyphicon glyphicon-new-window" ></a>
    </div>
  }
  deletebutton(){
    return <div><button>x</button></div>
  }
  render() {
    return (
      <div className="table-container">
       
        <div className='dataTable'>
          <BootstrapTable data={ this.props.products } search searchPlaceholder='Search products'>
            <TableHeaderColumn dataField={ "itemId" } isKey={ true } dataFormat={ this.productRow} dataSort={ true }>Product</TableHeaderColumn>
            <TableHeaderColumn dataField={ "brandName" }>Brand Name</TableHeaderColumn>
            <TableHeaderColumn dataField={ "category" }>  Category</TableHeaderColumn>
            <TableHeaderColumn dataField={ "msrp" }>MSRP</TableHeaderColumn>
            <TableHeaderColumn dataField={ "customerRating" }>Reviews</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state){
  return { products: state.products }
}

export default connect(mapStateToProps)(Table);
