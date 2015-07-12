import React from 'react';
import Control from './Control';

/**
 * Radio
 */
class Radio extends Control {

    constructor(props) {
        super(props);
        this.NATIVE_TYPE = 'radio';
        this.INLINE_CLASS = 'radio-inline'
    }

    renderComponent(props, children) {

        var {inline} = props;
        delete props.className;

        return React.createElement('label', {
                className: (inline) ? this.INLINE_CLASS : null
            },
            React.createElement('input', props), children);

    }
}

Radio.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    checked: React.PropTypes.bool,
    value: React.PropTypes.any,
    inline: React.PropTypes.bool,
    set: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func
};

export default Radio;