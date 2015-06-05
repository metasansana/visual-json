import React from 'react';
import Control from './Control';
import Radio from './Radio';

class VerticalRadio extends Radio {

    renderComponent() {

        return React.createElement('div', {className: 'form-group' + this.state.validationState},
            React.createElement('label', {}, this.props.labelValue),
            Radio.prototype.renderComponent.call(this));


    }
}

VerticalRadio.propTypes = {
    name: React.PropTypes.string.isRequired,
    model: React.PropTypes.object.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired
    })).isRequired,
    bsSize: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    labelWidth: React.PropTypes.number,
    controlWidth: React.PropTypes.number
};
export default VerticalRadio;
