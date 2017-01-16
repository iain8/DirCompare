import React from 'react';

class HeaderItem extends React.Component {
  render () {
    return (
      <div className="pane">
        <div className="toolbar-actions">
          <button className="btn btn-default open-dialog" data-target="A">
            <span className="icon icon-folder icon-text"></span>
          </button>
          <span className="list-A-dir"></span>
        </div>
      </div>
    );
  }
}

export default HeaderItem;