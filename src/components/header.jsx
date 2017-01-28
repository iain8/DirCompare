import React from 'react';
import HeaderItem from './header_item';

class Header extends React.Component {
  render () {
    return (
      <nav className="nav">
        <div className="nav-center">
          <div className="nav-item">
            <p>DirCompir</p>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;