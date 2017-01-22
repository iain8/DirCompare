import React from 'react';

class Footer extends React.Component {
  render () {
    return (
      <footer className="nav columns is-gapless">
        <div className="column">
          <p>left</p>
        </div>
        <div className="column">
          <p>right</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
