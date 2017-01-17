import React from 'react';

class HeaderItem extends React.Component {
  render () {
    return (
      <div className="pane">
        <div className="toolbar-actions">
          <button className="btn btn-default open-dialog" data-target={ this.props.label } onClick={ this.props.showDialog }>
            <span className="icon icon-folder icon-text"></span>
          </button>
          <span className={ `list-${ this.props.label }-dir` }></span>
        </div>
      </div>
    );
  }
}

export default HeaderItem;