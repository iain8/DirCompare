import React from 'react';

/**
 * A list of files
 */
class FileList extends React.PureComponent {
  /**
   * Render a file list table
   * 
   * @returns string Rendered table
   */
  render () {
    return (
      <div className="column">
        <table className="table is-narrow is-striped file-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Modified</th>
              <th>Size</th>
            </tr>
          </thead>
        </table>
        <div className="file-list-box">
          <table className="table is-narrow is-striped file-list">
            <tbody>
              { this.props.files }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FileList;