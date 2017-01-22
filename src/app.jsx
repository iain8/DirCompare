import React from 'react';
import ReactDOM from 'react-dom';
import fs from 'fs';
import path from 'path';
import util from 'util';
import electron from 'electron';
import Header from './components/header';
import FileList from './components/file_list';
import FileListItem from './components/file_list_item';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      A: {
        dir: '',
        files: [],
        rival: 'B'
      },
      B: {
        dir: '',
        files: [],
        rival: 'A'
      }
    };
  }

  showDialog (pane) {
    const dir = electron.remote.dialog.showOpenDialog({
      buttonLabel: 'Choose',
      properties: ['openDirectory'],
      title: 'Select directory'
    });

    // TODO: do this better
    const update = {};
    update[pane] = {};

    if (dir) {
      update[pane].dir = dir;

      update[pane].files = this.listFiles(pane, dir[0]);
      // .filter(e => {
      //   return this.state[this.state[pane].rival].files.indexOf(e) === -1}
      // );

      this.setState(update);
    }
  }

  listFiles (pane, dir, list = []) {
    fs.readdirSync(dir).forEach(file => {
      const filePath = path.join(dir, file);

      if (fs.statSync(filePath).isDirectory()) {
        list = this.listFiles(pane, filePath, list);
      } else {
        const stats = fs.statSync(filePath);
        const mtime = new Date(util.inspect(stats.mtime));

        list.push(
          <FileListItem file={ file } date={ mtime.toLocaleString('en-GB') } key={ `${pane}-${file}` } />
        );
      }
    });

    return list;
  }

  render () {
    return (
      <div>
        <Header dirA={ this.state.A.dir } dirB={ this.state.B.dir } />
        <main className="container">
          <FileList
            files={ this.state.A.files }
            showDialog={ this.showDialog.bind(this) } 
          />
          <FileList
            files={ this.state.B.files }
            showDialog={ this.showDialog.bind(this) }
          />
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#container'));