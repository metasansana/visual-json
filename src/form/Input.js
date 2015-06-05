import React from 'react';
import Control from './Control';


/**
 * Input
 */
class Input extends Control {

    renderComponent() {

        return React.createElement('input',  this._defaultProps({type:this.props.nativeType||this.props.type||'text'}));

    }
}

Input.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    model: React.PropTypes.object.isRequired,
    nativeType: React.PropTypes.string
}

export default Input;
