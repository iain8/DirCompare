import React from 'react';

class FileList extends React.Component {
  // TODO: better name
  onOpenDialog () {
    this.props.showDialog(this.props.label);
  }

  render () {
    return (
      <div className="half-width">
        <ul className="mdc-list mdc-list--two-line mdc-list--dense">
          { this.props.files }
        </ul>
        <button
          className={ `mdc-fab material-icons open-dialog button-${ this.props.label }` }
          aria-label="open"
          onClick={ this.onOpenDialog.bind(this) }>
          <span className="mdc-fab__icon">
            folder
          </span>
        </button>
      </div>
    );
  }
}

export default FileList;