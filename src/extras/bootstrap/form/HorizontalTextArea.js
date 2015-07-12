import React from 'react';
import HorizontalInput from './HorizontalInput';

/**
 * HorizontalTextArea
 */
class HorizontalTextArea extends HorizontalInput {

    constructor(props){
        super(props);
        this.NATIVE_TYPE = 'textarea';
    }

}

HorizontalTextArea.propTypes = {
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
    labelClassName: React.PropTypes.string,
    labelValue: React.PropTypes.string,
    controlClassName: React.PropTypes.string
};

export default HorizontalTextArea;
