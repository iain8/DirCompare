import React from 'react';

class FileListItem extends React.Component {
  render () {
    return (
      <tr>
        <td>
          <i className="material-icons md-24 md-light">image</i>
        </td>
        <td>{ this.props.file }</td>
        <td>{ this.props.date }</td>
        <td>
          <span className="material-icons">
            more_vert
          </span>
        </td>
      </tr>
    );
  }
}

export default FileListItem;