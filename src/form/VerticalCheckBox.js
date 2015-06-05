import React from 'react';
import CheckBox from './CheckBox';
/**
 * HorizontalCheckBox
 */
class VerticalCheckBox extends CheckBox {

    renderComponent() {

        return React.createElement('div', {className: 'form-group'+this.state.validationState},
                CheckBox.prototype.renderComponent.call(this));
    }

}

VerticalCheckBox.propTypes = {};

export default VerticalCheckBox;
