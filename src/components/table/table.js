import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { connect } from 'react-redux';
import './table.scss';
import { bindActionCreators } from 'redux';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import { removeItem, updateBrandName } from '../../redux/actions/search-table.js';
import NameEditor from './NameEditor.js';

class Table extends Component {
  constructor(){
    super();
    this.createNameEditor = this.createNameEditor.bind(this)
    this.deleteItem = this.deleteItem.bind(this);
    this.updateBrandName = this.updateBrandName.bind(this);
  }

  productRow(cell, data){
    return <div className="product-intro">
      <img alt="" className="thumbnail" src={ data.thumbnailImage }/>
      <div className="content">
        <p>{ data.name }</p>
      </div>
      <a href={ data.productUrl }  rel="noopener noreferrer" 
      target="_blank" className="link glyphicon glyphicon-new-window" > </a>
    </div>
  }
  updateBrandName(name, id){
    this.props.updateBrandName(name, id);
  }
  createNameEditor (onUpdate, props) {
    return  <NameEditor placeVal={'product'} onUpdate={ (e)=> {  onUpdate(e) } } {...props}   />
  }
  deleteButton(id){
    return <button onClick={() => { this.deleteButton(id) }} className=" remove glyphicon glyphicon-remove"></button>
  }
  ratingRow(cell, data, component){

    return <div>
      <img alt="" className="rating" src={data.customerRatingImage}/>
      <span>({ data.numReviews }) </span>
      <button onClick={() => { component.deleteItem(data.itemId) } } className=" remove glyphicon glyphicon-remove"></button>
    </div>
  }
  deleteItem(id){
    this.props.removeItem(id);
  }
  priceRow(cell){
    let price;
    if(cell){ price = <p className={'price'}> { "$"+cell.toFixed(2) } </p> }
    else{ price = <p className="italics price">(none)</p> }
    return <div> { price } </div>
  }
  categoryRow(cell){
    return <div>
      { cell.split("/").join(" > ") }
    </div>
  }

  render() {
    const nameEditorCreate = this.createNameEditor;
    const saveName = this.updateBrandName
    const cellEditProp = {
      mode: 'click',
      beforeSaveCell: function(row, cellName, cellValue){ 
        saveName(cellValue, row.itemId);
      }
    };
    const options = { searchPosition: 'left' };
    const productList =  this.props.products;
        console.log(this)

    return (
      <div className="table-container">
        <div className='dataTable'>
          <BootstrapTable data={ productList } cellEdit={ cellEditProp } options={options} 
          search={ true } searchPlaceholder='Search products'>
            
            <TableHeaderColumn dataField={ "name" } isKey={ true } className="productHeader"
            dataFormat={ this.productRow} dataSort={ true } width="40%" >Product</TableHeaderColumn>
            
            <TableHeaderColumn rowRef={this} width="15%" dataSort={ true } 
            customEditor={ { getElement: nameEditorCreate } }
            dataField={ "brandName" }>Brand Name</TableHeaderColumn>
            
            <TableHeaderColumn editable={ false } dataSort={ true } dataField={ "categoryPath" } 
            width="20%" dataFormat={ this.categoryRow }>  Category</TableHeaderColumn>
            
            <TableHeaderColumn editable={ false } dataSort={ true } dataField={ "salePrice" } 
            width="8%" dataFormat={ this.priceRow }>Price</TableHeaderColumn>
            
            <TableHeaderColumn editable={ false } dataSort={ true } dataField={ "msrp" } 
            width="8%" dataFormat={ this.priceRow }>MSRP</TableHeaderColumn>
            
            <TableHeaderColumn editable={ false } dataSort={ true } dataField={ "customerRating" } 
            dataFormat={ (item, data) => { return this.ratingRow(item, data, this)  }}>Reviews</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state){
  return { products: state.products }
}
const mapDispatchToProps = function(dispatch){
  return bindActionCreators({ removeItem, updateBrandName }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
