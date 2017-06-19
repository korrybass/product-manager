import React, { Component } from 'react';
import './table-search.scss';
import TextInput from '../inputs/text.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { queryProducts } from '../../redux/actions/search-table.js';




class TableSearch extends Component {
  constructor(){
    super();
    this.state = {showAdvancedOptions: false, queries: {format: 'json'}}
    this.toggleAdvanceOptions = this.toggleAdvanceOptions.bind(this);
    this.setParam = this.setParam.bind(this);
  }

  toggleAdvanceOptions(){
    this.setState({ showAdvancedOptions: !this.state.showAdvancedOptions })
  }
  setParam (field, val, facet){
    let output = { ...this.state.queries };
    
    if(facet) { 
      output["facet"] = 'on'; 
      if(val.length > 1){
        val = val.charAt(0).toUpperCase() + val.slice(1); 
        val= facet+val;
      }
    }
    if(this.state.queries['facet.filter'] === "") output["facet"] = 'off';    
    output[field] = val;
    this.setState({ queries: output })
  }

  render() {
    const searchParams = this.state.queries;
    const advancedAnimate = (this.state.showAdvancedOptions) ? 'open' : '';
    
    return (
      <div className="search-container">
        <TextInput classes='query' fieldChange={(e) => { this.setParam('query', e.target.value) }} placeholder="Query (required)"/>
        <div className={'advanced-search-row ' + advancedAnimate } >  
          <TextInput  fieldChange={(e) => { this.setParam('facet.filter', e.target.value, 'brand:') }} placeholder="Brand Name"/>
          <TextInput fieldChange={(e) => { this.setParam('numItems', e.target.value) }} placeholder="Results"/>
          <TextInput fieldChange={(e) => { this.setParam('start', e.target.value) }} placeholder="Start At"/>
          <select onChange={(e) => { this.setParam('sort', e.target.value) }}>
            <option value="relevance">Relevance</option>
            <option value="price">Price</option>
            <option value="title">Title</option>
            <option value="bestseller">Bestseller</option>
            <option value="customerRating">Customer Rating</option>
            <option value="new">New</option>                        
          </select>          
        </div>
        <button onClick={this.toggleAdvanceOptions} className={'advanced-search'}>Advanced Search</button>
        <button onClick={ () => { this.props.queryProducts(searchParams) } } className="btn-blue add-products">Add Products</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ queryProducts }, dispatch)
}

export default connect(null, mapDispatchToProps)(TableSearch);
