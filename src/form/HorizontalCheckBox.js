import React from 'react';
import CheckBox from './CheckBox';
/**
 * HorizontalCheckBox
 */
class HorizontalCheckBox extends CheckBox {

    renderComponent() {

        var bsSize = this.props.bsSize || 'md';
        var controlWidth = 'col-'+bsSize+'-'+(this.props.controlWidth || 8);
        var offset = null;

        if(this.props.offset)
        controlWidth = controlWidth+' col-'+bsSize+'-offset-'+this.props.offset;

        delete this.props.offset;

        return React.createElement('div', {className: 'form-group'+this.state.validationState},
            React.createElement('div', {className: controlWidth},
                CheckBox.prototype.renderComponent.call(this)));
    }

}

HorizontalCheckBox.propTypes = {
    name: React.PropTypes.string.isRequired,
    bsSize: React.PropTypes.oneOf(['xs','sm', 'md', 'lg']),
    controlWidth:React.PropTypes.number
};

export default HorizontalCheckBox;
