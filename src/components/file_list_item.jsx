import React from 'react';

/**
 * An item in the file list
 */
class FileListItem extends React.PureComponent {
  /**
   * Render a row
   * 
   * @returns string rendered table row
   */
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