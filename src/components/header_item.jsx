import React from 'react';

class HeaderItem extends React.Component {
  // TODO: better name
  onOpenDialog () {
    this.props.showDialog(this.props.label);
  }

  render () {
    return (
      <div className="pane">
        <div className="toolbar-actions">
          <button className="btn btn-default open-dialog" data-target={ this.props.label } onClick={ this.onOpenDialog.bind(this) }>
            <span className="icon icon-folder icon-text"></span>
          </button>
          <span>{ this.props.dir }</span>
        </div>
      </div>
    );
  }
}

export default HeaderItem;