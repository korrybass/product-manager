import React, { Component } from 'react';
import './App.scss';
import './bootstrap.css';
import TableSearch from './table-search/table-search.js';
import Table from './table/table.js';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <TableSearch />
        <Table />
      </div>
    );
  }
}

export default App;
