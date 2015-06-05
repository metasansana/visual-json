import React from 'react';
import Control from './Control';
import Radio from './Radio';

class HorizontalRadio extends Radio {

    renderComponent() {

        var bsSize = this.props.bsSize || 'md';
        var labelWidth = 'col-'+bsSize+'-'+(this.props.labelWidth || 4);
        var controlWidth = 'col-'+bsSize+'-'+(this.props.controlWidth || 8);


        return React.createElement('div', {className: 'form-group' + this.state.validationState},
            React.createElement('label', {className: labelWidth}, this.props.labelValue),
            React.createElement('div', {className: controlWidth},
            Radio.prototype.renderComponent.call(this)));
    }
}

HorizontalRadio.propTypes = {
    name: React.PropTypes.string.isRequired,
    model: React.PropTypes.object.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired
    })).isRequired,
    bsSize: React.PropTypes.oneOf(['xs','sm', 'md', 'lg']),
    labelWidth:React.PropTypes.number,
    controlWidth:React.PropTypes.number
};
export default HorizontalRadio;
