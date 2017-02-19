import React from 'react';
import classNames from 'classnames';

class ProgressBar extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ visible: nextProps.visible });
  }

  render () {
    return (
      <a className={ classNames('button is-loading loading', { 'is-hidden': !this.state.visible }) }>&nbsp;</a>
    );
  }
}

export default ProgressBar;
