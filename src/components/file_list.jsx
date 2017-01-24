import React from 'react';

class FileList extends React.Component {
  render () {
    return (
      <div className="column">
        <table className="table is-narrow is-striped file-list">
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
      </div>
    );
  }
}

export default FileList;