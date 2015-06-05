import React from 'react';
import Control from './Control';

/**
 * CheckBox
 */
class CheckBox extends Control {

    renderComponent() {

        return React.createElement('div', {className: 'checkbox'},
            React.createElement('label', {className: (this.props.inline) ? 'checkbox-inline' : null},
                React.createElement('input', this._defaultProps({className: '', type: 'checkbox'})),
                this.props.labelValue));
    }

}

CheckBox.propTypes = {
    inline: React.PropTypes.bool,
    labelValue: React.PropTypes.string
};

export default CheckBox;
