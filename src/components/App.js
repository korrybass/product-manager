import React, { Component } from 'react';
import './App.scss';
import './bootstrap.css';
import TableSearch from './TableSearch/TableSearch.js';
import Table from './Table/Table.js';

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
