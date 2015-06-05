import React from 'react';

import Control from './Control';

class Option extends React.Component {

    render() {

        var self = this;
        var props =  {
            name: self.props.name,
            value: self.props.value,
            type: 'radio',
            onChange:self.props.onChange,
            className:''
        };

        if(self.props.value === self.props.checked)
        props.checked = true;

        return React.createElement('div', {className: 'radio'}, null,
            React.createElement('label', {className: (this.props.inline)?'radio-inline':null},
                React.createElement('input', props), self.props.label));

    }
}

Option.propTypes = {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
    ]).isRequired,
    selected: React.PropTypes.object,
    model: React.PropTypes.object,
    label: React.PropTypes.string,
    inline: React.PropTypes.bool
};

/**
 * Radio
 */
class Radio extends Control {

    renderComponent() {

        var ret = this.props.options.map(function (option, key) {

            var props = {
                value: option.value,
                label: option.label,
                inline: this.props.inline,
                checked: this._defaultValue(),
                key:key
            };

            return React.createElement(Option, this._defaultProps(props));

        }.bind(this));

        if(this.props.wrap)
        return React.createElement('span', null, ret);

        return ret;
    }
}

Radio.propTypes = {
    name: React.PropTypes.string.isRequired,
    model: React.PropTypes.object.isRequired,
    inline: React.PropTypes.bool,
    wrap: React.PropTypes.bool,
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired
    })).isRequired
};
export default Radio;
