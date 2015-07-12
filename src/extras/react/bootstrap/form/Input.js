import React from 'react';
import Control from './Control';

/**
 * Input
 */
class Input extends Control {

    constructor(props){
        super(props);
        this.NATIVE_TYPE = 'input';
    }

    renderComponent(props) {
        return React.createElement(this.NATIVE_TYPE, props);
    }

}

Input.propTypes = {
    type: React.PropTypes.string,
    nativeType: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    value: React.PropTypes.any,
    placeholder: React.PropTypes.any,
    set: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func
};

Input.defaultProps = {
    className: 'form-control'
};

export default Input;
