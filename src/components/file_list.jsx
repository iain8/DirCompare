import React from 'react';

class FileList extends React.Component {
  render () {
    return (
      <div className="half-width">
        <ul className="mdc-list mdc-list--two-line mdc-list--dense">
          { this.props.files }
        </ul>
        <button className="mdc-fab material-icons open-dialog" aria-label="Favorite">
          <span className="mdc-fab__icon">
            folder
          </span>
        </button>
      </div>
    );
  }
}

export default FileList;