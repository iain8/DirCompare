import React from 'react';
import ReactDOM from 'react-dom';
import fs from 'fs';
import electron from 'electron';
import Header from './components/header';
import FileList from './components/file_list';

class App extends React.Component {
  showDialog () {
    const dir = electron.remote.dialog.showOpenDialog({
      buttonLabel: 'Choose',
      properties: ['openDirectory'],
      title: 'Select directory'
    });
  }

  render () {
    return (
      <div>
        <Header showDialog={ this.showDialog.bind(this) } />
        <div className="window-content">
          <div className="pane-group">
            <FileList />
            <FileList />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#container'));