import React from 'react';

import Control from './Control';

class Option extends React.Component {

    render() {

        var self = this;
        var props =  {
            name: self.props.name,
            value: self.props.value,
            type: 'radio',
            onChange:self.props.onChange
        };

        if(self.props.value === self.props.checked)
        props.checked = true;

        return React.createElement('div', {className: 'radio'}, null,
            React.createElement('label', {className: 'radio-inline control-label'},
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
    label: React.PropTypes.string
};


class Radio extends Control {

    renderComponent(callbacks) {

        var self = this;

        var args = self.props.options.map(function (option) {

            var props = {
                value: option.value,
                label: option.label,
                checked:self._defaultValue()};

            return React.createElement(Option, self._defaultProps(props));

        });

        args.unshift(null);
        args.unshift('span');

        return React.createElement.apply(React,args);

    }
}
Radio.propTypes = {
    name: React.PropTypes.string.isRequired,
    model: React.PropTypes.object.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired
    })).isRequired
};
export default Radio;
