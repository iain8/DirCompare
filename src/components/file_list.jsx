import React from 'react';

class FileList extends React.Component {
  // TODO: better name
  onOpenDialog () {
    this.props.showDialog(this.props.label);
  }

  render () {
    return (
      <div className="column">
        <table className="table is-narrow is-striped">
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Modified</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            { this.props.files }
          </tbody>
        </table>
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