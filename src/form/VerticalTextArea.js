import React from 'react';
import TextArea from './TextArea';

/**
 * HorizontalTextArea
 */
class HorizontalTextArea extends TextArea {

    renderComponent() {

        return React.createElement('div', {className: 'form-group ' + this.state.validationState},
            React.createElement('label', {}, this.props.labelValue),
            TextArea.prototype.renderComponent.call(this));
    }

}

HorizontalTextArea.propTypes = {
    name: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    model: React.PropTypes.object.isRequired,
};

export default HorizontalTextArea;
