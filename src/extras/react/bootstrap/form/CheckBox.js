import React from 'react';
import Radio from './Radio';

/**
 * CheckBox
 */
class CheckBox extends Radio {

    constructor(props){
        super(props);
        this.NATIVE_TYPE = 'checkbox';
        this.INLINE_CLASS = 'checkbox-inline'
    }

    changed(){
        this.props.set(this.props.name, !this.props.checked);
    }

}

CheckBox.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    checked: React.PropTypes.bool,
    inline: React.PropTypes.bool,
    set: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func
};

export default CheckBox
