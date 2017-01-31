// TODO: replace with preact
import React from 'react';
import ReactDOM from 'react-dom';
import electron from 'electron';
import Header from './components/header';
import Footer from './components/footer';
import FileList from './components/file_list';
import FileReader from './libs/file_reader';

/**
 * App component, contains everything
 */
class App extends React.Component {
  /**
   * Set default state
   */
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

  /**
   * Show the directory selector dialog then update the given file list
   * 
   * @param Label of file list to update
   */
  showDialog (pane) {
    const dir = electron.remote.dialog.showOpenDialog({
      buttonLabel: 'Choose',
      properties: ['openDirectory'],
      title: 'Select directory'
    });

    const update = {};
    update[pane] = {};

    if (dir) {
      update[pane].dir = dir[0];

      const otherState = this.state[this.state[pane].rival].files;

      update[pane].files = FileReader.parseFiles(otherState, pane, dir[0]);

      this.setState(update);
    }
  }

  /**
   * Render the whole app
   */
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