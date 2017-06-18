import React, { Component } from 'react';
import './table-search.scss';
import TextInput from '../inputs/text.js';

class TableSearch extends Component {
  constructor(){
    super();
    this.state = {showAdvancedOptions: false}

    this.toggleAdvanceOptions = this.toggleAdvanceOptions.bind(this);
  }

  toggleAdvanceOptions(){
    this.setState({ showAdvancedOptions: !this.state.showAdvancedOptions })
  }
  render() {
    const advancedAnimate = (this.state.showAdvancedOptions) ? 'open' : '';
    return (
      <div className="search-container">
        <TextInput placeholder="Query (required)"/>
        <div className={'advanced-search-row ' + advancedAnimate } >  
          <TextInput placeholder="BrandName"/>
          <TextInput placeholder="Results"/>
          <TextInput placeholder="Start At"/>
          <select>
            <option></option>
          </select>          
        </div>
        <button onClick={this.toggleAdvanceOptions} className={'advanced-search'}>Advanced Search</button>
        <button className="btn-blue">Add Products</button>
      </div>
    );
  }
}

export default TableSearch;
