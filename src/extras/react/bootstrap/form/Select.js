import React from 'react';
import merge from 'merge';
import DotAccess from 'dot-access';
import Control from './Control';

class Select extends Control {

    constructor(props) {
        super(props);
        this.NATIVE_TYPE = 'select';
    }

    renderComponent(props) {

        var {blank, valueField, labelField, options, value} = props;

        options = options.slice().map(function (option, key) {

            var optVal, optLabel;

            if (typeof option === 'object') {
                optVal = DotAccess.get(option, valueField);
                optLabel = DotAccess.get(option, labelField);
            } else {
                optVal = option;
                optLabel = option;
            }

            if (optVal === value)
                props.value = optVal;

            return React.createElement('option', {value: optVal, key: key}, optLabel);

        });

        if (blank)
            options.unshift(React.createElement('option',
                {value: '', disabled: true, key: -1}, blank));

        return React.createElement('select', props, options);

    }
}

Select.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    multiple: React.PropTypes.bool,
    blank: React.PropTypes.string,
    valueField: React.PropTypes.string,
    labelField: React.PropTypes.string,
    options: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string, React.PropTypes.array]),
    value: React.PropTypes.any,
    placeholder: React.PropTypes.any,
    set: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func
};

Select.defaultProps = {
    options: [],
    valueField: 'value',
    labelField: 'label'
};

export default Select;
