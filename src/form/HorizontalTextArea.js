import React from 'react';
import TextArea from './TextArea';

/**
 * HorizontalTextArea
 */
class HorizontalTextArea extends TextArea {

    renderComponent() {

        var bsSize = this.props.bsSize || 'md';
        var labelWidth = 'col-'+bsSize+'-'+(this.props.labelWidth || 4);
        var controlWidth = 'col-'+bsSize+'-'+(this.props.controlWidth || 8);

        return React.createElement('div', {className: 'form-group' + this.state.validationState},
            React.createElement('label', {className: labelWidth}, this.props.labelValue),
            React.createElement('div', {className: controlWidth},
                TextArea.prototype.renderComponent.call(this)));
    }

}

HorizontalTextArea.propTypes = {
    name: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    model: React.PropTypes.object.isRequired,
    bsSize: React.PropTypes.oneOf(['xs','sm', 'md', 'lg']),
    labelWidth:React.PropTypes.number,
    controlWidth:React.PropTypes.number
};

export default HorizontalTextArea;
