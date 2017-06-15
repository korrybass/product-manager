import React, { Component } from 'react';

class InputField extends Component {
  render() {
    return (
      <input className={this.props.classes} 
      onChange={this.props.fieldChange} 
      placeholder={this.props.placeholder}
      onKeyPress={ (e) => { if(e.keyCode === 13) this.props.fieldChange() } } />
    );
  }
}

export default InputField;
