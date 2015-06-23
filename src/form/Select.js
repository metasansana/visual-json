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
        var options = props.options || [];

        if (this.props.blank) {
            options.unshift(React.createElement('option', {value: '', disabled: true, key: 0}, this.props.blank));
            props.defaultValue = props.defaultValue || '';
        }

        options = (props.options || []).map(function (option, key) {

            var value, label;

            if (option.key === 0) return option;

            if (typeof option === 'object') {
                 value = dot.get(option, valueField);
                 label = dot.get(option, labelField);
            }else{
                value =  option;
                label = option;
            }

            return React.createElement('option', {value: value, label: label, key: key});
        });

        return React.createElement('select', props, options);

    }
}

Select.propTypes = {
    $parser: React.PropTypes.object.isRequired,
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
        label: React.PropTypes.string,
        value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
    })).isRequired,
    blank: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
    valueField: React.PropTypes.string,
    labelField: React.PropTypes.string,
    valueComponent: React.PropTypes.node,
    labelComponent: React.PropTypes.node,
    attrs: React.PropTypes.object,
    model: React.PropTypes.object.isRequired
};
export default Select;
