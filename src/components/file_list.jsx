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

    // TODO: replace <table> with <div>s - it just isn't working out!
  }
}

export default FileList;