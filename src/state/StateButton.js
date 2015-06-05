import React from 'react';
import Button from '../form/Button';

/**
 * StateButton is used to manipulate state of a context object via the click of a button.'
 *
 * Whatever you supply as the `resultKey` prop, will be set to the value of the buttons name.
 * This is typically usefull when used in combination with a Switch component.
 */
class StateButton extends Button {

  buttonClicked(e) {
    var state = {};
    state[this.props.stateKey] = this.props.name;
    this.props.target.setState(state);
  }
}

StateButton.propTypes = {
  name: React.PropTypes.string.isRequired,
  target: React.PropTypes.object.isRequired,
  stateKey: React.PropTypes.string.isRequired,
  textLabel: React.PropTypes.string,
  icon: React.PropTypes.string,
  className:React.PropTypes.string

};

export default StateButton;
