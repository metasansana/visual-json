import React from 'react';
import Radio from './Radio';

/**
 * StackedRadio
 */
class StackedRadio extends Radio {

    renderComponent(props, children) {
        return React.createElement('div', {className: 'radio'},
            Radio.prototype.renderComponent.call(this, props, children));
    }
}

StackedRadio.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    checked: React.PropTypes.bool,
    set: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func
};

export default StackedRadio;
