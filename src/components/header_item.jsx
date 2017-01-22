import React from 'react';

class HeaderItem extends React.Component {
  // TODO: better name
  onOpenDialog () {
    this.props.showDialog(this.props.label);
  }

  render () {
    return (
      <div className="half-width mdc-theme--dark">
        <button className="mdc-button open-dialog" data-target={ this.props.label } onClick={ this.onOpenDialog.bind(this) }>
          <i className="material-icons md-24 md-light">folder</i>
        </button>
        <span className="mdc-typography--body1">{ this.props.dir }</span>
      </div>
    );
  }
}

export default HeaderItem;