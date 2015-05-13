import React from 'react';

import Callbacks from './Callbacks';
import Control from './Control';


/**
 * Input
 */
class Input extends Control {

    renderComponent(callbacks) {

        var self = this;

        return React.createElement('input',  self._defaultProps({type:self.props.type}));

    }
}

Input.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    model: React.PropTypes.object.isRequired,
    attrs: React.PropTypes.object
}

export default Input;
