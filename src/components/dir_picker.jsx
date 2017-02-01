import React from 'react';

/**
 * Directory picker component
 */
class DirPicker extends React.PureComponent {
  /**
   * Open dialog action
   */
  onOpenDialog () {
    this.props.showDialog(this.props.label);
  }

  /**
   * Render picker
   * 
   * @returns string Picker HTML
   */
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