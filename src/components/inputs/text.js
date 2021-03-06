import React, { Component } from 'react';

class InputField extends Component {
  render() {
    return (
      <input className={this.props.classes} 
      onChange={this.props.fieldChange}
      type={this.props.inputType} 
      placeholder={this.props.placeholder}
      onKeyPress={ (e) => { if(e.which === 13) this.props.fieldChange(e) } } />
    );
  }
}

export default InputField;
