import React from 'react';
import { Table, Thead, Th } from 'reactable';

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
        <Table
          className="table is-narrow is-striped file-list"
          data={ this.props.files }
          itemsPerPage={ 20 }
          pageButtonLimit={ 5 }>
          <Thead>
            <Th column="file">Name</Th>
            <Th column="date">Modified</Th>
            <Th column="size">Size</Th>
          </Thead>
        </Table>
      </div>
    );
  }
}

export default FileList;