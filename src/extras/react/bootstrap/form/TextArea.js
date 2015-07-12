import React from 'react';
import Input from './Input'

/**
 * TextArea
 */
class TextArea extends Input {

    constructor(props){
        super(props);
        this.NATIVE_TYPE='textarea';
    }

}

TextArea.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    placeholder: React.PropTypes.any,
    rows: React.PropTypes.number,
    value: React.PropTypes.any,
    set: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func
};

export default TextArea
