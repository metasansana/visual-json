import React from 'react';
import Input from './Input';

/**
 * VerticalInput
 */
class VerticalInput extends Input {

    renderComponent(props) {
        return React.createElement('div', {className: 'form-group'},
            React.createElement('label', {}, this.props.labelValue),
                Input.prototype.renderComponent.call(this, props));
    }
}

VerticalInput.propTypes = {
    type: React.PropTypes.string,
    nativeType: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    labelValue:React.PropTypes.string,
    value: React.PropTypes.any,
    placeholder: React.PropTypes.any,
    set: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func
};

export default VerticalInput;
