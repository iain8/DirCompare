import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import FileList from './components/file_list.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
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