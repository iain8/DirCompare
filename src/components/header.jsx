import React from 'react';
import HeaderItem from './header_item.jsx';

class Header extends React.Component {
  render () {
    return (
      <header className="toolbar toolbar-header">
        <div className="pane-group">
          <HeaderItem />
          <HeaderItem />
        </div>
      </header>
    );
  }
}

export default Header;