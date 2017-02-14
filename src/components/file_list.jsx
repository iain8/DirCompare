import React from 'react';
import { Table, Thead, Th } from 'reactable';

/**
 * A list of files
 */
class FileList extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = { itemsPerPage: 19 };
  }

  updateListLength () {
    // TODO: debounce!!

    const height = window.innerHeight - 95;

    this.setState({ itemsPerPage: Math.floor(height / 25) - 1 });
  }

  componentWillMount () {
    this.updateListLength();
  }

  componentDidMount () {
    window.addEventListener('resize', () => this.updateListLength());
  }

  componentWillMount () {
    window.removeEventListener('resize', () => this.updateListLength());
  }

  /**
   * Render a file list table
   * 
   * @returns string Rendered table
   */
  render () {
    return (
      <div className="column is-half file-list-box">
        <Table
          className="table is-narrow is-striped file-list"
          data={ this.props.files }
          itemsPerPage={ this.state.itemsPerPage }
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