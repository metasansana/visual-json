import React from 'react';
import merge from 'merge';

import Control from './Control';

class Select extends Control {

    renderComponent(callbacks) {

        var self = this;

        return React.createElement.apply(React, ['select', self._defaultProps()].concat(
            this.props.options.map(function (option) {
                return React.createElement('option', {value: option.value}, option.label);
            })));


    }
}
Select.propTypes = {
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired
    })).isRequired,
    attrs: React.PropTypes.object,
    model: React.PropTypes.object.isRequired
};
export default Select;
