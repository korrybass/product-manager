import React, { Component } from 'react';
import './App.scss';
import TableSearch from './table-search/table-search.js';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <TableSearch />
      </div>
    );
  }
}

export default App;
