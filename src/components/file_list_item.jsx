import React from 'react';

class FileListItem extends React.Component {
  render () {
    return (
      <tr>
        <td>{ this.props.file }</td>
        <td></td>
        <td></td>
      </tr>
    );
  }
}

export default FileListItem;