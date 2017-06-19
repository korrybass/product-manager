import React, { Component } from 'react';

class NameEditor extends Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.state = { name: props.defaultValue };
  }
  focus() {
    this.refs.inputRef.focus();
  }
  updateData() {
    this.props.onUpdate(this.state.name);
  }
  render() {
    let placeholder =this.props.row.name.split(",");
    placeholder = placeholder[0];
    return (
      <span>
        <input
          ref='inputRef'
          className={ ( this.props.editorClass || '') + ' form-control editor edit-text' }
          style={ { display: 'inline', width: '50%' } }
          type='text'
          placeholder={ placeholder }
          value={ this.state.name }
          onKeyDown={ this.props.onKeyDown }
          onChange={ (ev) => { this.setState({ name: ev.currentTarget.value }); } } />
          
        <button
          className='btn btn-info btn-xs btn-blue'
          onClick={ this.updateData }> save </button>
      </span>
    );
  }
}

export default NameEditor;