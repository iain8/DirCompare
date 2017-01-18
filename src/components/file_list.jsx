import React from 'react';

class FileList extends React.Component {
  render () {
    return (
      <div className="pane">
        <table className="table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Size</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="list-B">
            { this.props.files }
          </tbody>
        </table>
      </div>
    );
  }
}

export default FileList;