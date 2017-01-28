// TODO: replace with preact
import React from 'react';
import ReactDOM from 'react-dom';
import fs from 'fs';
import path from 'path';
import util from 'util';
import electron from 'electron';
import Header from './components/header';
import Footer from './components/footer';
import FileList from './components/file_list';
import FileListItem from './components/file_list_item';
import formatDate from 'date-fns/format';
import isToday from 'date-fns/is_today';

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

      const otherState = this.state[this.state[pane].rival].files;

      update[pane].files = this.listFiles(pane, dir[0]).filter(e => {
        return !otherState.some((file, index) => {
          if (file.props.file === e.props.file
            && file.props.date === e.props.date) {
            delete otherState[index];

            return false;
          }
        });
      });

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
        const date = formatDate(mtime, isToday(mtime) ? 'HH:mm:ss' : 'DD-MM-YYYY');

        list.push(
          <FileListItem file={ file } date={ date } key={ `${pane}-${filePath}` } />
        );
      }
    });

    return list;
  }

  render () {
    return (
      <div>
        <Header />
        <main className="columns is-gapless">
          <FileList files={ this.state.A.files } />
          <FileList files={ this.state.B.files } />
        </main>
        <Footer
          dirA={ this.state.A.dir }
          dirB={ this.state.B.dir }
          showDialog={ this.showDialog.bind(this) } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#container'));