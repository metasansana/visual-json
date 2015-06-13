import React from 'react';
import merge from 'merge';
import dot from 'dot-access';
import Control from './Control';

class Select extends Control {

    renderComponent(callbacks) {

        var self = this;
        var props = self._defaultProps();
        var valueField = this.props.valueField || 'value';
        var labelField = this.props.labelField || 'label';
        
        props.options = props.options || [];

        var options = props.options.map(function (option) {
            var value  = dot.get(option,valueField);
            var label = dot.get(option,labelField);
            return React.createElement('option', {value: value, label:label});
        });

        if(this.props.blank) {
            options.unshift(React.createElement('option', {value: '', disabled: true}, this.props.blank));
            props.defaultValue = props.defaultValue || '';
        }

        options.unshift(props);
        options.unshift('select');
        return React.createElement.apply(React, options);

    }
}

Select.propTypes = {
    $parser: React.PropTypes.object.isRequired,
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
        label: React.PropTypes.string,
        value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
    })).isRequired,
    blank: React.PropTypes.string,
    valueField:React.PropTypes.string,
    labelField:React.PropTypes.string,
    valueComponent:React.PropTypes.node,
    labelComponent:React.PropTypes.node,
    attrs: React.PropTypes.object,
    model: React.PropTypes.object.isRequired
};
export default Select;
