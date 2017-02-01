import React from 'react';

/**
 * Header component, displays app title
 */
class Header extends React.Component {
  /**
   * Render the header
   */
  render () {
    return (
      <nav className="nav">
        <div className="nav-center">
          <div className="nav-item">
            <p>&nbsp;</p>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;