import React from 'react';
import Control from './Control';


/**
 * Input
 */
class Input extends Control {

    renderComponent() {

        return React.createElement('input',  this._defaultProps({type:this.props.type}));

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
