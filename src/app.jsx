// TODO: replace with preact
import React from 'react';
import ReactDOM from 'react-dom';
import electron from 'electron';
import Header from './components/header';
import Footer from './components/footer';
import FileList from './components/file_list';
import FileReader from './libs/file_reader';

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

    const update = {};
    update[pane] = {};

    if (dir) {
      update[pane].dir = dir;

      const otherState = this.state[this.state[pane].rival].files;

      update[pane].files = FileReader.parseFiles(otherState, pane, dir);

      this.setState(update);
    }
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