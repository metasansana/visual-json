import React from 'react';
import CheckBox from './CheckBox';

/**
 * StackCheckBox renders a checkboxes that stack when put next to each other
 */
class StackedCheckBox extends CheckBox {

    renderComponent(props, children) {
        return React.createElement('div', {className: 'checkbox'},
            CheckBox.prototype.renderComponent.call(this, props, children));
    }

}

CheckBox.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    checked: React.PropTypes.bool,
    set: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func
};

export default StackedCheckBox
