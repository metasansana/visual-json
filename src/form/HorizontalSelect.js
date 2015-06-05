import React from 'react';
import merge from 'merge';

import Select from './Select';

class HorizontalSelect extends Select {

    renderComponent() {

        var props = this._defaultProps();
        var bsSize = this.props.bsSize || 'md';
        var labelWidth = 'col-'+bsSize+'-'+(this.props.labelWidth || 4);
        var controlWidth = 'col-'+bsSize+'-'+(this.props.controlWidth || 8);

        props.options = props.options || [];

        return React.createElement('div', {className: 'form-group' + this.state.validationState},
            React.createElement('label', {className: labelWidth}, this.props.labelValue),
            React.createElement('div', {className: controlWidth},
                Select.prototype.renderComponent.call(this)));


    }
}
HorizontalSelect.propTypes = {
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired
    })).isRequired,
    model: React.PropTypes.object.isRequired,
    bsSize: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    labelWidth: React.PropTypes.number,
    controlWidth: React.PropTypes.number
};
export default HorizontalSelect;
