import React from 'react';

class FileListItem extends React.Component {
  render () {
    return (
      <li className="mdc-list-item">
        <span className="mdc-list-item__start-detail">
          <i className="material-icons md-24 md-light">image</i>
        </span>
        <span className="mdc-list-item__text">
          <span className="mdc-list-item__text__primary">{ this.props.file }</span>
          <span className="mdc-list-item__text__secondary">{ this.props.date }</span>
        </span>
        <a className="mdc-list-item__end-detail">
          <span className="material-icons">
            more_vert
          </span>
        </a>
      </li>
    );
  }
}

export default FileListItem;