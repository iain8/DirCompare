import React from 'react';

class DirPicker extends React.Component {
  // TODO: better name
  onOpenDialog () {
    this.props.showDialog(this.props.label);
  }

  render () {
    return (
      <p className="control has-icon">
        <input 
          className="input is-small is-expanded" 
          type="text"
          value={ this.props.dir }
          placeholder="Select directory..."
          readOnly={ true }
          onClick={ this.onOpenDialog.bind(this) } />
        <span className="icon is-small">
          <i className="material-icons small-icon">folder</i>
        </span>
      </p>
    );
  }
}

export default DirPicker;