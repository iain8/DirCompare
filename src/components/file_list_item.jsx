import React from 'react';

// TODO: replace with React.PureComponent

class FileListItem extends React.Component {
  render () {
    return (
      <tr>
        <td>{ this.props.file }</td>
        <td>{ this.props.date }</td>
        <td>{ this.props.size }</td>
      </tr>
    );
  }
}

export default FileListItem;