import React from 'react';
import HeaderItem from './header_item';

class Header extends React.Component {
  render () {
    return (
      <header className="toolbar toolbar-header">
        <div className="pane-group">
          <HeaderItem label="A" showDialog={ this.props.showDialog } dir={ this.props.dirA } />
          <HeaderItem label="B" showDialog={ this.props.showDialog } dir={ this.props.dirB } />
        </div>
      </header>
    );
  }
}

export default Header;