import React, { Component } from 'react';
import './table-search.scss';
import TextInput from '../inputs/text.js';

class TableSearch extends Component {
  render() {
    return (
      <div className="search-container">
        <TextInput placeholder="Query (required)"/>
        <button className={'advanced-search'}>Advanced Search</button>
        <button className="action-btn-fill">Add Products</button>
      </div>
    );
  }
}

export default TableSearch;
