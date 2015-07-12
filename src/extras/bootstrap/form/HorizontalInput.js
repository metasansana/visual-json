import React from 'react';
import util from '../util';
import HorizontalControl from './HorizontalControl';
import Input from './Input';

/**
 * HorizontalInput
 */
class HorizontalInput extends Input {

    renderComponent(props) {

        return React.createElement(HorizontalControl, HorizontalControl.takeProps(props),
            Input.prototype.renderComponent.call(this, props));

    }
}

HorizontalInput.propTypes = {
    type: React.PropTypes.string,
    nativeType: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    value: React.PropTypes.any,
    placeholder: React.PropTypes.any,
    set: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    labelClassName: React.PropTypes.string,
    labelValue: React.PropTypes.string,
    controlClassName: React.PropTypes.string
};

export default HorizontalInput;
