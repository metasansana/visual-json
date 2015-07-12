import React from 'react';
import VerticalInput from './VerticalInput';

/**
 * VerticalTextArea
 */
class VerticalTextArea extends VerticalInput {

    constructor(props) {
        super(props);
        this.NATIVE_TYPE = 'textarea';
    }

}

VerticalTextArea.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    placeholder: React.PropTypes.any,
    rows: React.PropTypes.number,
    value: React.PropTypes.any,
    set: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    labelValue: React.PropTypes.string

};

export default VerticalTextArea;
