import React from 'react';

// TODO: replace with React.PureComponent

class FileListItem extends React.Component {
  render () {
    return (
      <tr>
        <td>
          <i className="material-icons small-icon">image</i>
        </td>
        <td>
          { this.props.file }
        </td>
        <td>{ this.props.date }</td>
        <td>
          <span className="material-icons small-icon">
            more_vert
          </span>
        </td>
      </tr>
    );
  }
}

export default FileListItem;