import React from 'react';
import DirPicker from './dir_picker';

class Footer extends React.Component {
  render () {
    return (
      <footer className="nav columns is-gapless">
        <div className="column">
          <DirPicker 
            showDialog={ this.props.showDialog } 
            label="A" 
            dir={ this.props.dirA } />
        </div>
        <div className="column">
          <DirPicker 
            showDialog={ this.props.showDialog } 
            label="B" 
            dir={ this.props.dirB } />
        </div>
      </footer>
    );
  }
}

export default Footer;
