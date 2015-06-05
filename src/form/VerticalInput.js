import React from 'react';
import Input from './Input';

/**
 * VerticalInput
 */
class HorinzontalInput extends Input {

    renderComponent() {

        return React.createElement('div', {className: 'form-group'+this.state.validationState},
            React.createElement('label', {}, this.props.labelValue),
                Input.prototype.renderComponent.call(this));
    }
}

HorinzontalInput.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    model: React.PropTypes.object.isRequired,
    bsSize: React.PropTypes.oneOf(['xs','sm', 'md', 'lg']),
    labelValue:React.PropTypes.string
};

export default HorinzontalInput;
