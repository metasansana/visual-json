import React from 'react';
import Input from './Input';

/**
 * HorizontalInput
 */
class HorizontalInput extends Input {

    renderComponent() {

        var bsSize = this.props.bsSize || 'md';
        var labelWidth = 'col-'+bsSize+'-'+(this.props.labelWidth || 4);
        var controlWidth = 'col-'+bsSize+'-'+(this.props.controlWidth || 8);

        return React.createElement('div', {className: 'form-group '+this.state.validationState},
            React.createElement('label', {className: labelWidth}, this.props.labelValue),
            React.createElement('div', {className: controlWidth},
                Input.prototype.renderComponent.call(this)));

    }
}

HorizontalInput.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    model: React.PropTypes.object.isRequired,
    bsSize: React.PropTypes.oneOf(['xs','sm', 'md', 'lg']),
    labelWidth:React.PropTypes.number,
    labelValue: React.PropTypes.string,
    controlWidth:React.PropTypes.number
};

export default HorizontalInput;
