import React from 'react';
import Control from './Control';

/**
 * CheckBox
 */
class CheckBox extends Control {

    changed() {
        var {name, value} = this.props;
        this.props.set(name, !value);
    }

    getControlProps(){
        var props = Control.prototype.getControlProps.call(this);
        props.checked = props.value;
        props.type = 'checkbox';
        delete props.className;
        delete props.value;
        return props;
    }

    renderComponent(props) {

        var {inline, children} = this.props;

        return React.createElement('div', {className: 'checkbox'},
            React.createElement('label', {className: (inline) ? 'checkbox-inline' : null},
                React.createElement('input', props), children));
    }

}

CheckBox.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    inline: React.PropTypes.bool,
    value: React.PropTypes.bool,
    placeholder: React.PropTypes.any,
    set: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func
};

export default CheckBox
